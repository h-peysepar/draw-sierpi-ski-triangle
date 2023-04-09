const canvas = document.querySelector('#canvas');
const canvasSizeRate = 0.4;
const W = innerHeight * canvasSizeRate;
const H = innerWidth * canvasSizeRate;
canvas.width = W;
canvas.height = H;
const POINT_RADIUS = 1;
const c = canvas.getContext('2d');
const drawPoint = function ({ x, y }) {
  c.beginPath();
  const startAngle = 0; // Starting point on circle
  const endAngle = Math.PI + (Math.PI * 2) / 2; // End point on circle

  c.arc(x, y, POINT_RADIUS, startAngle, endAngle);
  c.fill();
};
const $1 = { x: W / 2, y: 20 };
const $2 = { x: 20, y: H - 20 };
const $3 = { x: W - 20, y: H - 20 };
const mainPoints = [$1, $2, $3];
const $random = { x: W / 2, y: H * 0.75 };
drawPoint($1);
drawPoint($2);
drawPoint($3);

let animationId;
let counter = 0;
const startDrawing = function () {
  if (!animationId) {
    lastPoint = $random;
    drawPoint($random);
  }
  console.log(counter++);
  const rn /* random number */ = Math.floor(Math.random() * 3);
  const rp /* random point */ = mainPoints[rn];
  const x = (rp.x + lastPoint.x) / 2;
  const y = (rp.y + lastPoint.y) / 2;
  lastPoint = { x, y };
  drawPoint(lastPoint);

  animationId = requestAnimationFrame(startDrawing);
};
const stopDrawing = function () {
  cancelAnimationFrame(animationId);
};

document.querySelector('#start').addEventListener('click', startDrawing);
document.querySelector('#stop').addEventListener('click', stopDrawing);
