const myElement = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
} 



//Crazy plant choosing
let searchUrl = 'api.php?action=query&prop=pageimages&titles=Albert%20Einstein&pithumbsize=100';
let plantName = "Plant";

//den her kode er lort
function displayA() {
    displayNum = 1;
    plantName = "Christians uggerz plante" //det her skal tages fra JSON
}

function displayB() {
    displayNum = 2;
    plantName = "Christian"
}

function displayC() {
    displayNum = 3;
    plantName = "Deez"
}

