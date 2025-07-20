// Topic: React Components  
// Level: Beginner  
// Problem: Create two components in the same file: HeroBanner (returns an <h1>) and Tagline (returns a <p>).
// Use both components inside an App component and export App.

function HeroBanner(){
  return(
      <h2>Apple the Game Changer</h2>
  )
}

function Tagline(){
  return(
    <p>Steve Jobs made a big revolution in the technology</p>
  )
}

function App(){
  return(
    <div>
      <HeroBanner />
      <Tagline />
    </div>
  )
}

export default App;