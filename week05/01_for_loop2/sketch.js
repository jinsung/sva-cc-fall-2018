var time;

function setup() {
  createCanvas(400, 400);
  time = 0;
}

function draw() {
  background(220);
  var numOfSegments = 200;
  var size = 100;
  time = time + 0.00001;
  var halfWidth = width/2;
  var halfHeight = height/2;
  for (var i=1; i<numOfSegments+1; i=i+1 ) {
    var segAngle = (Math.PI * 2) / numOfSegments;
    var angle = segAngle * i;
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    var lineX = cos * size + halfWidth;
    var lineY = sin * size + halfHeight;
    var dx = lineX - mouseX;
    var dy = lineY - mouseY;
    var newSize = size - 40 * Math.sin(Math.sqrt(dx*dx+dy*dy) * 0.01);
    var lineX1 = cos * newSize + halfWidth;
    var lineY1 = sin * newSize + halfHeight;
    var prevAngle = segAngle * (i-1);
    cos = Math.cos(prevAngle);
    sin = Math.sin(prevAngle);
    var lineX2 = cos * newSize + halfWidth;
    var lineY2 = sin * newSize + halfHeight;
    line(lineX1, lineY1, lineX2, lineY2);
  }
}
