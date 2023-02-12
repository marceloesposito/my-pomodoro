const timerDisplay = document.querySelector('#timer');
const startStopBtn = document.querySelector('#start-stop');
const resetBtn = document.querySelector('#reset');

let timeLeft = 1500; // 25 minuti in secondi
let timerInterval;

function displayTimeLeft(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const display = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  timerDisplay.textContent = display;
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      return;
    }
    displayTimeLeft(timeLeft);
  }, 1000);
}

startStopBtn.addEventListener('click', () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    startStopBtn.textContent = 'Start';
  } else {
    startTimer();
    startStopBtn.textContent = 'Stop';
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 1500;
  displayTimeLeft(timeLeft);
  startStopBtn.textContent = 'Start';
});

displayTimeLeft(timeLeft);
