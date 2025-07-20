// Topic: React Components  
// Level: Intermediate  
// Problem: Create three components — Navbar, MainContent, and Footer.  
// Combine them inside a Layout component and use that inside App.
import '../App.css'

function Navbar(){
  return(
    <div>
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    </div>
    
  )
}

function MainContent(){
  return(
    <p>Currently building a three component combined react app</p>
  )
}

function Footer(){
  return(
    <p>All rights reserved by Varun</p>
  )
}

function Layout(){
  return(
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}

function App(){
  return(
    <Layout />
  )
}

export default App;