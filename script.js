const pomodoroTime = document.getElementById('pomodoro-time');
    const startButton = document.getElementById('start');
    let timeLeft = 25 * 60; // время в секундах
    let timerId;
    
    function startTimer() {
    timerId = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        pomodoroTime.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (timeLeft === 0) {
        clearInterval(timerId);
        timeLeft = 25 * 60;
        pomodoroTime.innerText = '25:00';
        startButton.innerText = 'start';
        }
    }, 1000);
    }
    
    startButton.addEventListener('click', () => {
    if (startButton.innerText === 'start') {
        startButton.innerText = 'stop';
        startTimer();
    } else {
        startButton.innerText = 'start';
        clearInterval(timerId);
    }
    });
    
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', () => {
    clearInterval(timerId);
    timeLeft = 25 * 60;
    pomodoroTime.innerText = '25:00';
    startButton.innerText = 'start';
    });