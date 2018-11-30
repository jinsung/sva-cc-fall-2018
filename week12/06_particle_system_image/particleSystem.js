class ParticleSystem {
  constructor(image) {
    this.image = image;
    this.particles = [];
    this.gravity = createVector(0, 0.053);
  }

  addParticles(loc, numOfParticles) {
    for (var i = 0; i < numOfParticles; i++) {
      var size = random( 5, 10 );
      var p = new Particle(loc, size);
      var windPower = 0.1;
      var wind = createVector(random(-windPower, windPower), random(-windPower, windPower));
      this.particles.push(p);
      p.applyForce(wind);
    }
  }

  update() {
    this.image.loadPixels();
    for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      var pixelIndex = ( Math.floor(p.location.x) + Math.floor(p.location.y) * width) * 4;
      var r = this.image.pixels[pixelIndex+0];
      var g = this.image.pixels[pixelIndex+1];
      var b = this.image.pixels[pixelIndex+2];
      var size = 1 + (r+g+b)/3/255 * 5;
      for (var j = i; j >= 0; j--) {
        var pf = this.particles[j];
        var distance = p.location.dist(pf.location);
        if (distance > 0 && distance < Math.max((p.size + pf.size) / 2 + 5, 8)) {
          var pushForce = p5.Vector.sub(p.location, pf.location);
          pushForce.normalize();
          pushForce.div(distance*2);
          pushForce.limit(0.1);
          p.applyForce(pushForce);
          pf.applyForce(pushForce.mult(-1));
        }
      }

      p.update(size);
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
