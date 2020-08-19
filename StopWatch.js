window.onload = function () {

  //--> Section A: Initialization of Variables 
  let seconds = 00;
  let tens = 00;
  let appendTens = document.getElementsByClassName("tens");
  let appendSeconds = document.getElementsByClassName("seconds");
  let buttonStart = document.getElementsByClassName("button-start");
  let buttonStop = document.getElementsByClassName("button-stop");
  let buttonReset = document.getElementsByClassName("button-reset");
  let Interval;

  // --> Necessary Functions

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }

  buttonStop.onclick = function () {
    clearInterval(Interval);
  }

  buttonReset.onclick = function () {
    clearInterval(Interval);

    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appenndSeconds.innerHTML = seconds;
  }

  function startTimer() {
    tens++;

    if (tens < 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }



  //--> final bracket
}