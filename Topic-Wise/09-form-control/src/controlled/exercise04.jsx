// Topic: Controlled Component (Select Dropdown)
// Level: Intermediate
// Problem: Create a select dropdown for country selection. Show a message below: "You selected <country>".

import { use, useState } from "react";

function DropField(){
  const [country, setCountry] = useState("");

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

        <p>You selected <span>{country}</span></p>
    </div>
  )
}

export default DropField