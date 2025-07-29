// Topic: Lifting State
// Problem: Sync Two Inputs
// Create two components: FirstNameInput and LastNameInput.

import { useState } from "react";

function SyncInputs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  document.title = "Name of the User";

  return (
    <div>
      <h2>Full Name: {firstName} {lastName}</h2>
      <FirstNameInput firstName={firstName} setFirstName={setFirstName} />
      <LastNameInput lastName={lastName} setLastName={setLastName} />
    </div>
  );
}

function FirstNameInput({ firstName, setFirstName }) {
  return (
    <input
      type="text"
      placeholder="First Name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
  );
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

export default SyncInputs;
