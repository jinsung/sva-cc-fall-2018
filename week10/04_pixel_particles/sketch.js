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
  var gap = 4;
  var size = 4;
  for ( var py = 0; py < height; py += gap ) {
    for ( var px = 0; px < width; px += gap ) {
      var pixelIndex = (px + py * width) * 4;
      var r = myImage.pixels[pixelIndex+0];
      var g = myImage.pixels[pixelIndex+1];
      var b = myImage.pixels[pixelIndex+2];
      fill(r, g, b, 255);
      push();
      translate(px+size/2, py+size/2);
      ellipse(0, 0, size, size);
      pop();
    }
  }

}
