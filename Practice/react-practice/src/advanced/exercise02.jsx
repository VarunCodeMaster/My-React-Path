//Topic: useState
//Level: 
//Problem: Create Car card with a button that displays the details of car when clicked on it

import { useState } from "react";
import './App.css'

function CarCard(){
  const [car, setCard] = useState({
    brand: "Audi",
    model: "A7",
    year: "2025"
  })

  return(
    <div>
      <img src="src/assets/audi-a7.jpg" alt="" />
      <button onClick={() => setCard(...car)}>View details</button>
    </div>
    
  )
}

export default CarCard;