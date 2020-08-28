const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
class Particle {
  constructor(size, x, y, directionX, directionY) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = "#AAAAAA";
    ctx.fill();
  }

  update() {
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

function initializeCanvas() {
  let particleCount = 100;
  for (let i = 0; i < particleCount; i++) {
    let size = Math.random() * 5 + 1;
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    let directionX = Math.random() * 10 - 5;
    let directionY = Math.random() * 10 - 5;
    particlesArray.push(new Particle(size, x, y, directionX, directionY));
  }
}

function animateCanvas() {
  requestAnimationFrame(animateCanvas);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
}

initializeCanvas();
animateCanvas();
