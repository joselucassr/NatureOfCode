class Walker {
  constructor(x, y, walkDist) {
    this.pos = createVector(x, y);
    this.prevPos = createVector(x, y);
    this.walkDist = walkDist;
  }

  update() {
    this.pos.x = this.pos.x + random(-1, 1) * this.walkDist;
    this.pos.y = this.pos.y + random(-1, 1) * this.walkDist;
  }

  show() {
    strokeWeight(2);
    stroke(255);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);

    this.updatePrev();
  }

  edge() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }
}
