var circleX = 320;

function setup() {
  createCanvas(640, 480);
  noStroke();
}

function draw() {
  background(100);
  ellipseMode(CENTER);

  fill (255, 0, 0);
  ellipse(circleX, height/2, 100, 100);

  circleX = circleX + 1;
}
