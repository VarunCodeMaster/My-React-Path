// Topic: Controlled Component (Multiple Inputs)
// Level: Intermediate
// Problem: Create a form with name, email, and password fields. Maintain one state object for all fields.

import { useState } from "react";

function SignUpForm(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [submitData, setSubmittedData] = useState(null)

  function handleChange(e){
    const {name, value} = e.target;

    setFormData(prev => ({
      ...prev, 
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault();
    setSubmittedData(formData),
    setFormData({name: "", email: "", password: ""})
  }

  return(
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Signup form</h2>

      <label>
        Name: 
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Email:
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </label>
      <br />

      <label>
        Password:
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>

    {submitData && (
      <div style={{ marginTop: "1rem", background: "#f5f5f5", padding: "1rem" }}>
          <h3>Submitted Info:</h3>
          <p><strong>Name:</strong> {submitData.name}</p>
          <p><strong>Email:</strong> {submitData.email}</p>
          <p><strong>Password:</strong> {submitData.password}</p>
        </div>
    )}
    </div>
  )
}

export default SignUpForm