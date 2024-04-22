var displayNum = 1;
const locationElement = document.getElementById("location");

function getLocation() { //if statement der tjekker om browser supporter API
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    locationElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  locationElement.innerHTML = "I think you are at<br>Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

var plants = '{"plants":[' +
'{"plantName":"Ugga plante69"},' +
'{"plantName":"Bugga plante42"},' +
'{"plantName":"bruh"}]}';

var obj = JSON.parse(plants);


function updatenavn(){
document.getElementById("plantNameViewer").innerHTML =
"Currently viewing " + obj.plants[displayNum-1].plantName;
}
//den her kode er lort
function displayA() {
    displayNum = 1;
    plantNo = 0;
    updatenavn()
}

function displayB() {
    displayNum = 2;
    plantNo = 1;
    updatenavn()
}

function displayC() {
    displayNum = 3;
    plantNo = 2;
    updatenavn()
}

