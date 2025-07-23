// Topic: useEffect, setInterval
// Problem: Countdown Timer

import { useEffect, useState } from "react";

function CountdownTimer(){
  const [timeLeft, setTimerLeft] = useState(10);

  useEffect(() => {
    if(timeLeft === 0) return; //we don't have start another timer

    //This runs every one second and each time it runs subtracts the recent state
    const timer = setInterval(() => { 
      setTimerLeft((prevTime) => prevTime - 1)
    }, 1000)

    //A cleanup function -> run it when component unmounts
    return () => clearInterval(timer)
  }, [timeLeft])

  function restartTimer() {
    setTimerLeft(10);
  }

  return(
    <div>
      <h1>
        {timeLeft === 0 ? "Time's up" : `Countdown: ${timeLeft}s`}
      </h1>
      <button onClick={restartTimer}>Reset</button>
    </div>
  )
}

export default CountdownTimer