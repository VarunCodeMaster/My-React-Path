// Topic: Conditional Rendering
// Level: Beginner
// Problem: Create a Login/Logout component that displays either a Login button or a Welcome message and Logout button, based on a loggedIn state.

import { useState } from "react";

function LoginLogout(){
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return(
    <div style={{textAlign: "center", padding: "100px"}}>
      {loggedIn ? (
        <div>
          <h2>Welcome User!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ): (
        <div>
          <h2>Please Log In </h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  )
}

export default LoginLogout