var interval;
var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;

var hourHead = document.getElementById("hour");
var minHead = document.getElementById("min");
var secHead = document.getElementById("sec");
var msecHead = document.getElementById("msec");

function startTimer() {
    msec++;
    msecHead.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secHead.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60) {
        min++;
        minHead.innerHTML = min;
        sec = 0;
    }
    else if (min >= 60) {
        hour++;
        hourHead.innerHTML = hour;
        min = 0;
    }

}

// setInterval(startTimer, 10)

function start() {
    interval = setInterval(startTimer, 10)
}
function pause() {
    clearInterval(interval);
}
function reset() {

     hour = 0;
     min = 0;
     sec = 0;
     msec = 0;

     hourHead.innerHTML =hour;
     minHead.innerHTML =min;
     secHead.innerHTML =sec;
     msecHead.innerHTML =msec;
}
