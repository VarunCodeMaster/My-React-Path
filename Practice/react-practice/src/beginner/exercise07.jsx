// Topic: Lifting State
// Level: Beginner
// Problem: Create a parent component with two child components — one has a slider (range input), and the other displays the value. Use lifting state to manage and pass the value.

import { useState } from "react";

function Slider({value, onChange}){
  return(
    <div>
      <label>
        Slider: 
        <input 
          type="range"
          min="0" 
          max="100"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </label>
    </div>
  )
}

function DisplayValue({value}){
  return(
    <div>
      <h3>Slider: {value}</h3>
    </div>
  )
}

function LiftingComp() {
  const [sliderValue, setSliderValue] = useState(50)

  return(
    <div>
      <h2>Lifting State Example</h2>
      <Slider value={sliderValue} onChange={setSliderValue} />
      <DisplayValue value={sliderValue} />
    </div>
  )
}

export default LiftingComp