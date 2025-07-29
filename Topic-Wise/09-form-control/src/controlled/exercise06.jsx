// Topic: Controlled Form + Real-time Feedback
// Level: Advanced
// Problem: Create a password field that shows real-time strength feedback as the user types.

import { useState } from "react";

function PasswordCheck(){
  const [password, setPassword] = useState("");

  function getStrenght(){
    if(password.length === 0) return "";
    if(password.length < 6) return "Weak";
    if(password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[^a-zA-Z0-9]/)) {
      return "Strong"
    }
    return "Medium"
  }

  const strength = getStrenght(password);

  const strengthColor = {
    "": "transparent",
    Weak: "red",
    Medium: "orange",
    Strong: "green"
  }

  return(
    <div>
      <h2>Password Strength Checker</h2>
      <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {strength && 
        <p style={{ color: strengthColor[strength], fontWeight: "bold" }}>
          Strength: {strength}
        </p>
      }
    </div>
  )
}

export default PasswordCheck