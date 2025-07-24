import { useState } from "react";
import '../beginner/style.css'

// Topic: React Events (onClick)
// Level: Beginner
// Problem: Create a button that shows “You clicked me!” when clicked.

/*function ShowSentence(){
  const [word, setWord] = useState("Nothing to show...");

  function handleClick() {
    setWord("You clicked me");
  }

  return(
    <div>
      <h2>{word}</h2>
      <button onClick={handleClick} className="onclick-btn">Click here</button>
    </div>
  )
}

export default ShowSentence;*/

// Topic: React Events (onChange)
// Level: Beginner
// Problem: Create an input box. As the user types, display “You typed: <text>” in a paragraph below.

/*function TextDisplay(){
  const [text, setText] = useState("");

  function handleChange(event){
    setText(event.target.value);
  }

  return(
    <div>
      <h2 className="text-display">You Typed: {text}</h2>
      <input 
      type="text" 
      onChange={handleChange} 
      placeholder="Type your message" 
      className="text-msg"/>
    </div>
  )
}

export default TextDisplay;*/

// Topic: React Events (Form Submit)
// Level: Intermediate
// Problem: Create a form with a text input and a submit button.
// When submitted, show an alert with the message: "Form submitted by <name>".

/*function FormDisplay(){
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted by ${name}`)
  }

  return(
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <input 
        type="text" 
        placeholder="Type your name" 
        onChange={(e) => setName(e.target.value)} 
        className="text-element"/>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  )
}

export default FormDisplay;*/

// Topic: React Events + useState
// Level: Boss-Level
// Problem: Build a simple Login form with email and password.
// Show "Login Successful ✅" only when both fields are not empty and form is submitted.

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  function handleSubmit(e){
    e.preventDefault();
   
    if(!email.trim() && !password.trim()){
      alert("please fill in both fields");
    }
    else if(!emailPattern.test(email)){
      alert("Invalid email format");
    }
    else{
      setSubmitted(true);
    }
  }

  return(
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="Type your name" 
        onChange={(e) => setEmail(e.target.value)}
        className="name-element"/>
        <input 
        type="Number" 
        placeholder="Enter your age"
        onChange={(e) => setPassword(e.target.value)}
        className="age-element"
        />
        <button type="submit">Submit Form</button>
      </form>

      {submitted && (
        <p style={{color: "green", marginTop: "1rem"}}>
          Login Successful.
        </p>
      )}
    </div>
  )
}

export default Login;