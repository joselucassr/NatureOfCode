let inc = 0.1;
let scale = 10;
let cols, rows;

let zoff = 0;

let particleAmt = 10000;
let particles = [];
let flowField;

let fr;

function setup() {
  createCanvas(1200, 800);
  cols = width / scale;
  rows = height / scale;
  fr = createP('');

  flowField = new Array(cols * rows);

  for (let i = 0; i < particleAmt; i += 1) {
    particles[i] = new Particle();
  }

  background(255);
}

function draw() {
  let yoff = 0;

  for (let y = 0; y < rows; y += 1) {
    let xoff = 0;
    for (let x = 0; x < cols; x += 1) {
      let index = x + y * cols;
      let angle = noise(xoff, yoff, zoff) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(4);
      flowField[index] = v;
      xoff += inc;

      // strokeWeight(1);
      // stroke(0, 50);
      // push();
      // translate(x * scale, y * scale);
      // rotate(v.heading());
      // line(0, 0, scale, 0);
      // pop();
    }

    yoff += inc;
    zoff += 0.0004;
  }

  for (let i = 0; i < particles.length; i += 1) {
    particles[i].follow(flowField);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  fr.html(floor(frameRate()));
}
