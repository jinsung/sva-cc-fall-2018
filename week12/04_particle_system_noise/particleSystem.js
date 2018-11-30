class ParticleSystem {
  constructor() {
    this.particles = [];
    this.gravity = createVector(0, 0.053);
  }

  addParticles(loc, numOfParticles) {
    for (var i = 0; i < numOfParticles; i++) {
      var size = random( 2, 5 );
      var p = new Particle(loc, size);
      var wind = createVector(random(-1, 1), random(-1, 1));
      this.particles.push(p);
      p.applyForce(wind);
    }
  }

  update() {

    var millis = Date.now() * 0.002;
    for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      var n = noise(p.location.x * 0.01, p.location.y  * 0.01, millis) * 15;
      var fx = Math.cos(n);
      var fy = Math.sin(n);
      var nf = createVector(fx, fy).mult(0.05);
      p.applyForce(nf);
      p.update();
      if (p.isDead) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    for (var i = 0; i < this.particles.length; i++) {
      var p = this.particles[i];
      p.draw();
    }
  }
}
