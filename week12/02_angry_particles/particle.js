class Particle {
  constructor(loc, size) {
    this.location = loc.copy();
    this.velocity = createVector(0,0);
    this.size = size;
    this.force = createVector(0,0);
    this.friction = 0.995;
  }

  applyForce(force){
    this.force.add(force.copy());
  }

  update() {
    this.velocity.add(this.force);
    this.location.add(this.velocity);
    this.velocity.mult(this.friction);
    this.force.set(0, 0);
  }

  bounce (width, height) {
    if (this.location.y > height) {
      this.velocity.y *= -1;
    }
  }

  draw () {
    ellipse(this.location.x, this.location.y, this.size, this.size);
  }
}
