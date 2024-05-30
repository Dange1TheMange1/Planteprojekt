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
'{"plantName":"Christian"},' +
'{"plantName":"Geoff"},' +
'{"plantName":"Walter"}]}';

var obj = JSON.parse(plants);

function updatenavn(){
document.getElementById("plantNameViewer").innerHTML =
"Currently viewing " + obj.plants[displayNum-1].plantName;
}

function display(num, plant) {
    displayNum = num;
    plantNo = plant;
    updatenavn()
}
