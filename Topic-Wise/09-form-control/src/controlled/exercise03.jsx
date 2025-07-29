// Topic: Controlled Component (Checkbox)
// Level: Beginner
// Problem: Create a checkbox input to agree to terms. When checked, enable a "Continue" button.

import { useState } from "react";

function CheckField(){
  const [agree, setAgree] = useState(false)

  return(
    <div>
      <label>
      <input 
        type="checkbox"
        checked={agree}
        onChange={(e) => setAgree(e.target.checked)}
      />
      I agree to the terms and conditions
      </label>
      <br />

      <button disabled={!agree}>Continue</button>
    </div>
  )
}

export default CheckField