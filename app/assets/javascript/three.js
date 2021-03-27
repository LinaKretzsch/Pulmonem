let scene, camera;

function init()
{
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 1;
  camera.rotation.x = 1.16;
  camera.rotation.y = -0.12;
  camera.rotation.z = 0.27;

  let ambient = new THREE.AmbientLight(0x555555);
  scene.add(ambient);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  scene.fog = new THREE.FogExp2(0x03544e, 0.001);
  renderer.setClearColor(scene.fog.color);
  document.body.appendChild(renderer.domElement);

  let loader = new THREE.TextureLoader();
  loader.load("smoke.png", function(texture){
    cloudGeo = new THREE.PlaneBufferGeometry(500,500);
    cloudMaterial = new THREE.MashLambertMaterial({
      map:texture,
      transparent:true
    });
    for(leti = 0; i< 50; i++){
      let cloud = new THREE.Mesh(cloudGEO, cloudMaterial);
      cloud.position.set(
        Math.random()*800-400,
        500,
        Math.random()*500-500
      );
      cloud.rotation.x = 1.16;
      cloud.rotation.y = -0.12;
      cloud.rotation.z = Math.random()*2*Math.PI;
      cloud.material.opacity = 0.55;
      scene.add(cloud);
      }
  })

  render();
}
function render() {
  renderer.render(scene,camera);
  requestAnimationFrame(render);
}
init();
