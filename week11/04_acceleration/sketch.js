var myBall;
var gravity;

function setup() {
  createCanvas(500, 500);
  smooth();
  var loc = createVector(width/2, 10);
  myBall = new Ball(loc, 10);
  gravity = createVector(0, 0.023);
}

function draw() {
  background(200);

  myBall.applyGravity(gravity);

  myBall.update();
  myBall.bounce(width, height);
  myBall.draw();
}
