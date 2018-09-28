var rectX;
var rectSize;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  rectSize = 30;
}

function draw() {
  background(200);

  rectX = 0; // initialization
  while(rectX <= mouseX) { // boolean experssion
    rect(rectX, height/2, rectSize/3, rectSize);
    rectX = rectX + rectSize; // incremental operation.
  }


}
