// Create three variables: title, author, and year. Use them to build a JSX div that displays a book card with:
// A h2 showing the title
// A h3 showing the author
// A p showing the year
import React from "react";

/*function App() {
  const title = "Atomic Habits";
  const author = "James Clear";
  const year = 2025;

  return(
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{year}</p>
    </div>
  );
};

export default App;*/

// Create a JSX structure where:
// A variable isLoggedIn is true
// Based on its value, display either:
// <h2>Welcome back!</h2>
// or <h2>Please log in.</h2>
// (💡 Hint: Use a ternary operator inside JSX)

function Value(){
  const isLoggedIn = false;

  return(
    <div>
    {
      isLoggedIn ? (<h2>Welcome Back</h2>) : (<h2> Please log in </h2>)
    }
    </div>
  )
}

export default Value;