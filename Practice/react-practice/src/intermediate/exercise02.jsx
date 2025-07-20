// Topic: React Components  
// Level: Intermediate  
// Problem: Create a reusable Button component. Use it three times in your App component.

function Button(){
  return(
    <button>Hello React Dev's</button>
  )
}

function Reuse(){
  return(
    <div>
      <Button />
      <Button />
      <Button />
    </div>
  )
}

export default Reuse;