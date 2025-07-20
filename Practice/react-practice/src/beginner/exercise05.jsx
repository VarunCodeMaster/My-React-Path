// Topic: useState  
// Level: Beginner  
// Problem: Create a ShowName component.  
// It should show a button "Reveal Name", and when clicked, display your name below it.

import { useState } from "react";

function ShowName(){
  const [name, setName] = useState(false);

  return(
    <div>
      <h1>Name: {name}</h1>
      <button onClick={() => setName(
        name ? "Varun" : "No Name"
      )}>Reveal Name</button>
    </div>
  )
}

export default ShowName;