// Topic: Controlled Component (Select Dropdown)
// Level: Intermediate
// Problem: Create a select dropdown for country selection. Show a message below: "You selected <country>".

import { useState } from "react";

function DropField(){
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");

  return(
    <div>
      <h2>Select your Country</h2>

      <select 
        value={country}
        onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select your country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Germany">Germany</option>
          <option value="Australia">Australia</option>
        </select>
        <br />
        <br/>
        <input 
          type="radio" 
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male

        <input 
          type="radio" 
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
          />
          Female

        <p>You selected <span>{country}</span></p>
        <p>Your Gender <span>{gender}</span></p>
    </div>
  )
}

export default DropField