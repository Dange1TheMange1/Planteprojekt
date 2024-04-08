// The Coding Train / Daniel Shiffman
// WebGL - loadModel

// Video: https://youtu.be/FUI7HEEz9B0

let angle = 0;
let plantA;
let textureA;

function preload() {
  plantA = loadModel('PlantA.obj', true);
  textureA = loadImage('Textureblomst.png');
}

function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {
  //setup
  background(0);
  noStroke();
  lights();

  //calculations
  scaler = 5 * sin(frameCount * windowHeight*0.00002); //extremely magic number

  //actions
  rotateY(frameCount * 0.01);
  translate(0,scaler,0);

  //plant rendering
  texture(textureA);
  model(plantA);
}