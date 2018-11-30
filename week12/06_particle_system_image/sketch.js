var particleSystem;
var myImage;

function preload() {
  myImage = loadImage("assets/cc.png");
}

function setup() {
  pixelDensity(1);
  createCanvas(500, 500);
  image(myImage, 0, 0);
  smooth();
  noStroke();
  particleSystem = new ParticleSystem(myImage);
}

function draw() {
  background(0);
  //image(myImage, 0, 0);
  particleSystem.update();
  particleSystem.display();
  if (mouseIsPressed) {
    var loc = createVector(mouseX, mouseY);
    particleSystem.addParticles(loc, 3);
  }
}
