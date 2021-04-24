

var countryAirQuality =
[{country: "Canada", oLevel:"14%", aqi:3},{country: "United States", oLevel:"12%", aqi:2},
 {country: "Mexico", oLevel:"9%", aqi:1},{country: "Ecuador", oLevel:"13%", aqi:2},
 {country: "Brazil", oLevel:"10%", aqi:2},{country: "Venezuela", oLevel:"8%", aqi:1},
 {country: "France", oLevel:"8%", aqi:1},{country: "Spain", oLevel:"9%", aqi:0},
 {country: "Denmark", oLevel:"11%", aqi:2},{country: "Switzerland", oLevel:"12%", aqi:2}];

// append country, oLevel and api to arrray with number slot
function displayCountryData(index){
  $('#country').text(countryAirQuality[index].country);
  $('#oLevel').text(countryAirQuality[index].oLevel);
  $('#aqi').text(countryAirQuality[index].aqi);

  if(countryAirQuality[index].aqi < 12 && countryAirQuality[index].aqi > 10 ){
    $('#oLevel').css({color: "rgb(199, 106, 0)"});
  }
  else if(countryAirQuality[index].aqi < 10){
    $('#oLevel').css({color: "rgb(199, 0, 0)"});
  }

  if(countryAirQuality[index].aqi > 0 && countryAirQuality[index].aqi < 3){
    $('#aqi').css({color: "rgb(199, 106, 0)"});
  }

  if(countryAirQuality[index].aqi === 0){
    $('#aqi').css({color: "rgb(199, 0, 0)"});
  }
}

// Generates random value from 0 - 10 to call random slot from array containing country and air quality data
var intervalCountryData = window.setInterval( () => {
  displayCountryData(randNumb(0, 9))
}, 3000);

var intervalSuccessData = window.setInterval( () => {
  incrementDecrementPercent()
}, 5000);

var intervalSuccessData = window.setInterval( () => {
  incrementProcesses()
}, 10000);

var intervalDose = window.setInterval( () => {
  incrementDoses()
}, 10000);


// Random number generator
$('.grid').each(function () {
  var x = Math.floor((Math.random() * 25) + 1);
  $(this).text(x);
});

// Generate random number from 1 - 10
function randNumb(lowerVal, upperVal){
  var min = lowerVal;
  var max = upperVal;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}



function incrementDecrementPercent(){
var currentNumber = $("#successRate").text();
var rN = randNumb(0,1);
if(rN === 0){
  currentNumber++;
  $("#successRate").text(currentNumber);
}
else{
  currentNumber--;
  $("#successRate").text(currentNumber);

  }
}

function incrementProcesses(){
  var currentNumber = $("#precedures").text();
  currentNumber++;
  $("#precedures").text(currentNumber);
}

function incrementDoses(){
  var currentNumber = $("#phaseDose").text();
  currentNumber++;
  currentNumber++;
  currentNumber++;
  $("#phaseDose").text(currentNumber);
}

var coordinates = [{n: -73.56033828218284, w: 45.51563283706199}, {n: 73.570601, w: 45.532387}, {n: -73.548496, w: 45.559827},
                    {n: -73.637100, w:45.610079}, {n:-73.652346, w:45.618454}, {n:-73.736112, w:45.495847}, {n:-73.604950, w:45.454126},
                    {n: -73.651660, w:45.500230}, {n: -73.653314, w: 45.516909}, {n:  -73.687464, w: 45.528319}, {n: -73.688461, w: 45.544798}
                  ];


$("#submitData").click( () => {

  let num = randNumb(0, coordinates.length - 1);
  let n = coordinates[num].n;
  let w = coordinates[num].w;

  let url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.861261778575!2d-" + -73.651660 + "!3d" + 45.500230 + "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzMyLjYiTiA3M8KwMzMnNDcuOSJX!5e1!3m2!1sen!2sca!4v1619223411157!5m2!1sen!2sca";

  console.log(url);

  $("#mapText").fadeOut(200);

  $("#mapData").fadeIn(400);

  $("#mapData").attr("src", url);

});
