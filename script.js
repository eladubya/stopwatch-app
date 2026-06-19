const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');

let startTime = 0;
let elapsed = 0;
let timer = null;
let running = false;

function format(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return [h, m, s].map(n => String(n).padStart(2, '0')).join(':');
}

startStopBtn.addEventListener('click', () => {
  if (running) {
    clearInterval(timer);
    elapsed += Date.now() - startTime;
    startStopBtn.textContent = 'Start';
  } else {
    startTime = Date.now();
    timer = setInterval(() => {
      display.textContent = format(elapsed + Date.now() - startTime);
    }, 10);
    startStopBtn.textContent = 'Stop';
  }
  running = !running;
});

resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  running = false;
  elapsed = 0;
  display.textContent = '00:00:00';
  startStopBtn.textContent = 'Start';
});
