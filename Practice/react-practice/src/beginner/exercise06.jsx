// Topic: Controlled + Uncontrolled Form (Login with File Upload)
// Level: Beginner
// Problem: Create a form with controlled inputs for "Email" and "Password", and an uncontrolled input (file) for "Profile Picture". On submit, display all values (email, password, file name).

import { useState, useRef } from "react";
import '../App.css'

function BasicForm(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const pictureRef = useRef(null)

  const [submitData, setSubmitData] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const pic = pictureRef.current.files[0]

    setSubmitData({email, password,
      pictureName: pic ? pic.name : "No file has been uploaded"
    })
  }

  return(
    <div>
      <h2>Form Using Both Controlled & UnControlled</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <label>
          Email: 
          <input 
            type="email" 
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        </div>
        <br />

        <div>
          <label>
            Password: 
            <input 
              type="password" 
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <br />

        <div>
          <label>Profile Picture: </label>
          <input type="file" ref={pictureRef}/>
        </div>

        <button type="submit">Login</button>
      </form>

      {submitData && (
        <div style={{ marginTop: "20px" }}>
          <h4>Submitted Data:</h4>
          <p><strong>Email:</strong> {submitData.email}</p>
          <p><strong>Password:</strong> {submitData.password}</p>
          <p><strong>File:</strong> {submitData.pictureName}</p>
        </div>
      )}
    </div>
  )
}

export default BasicForm