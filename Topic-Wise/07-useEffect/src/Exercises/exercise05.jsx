// Topic: Debounce + side effect
// Challenge: Let user type in a textarea. After 2 seconds of no typing, show "Auto-saved at HH:MM:SS".

import { useState, useEffect } from "react";

function AutoSaveText() {
  const [text, setText] = useState("");
  const [saveMsg, setSaveMsg] = useState("");

  useEffect(() => {
    // Prevent auto-save when there's no text
    if (!text) return;

    const timeout = setTimeout(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString();
      setSaveMsg(`Auto saved at ${timeStr}`);
    }, 2000);

    return () => clearTimeout(timeout); // Clear previous timeout if text changes
  }, [text]);

  useEffect(() => {
    document.title = "Auto Save Notes";
  }, []);

  return (
    <div>
      <h2>Auto-Save Notes</h2>
      <textarea
        rows="6"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start Typing..."
      ></textarea>
      <p>{saveMsg}</p>
    </div>
  );
}

export default AutoSaveText;
