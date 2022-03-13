let x;
let y;

let prevX;
let prevY;

let walkDist = 10;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;

  background(51);
}

function draw() {
  strokeWeight(2);
  stroke(255);
  // point(x, y);

  let r = floor(random(4));

  switch (r) {
    case 0:
      x += walkDist;
      break;
    case 1:
      x -= walkDist;
      break;
    case 2:
      y -= walkDist;
      break;
    case 3:
      y += walkDist;
  }

  if (x > width) {
    x = 0;
    prevX = x;
    prevY = y;
  }
  if (x < 0) {
    x = width;
    prevX = x;
    prevY = y;
  }
  if (y > height) {
    y = 0;
    prevX = x;
    prevY = y;
  }
  if (y < 0) {
    y = height;
    prevX = x;
    prevY = y;
  }

  line(x, y, prevX, prevY);

  prevX = x;
  prevY = y;
}
