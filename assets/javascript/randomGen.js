

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
