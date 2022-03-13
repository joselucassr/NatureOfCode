function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(51);
  stroke(255);
  noFill();

  beginShape();
  let xoff = 0;
  for (let x = 0; x < width; x += 1) {
    stroke(255);
    let y = noise(xoff) * height;
    vertex(x, y);

    xoff += 0.02;
  }
  endShape();

  updatePixels();
}
