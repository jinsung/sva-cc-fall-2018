var particleSystem;

function setup() {
  createCanvas(500, 500);
  smooth();
  particleSystem = new ParticleSystem();
}

function draw() {
  background(200);
  particleSystem.update();
  particleSystem.display();
}

function mouseClicked() {
  var loc = createVector(mouseX, mouseY);
  particleSystem.addParticles(loc, 10);
}
