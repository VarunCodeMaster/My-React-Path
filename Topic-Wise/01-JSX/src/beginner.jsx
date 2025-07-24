import React from "react";
import './App.css';

//Create a JSX element that shows your name, age, and favorite hobby inside three separate tags.
/*function App() {
  const name = "Virat Kohli";
  const age = 35;
  const hobby = "Cricket";

  return (
    <div>
      <h1> Hi, I'm {name} </h1>
      <p> I'm {age} years old </p>
      <p> My hobby is to play cricket </p>
    </div>
  );
};
export default App;*/

//Use a JavaScript variable inside JSX to display a custom greeting like: "Hello, Varun! Welcome back."
/*function App() {
  const name = "Varun";
  
  return (
    <p>Hello, {name}! Welcome Back.</p>
  );
};

export default App;*/

//Create a div that contains:
// An h1 with your favorite quote
// A p that says who said it

function App() {
  const quote = "Stay Hungry, Stay Foolish.";
  const author = "Steve Jobs";
 
    return (
      <div>
        <h2>{quote}</h2>
        <p>{author}</p>
      </div>
    )
  
};

export default App;