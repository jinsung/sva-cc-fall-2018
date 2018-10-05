var rectWidth;
var rectHeight;
var counter;

function setup() {
  createCanvas(500, 500);
  rectWidth = 3;
  rectHeight = 10;
  counter = 0;
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(200);
  fill(0);
  var gap = 15;
  for (var y = rectHeight; y < height; y+=gap) {
    for (var x = rectWidth; x < width; x+=gap) {
      push();
      var dx = x - mouseX;
      var dy = y - mouseY;
      var angle = Math.atan2(dy, dx);
      translate(x, y);
      rotate(angle + Math.PI / 2);
      rect(0, 0, rectWidth, rectHeight);
      pop();
    }
  }
  counter++;
}
