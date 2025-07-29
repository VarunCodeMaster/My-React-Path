// Topic: Uncontrolled Component (Multiple Inputs)
// Level: Beginner
// Problem: Create a form with "Name", "Email", and "Password" fields using `useRef` for each input. Show all values on submit.

import { useRef, useState } from "react";

function InputForm(){
  const nameRef = useRef(null);
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const [submittedData, setSubmittedData] = useState(null)

  function handleSubmit(e){
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setSubmittedData({name, email, password})
  }

  return(
    <div>
      <h2>Multiple form Inputs</h2>

      <form onSubmit={handleSubmit}>
      <label>
        Name: 
        <input 
          type="text" 
          ref={nameRef}
        />
      </label>
      <br />

      <label>
        Email: 
        <input 
          type="text" 
          ref={emailRef}  
        />
      </label>
      <br />

      <label>
        Password: 
        <input 
          type="text" 
          ref={passwordRef}  
        />
      </label>
      <br />

      <button type="submit" >Submit</button>
    </form>

    {submittedData && (
       <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
    )}
    </div>
  )
}

export default InputForm