import "./timer.css";
import { useEffect, useState } from "react";

function Timer(props) {
  // I am making a padding for the timer div.
  // I need this function to run untill 10 minutes have passed
  // after every 1 sec it increases by 1, and it  shows, that variable on the h3.
  // I should have to two variables, one for the seconds, each time it reaches 60, it adds one to the minutes variable.
  //plan

  // I first make the 60 second timer with the set interval and it should run till 60, then after hitting 60 the variable is reset to 0.

  const [updateTimer, setUpdateTimer] = useState([0, 0]);
  const [timer, setTimer] = useState(0);
  let minutes = Math.floor(timer/60);
  let seconds = timer%60;
  useEffect(() => {
    setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);
  }, [timer]);
  console.log(timer);

if (minutes >= 1){
  return <h3 id="timer">Break's Over</h3>;
}
  // bordersTime()
  return <h3 id="timer">Timer {minutes.toString().padStart(2,"0")}:{seconds.toString().padStart(2,"0")}</h3>;
}

export default Timer;
