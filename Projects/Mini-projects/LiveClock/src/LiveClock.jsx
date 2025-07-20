import { useState, useEffect } from "react";

function LiveClock(){
  const [time, setTime] = useState(new Date());
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date);
      setBlink((prev) => !prev);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumer = (num) => String(num).padStart(2, "0")

  return (
    <div style={{textAlign: "center", marginTop: "2rem"}}>
      <h2>Current Time</h2>
      <h1>
        {formatNumer(time.getHours())}
        <span style={{opacity: blink ? 1 : 0}}>:</span>
        {formatNumer(time.getMinutes())}
        <span style={{opacity: blink ? 1 : 0}}>:</span>
        {formatNumer(time.getSeconds())}
      </h1>
      
    </div>
  )
}

export default LiveClock