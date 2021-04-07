let scene, camera, cloudParticles = [], container;

container = document.getElementById('canvas');

let threeDiv = document.createElement('threeDiv');
threeDiv.style.zindex = 0;



function init()
{
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 1;
  camera.rotation.x = 1.16;
  camera.rotation.y = -0.12;
  camera.rotation.z = 0.27;

  let ambient = new THREE.AmbientLight(0x25563);
  scene.add(ambient);

  // Adding lights which adds colour
  let directionalLight = new THREE.DirectionalLight(0x19FF8C, 10.00);
  directionalLight.position.set(0,0,1);
  scene.add(directionalLight);

  let redPointLight = new THREE.PointLight(0x54d86c, 5, 450, 100.7);
  redPointLight.position.set(100,300,100);
  scene.add(redPointLight);

  let orangePointLight   = new THREE.PointLight(0x36aca6, 10, 450, 90.7);
  orangePointLight.position.set(300,300,100);
  scene.add(orangePointLight);

  let bluePointLight = new THREE.PointLight(0xcc6600, 15, 450, 50.7);
  bluePointLight.position.set(200,300,100);
  scene.add(bluePointLight);


  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  scene.fog = new THREE.FogExp2(0x010003, 0.001);
  renderer.setClearColor(scene.fog.color);
  container.appendChild(renderer.domElement);

  let loader = new THREE.TextureLoader();
  loader.load("assets/javascript/smoke.png", function(texture){
    cloudGeo = new THREE.PlaneBufferGeometry(500,500);
    cloudMaterial = new THREE.MeshLambertMaterial({
      map:texture,
      transparent:true
    });
    for(let i = 0; i< 20; i++){
      let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
      cloud.position.set(
        Math.random()*1000-400,
        500,
        Math.random()*500-500
      );
      cloud.rotation.x = 1.16;
      cloud.rotation.y = -0.12;
      cloud.rotation.z = Math.random()*2*Math.PI;
      cloud.material.opacity = 0.10;
      cloudParticles.push(cloud);
      scene.add(cloud);
      }
  })

  render();
}
function render() {
  cloudParticles.forEach(p=> {
    p.rotation.z -= 0.002;
  });
  renderer.render(scene,camera);
  requestAnimationFrame(render);
}



init();
