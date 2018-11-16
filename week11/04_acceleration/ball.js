class Ball {
  constructor(loc, size) {
    this.location = loc;
    this.velocity = createVector(0,0);
    this.size = size;
    this.acceleration = createVector(0,0);
  }

  applyGravity(gravity){
    this.gravity = gravity;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  bounce (width, height) {
    if (this.location.x > width || this.location.x < 0) {
      if (this.location.x > width) {
        this.location.x = width;
      } else {
        this.location.x = 0;
      }
      this.velocity.x *= -1;
    } else if (this.location.y > height || this.location.y < 0) {
      if (this.location.y > height) {
        this.location.y = height;
      } else {
        this.location.y
         = 0;
      }
      this.velocity.y *= -1;
    }
  }

  draw () {
    ellipse(this.location.x, this.location.y, this.size, this.size);
  }
}
