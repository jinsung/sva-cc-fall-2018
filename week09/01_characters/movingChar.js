class MovingChar {
  constructor(char, x, y) {
    this.char = char;
    this.x = x;
    this.y = y;
  }

  move() {
    this.y = this.y + random(-.3, .3);
  }

  draw () {
    text(this.char, this.x, this.y);
  }
}
