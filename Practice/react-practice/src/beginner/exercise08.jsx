// Topic: Conditional Rendering
// Level: Beginner
// Problem: Create a simple toggle button that switches between "ON" and "OFF" states, and renders a different background color based on the state.

import { useState } from "react";

function ToggleButton(){
  const [isOn, setIsOn] = useState(false)

  const handleToggle = () => {
    setIsOn((prev) => !prev)
  }

  const containerStyle = {
    backgroundColor: isOn ? "#a8f0a5" : "#f0a5a5",
    textAlign: "center",
    padding: "100px",
    borderRadius: "8px",
    transition: "background-color 0.3s ease"
  }

  return(
    <div style={containerStyle}>
      <h2>Status: {isOn ? "ON" : "OFF"}</h2>
      <button onClick={handleToggle}>
        Turn {isOn ? "OFF" : "ON"}
      </button>
    </div>
  )
}

export default ToggleButton