let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(51);
  stroke(255);
  noFill();

  beginShape();
  let xoff = start;
  for (let x = 0; x < width; x += 1) {
    stroke(255);
    let y = noise(xoff) * height;
    vertex(x, y);

    xoff += inc;
  }
  endShape();
  start += inc;
}
