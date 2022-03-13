let inc = 0.01;

function setup() {
  createCanvas(800, 800);
  noiseDetail(24);
}

function draw() {
  let yoff = 0;

  loadPixels();
  for (let y = 0; y < width; y += 1) {
    let xoff = 0;
    for (let x = 0; x < height; x += 1) {
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff) * 255;

      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;

      xoff += inc;
    }

    yoff += inc;
  }

  updatePixels();
}
