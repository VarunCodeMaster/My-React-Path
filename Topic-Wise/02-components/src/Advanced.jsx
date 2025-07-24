//Create 2 components: Header and Footer. Use them inside your App.jsx to build a page layout.
import React from "react";

const Header = () => (
  <div>
    <h1> Welcome to React JS</h1>
    <ul>
      <li>Component</li>
      <li>Props</li>
      <li>State</li>
    </ul>
  </div>
)

const Footer = () => (
  <div>
    <h1>Bye</h1>
  </div>
)

function App() {
  return (
    <>
    <Header />
    <Footer />
    </>
  )
}

export default App;