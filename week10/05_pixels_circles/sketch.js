var myImage;

function preload() {
  myImage = loadImage("assets/image.png");
}

function setup() {

  pixelDensity(1);
  createCanvas( 500, 500 );
}

function draw() {
  background(0);
  noStroke();
  myImage.loadPixels();

  fill(0);
  var gap = 6;
  var size = 5;
  var centerX = width/2;
  var centerY = height/2;

  for ( var py = 0; py < height; py += gap ) {
    for ( var px = 0; px < width; px += gap ) {
      var pixelIndex = (px + py * width) * 4;
      var r = myImage.pixels[pixelIndex+0];
      var g = myImage.pixels[pixelIndex+1];
      var b = myImage.pixels[pixelIndex+2];
      fill(r, g, b, 255);
      var x = px+size/2;
      var y = py+size/2;
      var mouseDist = dist(mouseX, mouseY, x, y)/250;
      var mCos = Math.sin(mouseDist * Math.PI * 2 - (millis() * 0.003)) * 10 ;
      var rotX = x + mCos * mouseDist;
      var rotY = y + mCos * mouseDist;
      push();
      translate(rotX, rotY);
      ellipse(0, 0, size, size);
      pop();
    }
  }

}
