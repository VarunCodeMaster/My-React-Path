// Topic: Lifting State
// Level: Beginner
// Problem: Build a form where one component handles input for a username, and another displays a greeting message ("Hello, username"). Use lifting state to connect them.

import { useState } from "react";

// Child 1 Component
function UserInput({username, onChange}){
  return(
    <div>
      <label>
        Name: 
        <input 
          type="text" 
          placeholder="Enter your name"
          value={username}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  )
}

// Child 2 Component
function DisplayGreeting({username}){
  return(
    <div>
      <h2>{username ? `Hello ${username}` : `Please enter your name`}</h2>
    </div>
  )
}

// Parent Component
function GreetingForm(){
  const [username, setUserName] = useState("")

  return(
    <div>
      <h2>Greeting Form</h2>
      <UserInput username={username} onChange={setUserName} />
      <DisplayGreeting username={username} />
    </div>
  )
}

export default GreetingForm