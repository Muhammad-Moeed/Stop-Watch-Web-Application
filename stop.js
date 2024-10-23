let timer;
let seconds = 0;
let isPaused = false;

function updateDisplay() {
    const timeDisplay = document.querySelector('.time');
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startStopwatch() {
    if (!timer) {
        timer = setInterval(() => {
            if (!isPaused) {
                seconds++;
                updateDisplay();
            }
        }, 1000);
    }
}

function pauseStopwatch() {
    isPaused = true;
}

function resetStopwatch() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    isPaused = false;
    updateDisplay();
}