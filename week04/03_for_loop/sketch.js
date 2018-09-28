var circleX;
var circleSize;

function setup() {
  createCanvas(500, 500);
  circleSize = 30;
}

function draw() {
  background(200);

  for(circleX = 0; circleX <= width; circleX = circleX + circleSize) {
    ellipse(circleX, height/2, circleSize, circleSize);
  }

}
