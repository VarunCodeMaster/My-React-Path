// Topic: Focus Input with useRef
// Level: Intermediate
// Problem: Create a form with an input field and a "Focus" button. When the button is clicked, focus the input field using `useRef`.

import { useRef } from "react";

function FocusInput(){
  const inputRef = useRef(null)

  const handleFocus = () =>{
    inputRef.current.focus()
  }

  return(
    <div>
      <h2>Input Focus</h2>
      <input 
        type="text" 
        placeholder="Write something"
        ref={inputRef}
        style={{padding: "50px", width: "200px"}}
      />

      <br />
      <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default FocusInput