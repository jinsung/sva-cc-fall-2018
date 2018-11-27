var particles;
var gravity;
var wind;

function setup() {
  createCanvas(500, 500);
  smooth();
  var loc = createVector(10, 10);
  particles = [];
  gravity = createVector(0, 0.053);
  wind = createVector(0.005, 0);
}

function draw() {
  background(200);
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    p.applyForce(gravity);
    p.applyForce(wind);
    p.update();
    p.bounce(width, height);
    p.draw();
  }
}

function mouseClicked() {
  var loc = createVector(mouseX, mouseY);
  addParticle(loc);
}

function addParticle (loc) {
  var p = new Particle(loc, 10);
  particles.push(p);
}
