let plantA;
let textureA;
var displayNum;

function preload() {
  plantA = loadModel('PlantA.obj', true);
  textureA = loadImage('Textureblomst.png');
  displayNum = 0;
}

function setup() {
  createCanvas(windowWidth, windowHeight-150, WEBGL);
}

function draw() {
  //setup
  background(0);
  noStroke();
  lights();

  //calculations
  scaler = 5 * sin(frameCount * windowHeight*0.00002); //extremely magic number

  translate(0,scaler,0);

  //actions (thsi code is very stupid, future works, this needs to scale better)
  if(displayNum==1){
  rotateY(frameCount * 0.01);
  }else if(displayNum == 2){
    rotateY(frameCount * -0.01);
  }else if(displayNum == 3){
    rotateY(frameCount * 0.01);
  }

  //plant rendering
  texture(textureA);
  model(plantA);
}