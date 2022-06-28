import "./timer.css";
import { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const breakTime = 5;
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  useEffect(() => {
    setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);
  }, [timer]);

  if (minutes >= breakTime) {
    return <h3 id="timer">Break's finished!</h3>;
  }
  return (
    <h3 id="timer">
      Break Timer: {minutes.toString().padStart(1, "0")}:
      {seconds.toString().padStart(2, "0")}/{breakTime}:00
    </h3>
  );
}

export default Timer;
