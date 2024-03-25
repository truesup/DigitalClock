function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.getElementById('hours').querySelector('.digits').innerText = formatTime(hours);
    document.getElementById('minutes').querySelector('.digits').innerText = formatTime(minutes);
    document.getElementById('seconds').querySelector('.digits').innerText = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);

updateClock();