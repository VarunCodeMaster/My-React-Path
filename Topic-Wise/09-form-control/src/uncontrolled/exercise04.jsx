// Topic: Mixing useRef with Controlled Component
// Level: Intermediate
// Problem: Create a controlled input for email and an uncontrolled input for age. On submit, show both values.

import { useStat, useRef, useState } from "react";

function MixedForm(){
  const [email, setEmail] = useState("")
  const ageRef = useRef(null)

  const [submitData, setSubmitData] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const age = ageRef.current.value

    setSubmitData({email, age})
  }

  return(
    <div>
      <h2>Mixed Form Control</h2>
      <form onSubmit={handleSubmit}>
      <div>
      <label>
        Email:
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      </div>

      <div>
      <label>
        Age:
        <input 
          type="number"   
          ref={ageRef}
        />
      </label>

      <button type="submit">Submit</button>
      </div>
      </form>

      {submitData && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>Email:</strong> {submitData.email}</p>
          <p><strong>Age:</strong> {submitData.age}</p>
        </div>
      )}
      
    </div>
  )
}

export default MixedForm