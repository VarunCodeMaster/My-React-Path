// Topic: Lifting State, useState
// Level: Intermediate
// Problem: Counter app with step control

import { useState } from "react";
import '../App.css'

function CounterApp(){
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1)

  document.title = "Counter app with step control"

  return(
    <div>
      <h1>Counter</h1>
      <Counter count={count} setCount={setCount} step={step}/>
      <StepSelector step={step} setStep={setStep}/>
    </div>
  )
}

function Counter({count, step, setCount}){
  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + step)}>Increment</button>
      <button onClick={() => setCount(count - step)}>Decrement</button>
    </div>
  )
}

function StepSelector({step, setStep}){
  return(
    <select value={step} onChange={(e) => setStep(Number(e.target.value))}>
      <option value={1}>Step 1</option>
      <option value={5}>Step 5</option>
      <option value={10}>Step 10</option>
    </select>
  )
}

export default CounterApp