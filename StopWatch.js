document.addEventListener("DOMContentLoaded", function () {
  // Handler when the DOM is fully loaded

  window.onload = function () {

    //--> Section A: Initialization of Variables 
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementsByClassName("tens");
    var appendSeconds = document.getElementsByClassName("seconds");
    var buttonStart = document.getElementsByClassName("button-start");
    var buttonStop = document.getElementsByClassName("button-stop");
    var buttonReset = document.getElementsByClassName("button-reset");
    var Interval;

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

  console.log("--> Program Initiated <-- ");
});




