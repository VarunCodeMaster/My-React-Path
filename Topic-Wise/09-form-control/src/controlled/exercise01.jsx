// Topic: Controlled Component (Text Input)
// Level: Beginner
// Problem: Create a controlled input field that updates the name state and displays "Hello, <name>" below it.

import { useState } from "react";

function NameField(){
  const [name, setName] = useState("");

  return(
    <div>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}  
      />

      <p>Hello {name}</p>
    </div>
  )
}

export default NameField