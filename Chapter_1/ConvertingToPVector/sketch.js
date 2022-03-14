let walker;

function setup() {
  createCanvas(400, 400);

  walker = new Walker(width / 2, height / 2, 15);

  background(51);
}

function draw() {
  walker.update();
  walker.show();
  walker.edge();
}
