let particles = [];

// this function is to set up the overall canvas
function setup() {
  // create the canvas
  createCanvas(innerWidth, innerHeight);
  
  // font styling for the letters
  textFont("monospace");
  textSize(15);
  
  // colorMode(mode,[max1],[max2],[max3],[maxA])
  colorMode(RGB, 1, 100, 100, 100);
  
}

function draw() {
  // fill the page
  fill(0, 10);
  
  // scope of particles being drawn
  rect(0, 0, width, height);
  
  // number of particles to instantiate
  if (particles.length < 120) particles.push(new Particle());
  
  // draw each particle & update
  for (var i = 0; i < particles.length; i++){
    particles[i].draw();
    particles[i].update();
  }
}

// sizing of the overall window
function windowResize() {
  resizeCanvas(innerWidth, innerHeight);
}

class Particle {
  // each individual particle will have these settings
  constructor() {
    this.pos = createVector(0, 0);
    this.speed = 1;
    this.depth = 0;
    this.reset();
  }
  
  reset() {
    this.pos = createVector(floor(random(width) / 12) * 12, -36);
    
    // keep the original speed
    this.speed = random(0.2, 1.2);
  }
  
  update() {
    // if particle goes off the page
    if (this.pos.y > height) {
      this.reset();
    }
    
    // increase speed
    this.pos.y += this.speed * 12;
  }
    
  draw() {
    // choose random character
    let char = String.fromCharCode(floor(random(33, 142)));
    
    fill(0, 100, 0, map(this.speed, 0.2, 1.2, 49, 109));
    text(char, this.pos.x, floor(this.pos.y / 14) * 14);
  }
}