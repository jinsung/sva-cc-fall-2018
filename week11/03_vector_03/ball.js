class Ball {
  constructor(loc, vel, size) {
    this.location = loc;
    this.velocity = vel;
    this.size = size;
  }

  update() {
    this.location.add(this.velocity);
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
