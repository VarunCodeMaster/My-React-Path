// Topic: Controlled Component (Textarea)
// Level: Beginner
// Problem: Create a controlled textarea that updates the "message" state. Display character count below it.

import { useState } from "react";

function TextField(){
  const [text, setText] = useState("");

  return(
    <div>
      <h2>Text Area</h2>
      <textarea 
        rows="5"
        cols="40"
        placeholder="Type your message here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Input: {text}</p>
      <p>Character count: {text.length}</p>
    </div>
  )
}

export default TextField