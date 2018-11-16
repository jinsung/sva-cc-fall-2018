function setup() {
  createCanvas(500, 500);
  smooth();
}

function draw() {
  background(200);

  var myVector = createVector(mouseX, mouseY);
  // myVector.add(createVector(0, 100));
  // myVector.sub(createVector(0, 100));
  // myVector.mult(0.5);
  // myVector.div(2.0);
  line(0, 0, myVector.x, myVector.y);



}
