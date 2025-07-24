// Topic: Conditional Rendering + useState
// Level: Intermediate
// Problem: Create a ToggleMessage component with a button that shows or hides a secret message.

import { useState } from "react"

function ToggleMessage(){
  const [isVisible, setIsVisible] = useState(false);

  function showMessage(){
   setIsVisible(!isVisible);
  }

  return(
    <div>
       <button onClick={showMessage}>{isVisible ? "Hide Secret 🙈" : "Show Secret 🕵️"}</button>
      {isVisible && <p>Message: The magic is within you.</p>
     }
    </div>
  )
}

export default ToggleMessage;