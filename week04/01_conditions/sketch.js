var circleX;
var circleSize;

function setup() {
  createCanvas(500, 500);
  circleX = width/2;
  circleSize = 20;
}

function draw() {
  background(200);

  fill(255, 0, 0);
  var rightEdge = circleX + circleSize/2;
  var leftEdge = circleX - circleSize/2;

  if (mouseX == circleX) {
    fill(255, 255, 255);
  } else if (rightEdge < mouseX) {
    circleX = circleX - 1;
  } else if (leftEdge < mouseX && rightEdge > mouseX){
    fill(0, 255, 255);
  } else {
    circleX = circleX + 1;
  }

  ellipse(circleX, width/2, circleSize, circleSize);

}
