import { useState, useEffect } from "react";
import './App.css'

function AutoTips(){
  const tips = [
    "Keep components small and focused.",
    "Use keys when rendering lists.",
    "Lift state up when needed.",
    "Break UI into reusable pieces.",
    "Comment your logic for clarity."
  ];

  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true);
  const [isPasued, setIsPaused] = useState(false);

  useEffect(() => {
    if(isPasued) return;

    const timer = setInterval(() => {
      setFade(false); //current tip fades smoothly
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % tips.length);
        setFade(true); //fade in starts
      },200); //the tip comes in after 200ms
    },3000); //this process repeat for every 3s

    return () => clearInterval(timer);
  }, [isPasued]); //this useEffect depends on isPaused

  function nextTip(){
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % tips.length);
      setFade(true);
    }, 200);
  }

  function prevTip(){
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + tips.length) % tips.length);
      setFade(true);
    }, 200)
  }

  return(
    <div
      className="container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    > 
      <h2 className="title">React Tips</h2>
      <p className={fade ? "fade": ""}>{tips[index]}</p>

      <div>
        <button className="prev-btn" onClick={prevTip}><span>&lt;</span>  Previous Tip</button>
        <button className="next-btn" onClick={nextTip}>Next Tip<span>&#62;</span></button>
      </div>
    </div>
  )
}

export default AutoTips