var particleSystem;

function setup() {
  createCanvas(500, 500);
  smooth();
  noStroke();
  particleSystem = new ParticleSystem();
}

function draw() {
  background(0);
  particleSystem.update();
  particleSystem.display();
  if (mouseIsPressed) {
    var loc = createVector(mouseX, mouseY);
    particleSystem.addParticles(loc, 1);
  }
}
