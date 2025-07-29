// Topic: Lifting State, useState
// Level: Beginner
// Challenge:
// Create a Switch component (shows ON/OFF).
// The actual state (isOn) lives in the parent.
// Clicking the switch toggles the light and changes background color.

import { useState } from "react";

function BackgroundSwitch(){
  const [isOn, setIsOn] = useState(false);

  return(
    <div style={{
      backgroundColor: isOn ? "yellow" : "black",
      height: "100vh",
      width: "100vw",
      color: isOn ? "black" : "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1>Background Theme Changer</h1>
      <Switch isOn={isOn} setIsOn={setIsOn}/>
    </div>
  )
}

function Switch({isOn, setIsOn}){
  return(
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? "ON" : "OFF"}
    </button>
  )
}

export default BackgroundSwitch
