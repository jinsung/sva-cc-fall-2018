var ball;
var ball2;

function setup() {
  createCanvas(400, 400);
  ball = new Ball(10, 10, 20, 2, 1.8);
  ball2 = new Ball(20, 300, 20, 2, 1.6);
}

function draw() {
  background(100);
  ball.move();
  ball.bounce(width, height);
  ball.draw();

  ball2.move();
  ball2.bounce(width, height);
  ball2.draw();
}

class Ball {

  constructor (x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  move() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  }

  bounce(width, height) {
    if (this.x > width || this.x < 0) {
      this.speedX = this.speedX * -1;
    } else if (this.y > height || this.y < 0) {
      this.speedY = this.speedY * -1;
    }
  }

  draw () {
    ellipse(this.x, this.y, this.size, this.size);
  }
}
