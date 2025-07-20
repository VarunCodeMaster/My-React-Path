// Topic: Mini Project - Forms & Events
// Level: Intermediate
// Project: Spellbook Entry Form

import { useState } from "react"

function SpellForm(){
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [magic, setMagic] = useState("");
  const [checkSpell, setCheck] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleForm(e){
    e.preventDefault();

    if(!name && !description && !magic){
      alert("Please fill all the details");
    }
    else if(description.length <=10 || description.length >= 100){
      alert("description is too short or long");
    }
    else{
      setSubmitted(true);
    }
  }

  return(
    <div>
      <h2>Spell Form</h2>

      <form onSubmit={handleForm}>

      <input 
      type="text" 
      placeholder="Spell name"
      onChange={(e) => setName(e.target.value)}
      />

      <input 
      type="text" 
      placeholder="Spell description"
      onChange={(e) => setDescription(e.target.value)}/>

      <select onChange={(e) => setMagic(e.target.value)}>
        <option value="">Select a spell</option>
        <option value="Fire">Fire</option>
        <option value="Ice">Ice</option>
        <option value="Lightning">Lightning</option>
        <option value="Healing">Healing</option>
      </select>

      <input 
      type="checkbox"  
      onChange={(e) => setCheck(e.target.checked)}
      /> This is an advanced spell

      <button type="submit"> Submit </button>
      </form>

      {submitted && (
        <div>
           <p style={{color: "green", marginTop: "1rem"}}>
              Form submitted successfully
            </p>
            <p>
              {magic} Spell: {name} - {description}
              {checkSpell && "[Advanced Spell]"}
            </p>
        </div>
       
      )}
    </div>
  )
}

export default SpellForm;