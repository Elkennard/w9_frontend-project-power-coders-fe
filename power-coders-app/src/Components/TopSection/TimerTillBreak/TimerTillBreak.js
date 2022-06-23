function Timer(props) {
  //   function countdown(elementName, minutes, seconds) {
  //     var element, endTime, hours, mins, msLeft, time;

  //     function twoDigits(n) {
  //       return n <= 9 ? "0" + n : n;
  //     }

  //     function updateTimer() {
  //       msLeft = endTime - +new Date();
  //       if (msLeft < 1000) {
  //         element.innerHTML = "Time is up!";
  //       } else {
  //         time = new Date(msLeft);
  //         hours = time.getUTCHours();
  //         mins = time.getUTCMinutes();
  //         element.innerHTML =
  //           (hours ? hours + ":" + twoDigits(mins) : mins) +
  //           ":" +
  //           twoDigits(time.getUTCSeconds());
  //         setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
  //       }
  //     }

  //     element = document.getElementById(elementName);
  //     endTime = +new Date() + 1000 * (60 * minutes + seconds) + 500;
  //     updateTimer();
  //   }
  // I need this function to run untill 10 minutes have passed
  // after every 1 sec it increases by 1, and it  shows, that variable on the h3.
  // I should have to two variables, one for the seconds, each time it reaches 60, it adds one to the minutes variable.
  //plan

  // I first make the 60 second timer with the set interval and it should run till 60, then after hitting 60 the variable is reset to 0.
  let minutes = 0;
  let seconds = 0;

  const element = document.getElementById("timer");

  const myInterval = setInterval(function () {
    if (seconds == 10) {
      seconds = 0;
      minutes = minutes + 1;
    }
    if (minutes == 3) {
      minutes = 0;
      myStopFunction(myInterval);
    }

    seconds = seconds + 1;
    element.innerHTML = `${minutes}:${seconds}`;
  }, 1000);

  function myStopFunction(e) {
    clearInterval(e);
  }

  function countdown() {}

  return <h3 id="timer"></h3>;
}

export default Timer;
