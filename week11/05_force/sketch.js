var myBall;
var gravity;
var wind;

function setup() {
  createCanvas(500, 500);
  smooth();
  var loc = createVector(10, 10);
  myBall = new Ball(loc, 10);
  gravity = createVector(0, 0.023);
  wind = createVector(0.01, 0);
}

function draw() {
  background(200);

  myBall.applyForce(gravity);
  myBall.applyForce(wind);
  myBall.update();
  myBall.bounce(width, height);
  myBall.draw();


}
