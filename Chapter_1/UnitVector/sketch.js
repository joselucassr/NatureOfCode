function setup() {
  createCanvas(400, 400);
  background(51);
}

function draw() {
  let pos = createVector(width / 2, height / 2);
  let mouse = createVector(mouseX, mouseY);

  let v = p5.Vector.sub(mouse, pos);
  v.normalize().mult(100);

  // v.setMag(100) // Mesma coisa da operação acima.

  translate(width / 2, height / 2);
  strokeWeight(4);
  stroke(255, 50);
  line(0, 0, v.x, v.y);
}
