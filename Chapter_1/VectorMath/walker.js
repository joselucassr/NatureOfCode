class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    strokeWeight(2);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, 32);
  }

  edge() {
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }
}
