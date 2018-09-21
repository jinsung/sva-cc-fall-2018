var circleX = 320;
var speedX = 1;

function setup() {
  createCanvas(640, 480);
  noStroke();
}

function draw() {
  background(100);
  ellipseMode(CENTER);

  fill (255, 0, 0);
  ellipse(circleX, height/2, 30, 30);

  circleX = circleX + speedX;

  if (circleX > width) {
    speedX = speedX * -1;
  }
}
