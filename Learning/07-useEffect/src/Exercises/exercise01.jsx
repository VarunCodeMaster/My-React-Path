// Topic: Side Effects, useEffect
// Level: Intermediate
// Challenge: Update document title when counter changes

import { useState, useEffect } from "react";

function DocumentTitleChanger(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  return(
    <div>
      <h1> Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count === 0)}>Reset</button>
    </div>
  )
}

export default DocumentTitleChanger