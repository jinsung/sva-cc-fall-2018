function setup() {
  createCanvas(640, 640);
  noStroke();
}

function draw() {
  background(100);
  ellipseMode(CENTER);

  fill (240, 0, 0);
  ellipse(320, 320, 100, 100);

  fill (220, 0, 0);
  ellipse(320, 320, 80, 80);

  fill (200, 0, 0);
  ellipse(320, 320, 60, 60);

  fill (180, 0, 0);
  ellipse(320, 320, 40, 40);

  fill (160, 0, 0);
  ellipse(320, 320, 20, 20);
}
