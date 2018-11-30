class ParticleSystem {
  constructor() {
    this.particles = [];
    this.gravity = createVector(0, 0.053);
  }

  addParticles(loc, numOfParticles) {
    for (var i = 0; i < numOfParticles; i++) {
      var p = new Particle(loc, 10);
      var wind = createVector(random(-1, 1), random(-1, 1));
      this.particles.push(p);
      p.applyForce(wind);
    }
  }

  update() {
    for (var i = 0; i < this.particles.length; i++) {
      var p = this.particles[i];
      p.applyForce(this.gravity);
      p.update();
      //p.bounce(width, height);
    }
  }

  display() {
    for (var i = 0; i < this.particles.length; i++) {
      var p = this.particles[i];
      p.draw();
    }
  }
}
