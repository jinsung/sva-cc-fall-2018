
function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
}

function draw() {
  background(200);
  var circleSize = 10;
  var circleSpace = 15;
  var maxDisatnce = Math.sqrt(width*width + height*height);
  for (var circleY = 0; circleY <= height; circleY = circleY + circleSpace) {
    for(var circleX = 0; circleX <= width; circleX = circleX + circleSpace) {
      var dx = circleX - mouseX;
      var dy = circleY - mouseY;
      var distance = Math.sqrt(dx * dx + dy * dy);
      var normalizedDistance = distance / maxDisatnce;
      strokeWeight(normalizedDistance * 5);
      fill(normalizedDistance * 255, 100, 150);
      ellipse(circleX, circleY, circleSize, circleSize);
    }
  }


}
