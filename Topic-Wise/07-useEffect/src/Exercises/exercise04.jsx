// Topic: Media query + effect
// Challenge: Detect user's OS dark mode setting. Show either "🌙 Dark mode" or "☀️ Light mode".

import { useState, useEffect } from "react";

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.title = "Device Colour mode"

    const mode = window.matchMedia("(prefers-color-scheme: dark)");

    setIsDarkMode(mode.matches);

    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    }

    mode.addEventListener("change", handleChange);

    return () => {
      mode.removeEventListener("change", handleChange);
    }
  })

  return(
    <div>
      {isDarkMode ? "DarkMode" : "Light mode"}
    </div>
  )
}

export default DarkMode