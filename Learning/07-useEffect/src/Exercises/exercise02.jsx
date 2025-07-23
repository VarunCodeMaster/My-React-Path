// Topic: Event Listeners and useEffect
// Display the current window.innerWidth & Update the width whenever the window resizes.

import { useEffect, useState } from "react";

function WindowResizeTracker(){
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize(){
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return(
    <div>
      <h1> Window Width: {width}px</h1>
    </div>
  )
}

export default WindowResizeTracker