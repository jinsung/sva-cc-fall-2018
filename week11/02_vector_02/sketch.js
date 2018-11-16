function setup() {
  createCanvas(500, 500);
  smooth();
}

function draw() {
  background(200);

  var myVector = createVector(mouseX, mouseY);
  var center = createVector(width/2, height/2);
  myVector.sub(center);
  // myVector.add(createVector(0, 100));
  // myVector.sub(createVector(0, 100));
  // myVector.mult(0.5);
  // myVector.div(2.0);
  // myVector.normalize();
  // myVector.mult(100);
  push();
  translate(center.x, center.y);
  line(0, 0, myVector.x, myVector.y);
  pop();

  var myVectorLengh = myVector.mag();
  fill(0);
  rect(0, 0, myVectorLengh, 10);

}
