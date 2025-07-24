// Topic: Lifting State
// Problem: Sync Two Inputs
// Create two components: FirstNameInput and LastNameInput.

import { useState } from "react"

function SyncInputs(){
  const [firstNameInput, setfirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("")

  return(
    <>
      <h2>full Name: {firstNameInput} {lastNameInput}</h2>
      <firstNameInput firstNameInput={firstNameInput} setfirstNameInput={setfirstNameInput} />
      <lastNameInput lastNameInput={lastNameInput} setLastNameInput={setLastNameInput} />
    </>
  )
}

function PersonA({firstNameInput, setFirstNameInput}){
  return( 
  <input 
  type="text" 
  placeholder="Enter you first name..."
  value={firstNameInput}
  />
  )
}

function LastNameInput({ lastName, setLastName }) {
  return (
    <input
      type="text"
      placeholder="Last Name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    />
  );
}