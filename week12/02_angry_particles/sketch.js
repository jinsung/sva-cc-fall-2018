var particles;
var gravity;
var mPressedPos;
var mReleasedPos;
var isShooting = false;
var particleSize = 10;

function setup() {
  createCanvas(1000, 500);
  smooth();
  var loc = createVector(10, 10);
  particles = [];
  particleSize = 10;
  gravity = createVector(0, 0.08);
  mReleasedPos = createVector(0, 0);
  mPressedPos = createVector(0, 0);
}

function draw() {
  background(200);
  stroke(0);

  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    p.applyForce(gravity);
    p.update();
    p.bounce(width, height);
    p.draw();
  }

  if (isShooting) {
    line (mPressedPos.x, mPressedPos.y, mReleasedPos.x, mReleasedPos.y);
    ellipse(mPressedPos.x, mPressedPos.y, particleSize, particleSize);
  }
}

function mousePressed() {

  mPressedPos = createVector(mouseX, mouseY);
  mReleasedPos = mPressedPos.copy();
  isShooting = true;
}

function mouseDragged() {
  mReleasedPos = createVector(mouseX, mouseY);
}

function mouseReleased() {
  mReleasedPos = createVector(mouseX, mouseY);
  var f = mPressedPos.copy().sub(mReleasedPos).mult(0.1);
  addParticle(mPressedPos, f);
  isShooting = false;
}

function addParticle (loc, force) {
  var p = new Particle(loc, particleSize);

  p.applyForce(force);
  particles.push(p);
}
