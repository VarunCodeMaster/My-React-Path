// Topic: useState  
// Level: Beginner  
// Problem: Create a ClickCounter component that starts with count = 0.  
// Each time a button is clicked, increment the count and display the updated value.
import { useState } from "react";
import '../App.css'

function ClickCounter(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <h1>Count {count}</h1>
      <button onClick={()=>setCount(count + 1)}>Add 1</button>
    </div>
    
  )
}

export default ClickCounter;