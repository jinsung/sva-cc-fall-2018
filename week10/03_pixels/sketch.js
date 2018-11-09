var myImage;

function setup() {

  pixelDensity(1);
  createCanvas( 500, 500 );
}

function draw() {
  background(0);
  noStroke();
  loadPixels();

  fill(0);
  var gap = 1;
  var size = 1;
  for ( var py = 0; py < height; py += gap ) {
    for ( var px = 0; px < width; px += gap ) {
      var pixelIndex = (px + py * width) * 4;
      pixels[pixelIndex+0] = px/width * 255;
      pixels[pixelIndex+1] = py/height * 255;
      pixels[pixelIndex+2] = 0;
      pixels[pixelIndex+3] = 255;
    }
  }
  updatePixels();
}
