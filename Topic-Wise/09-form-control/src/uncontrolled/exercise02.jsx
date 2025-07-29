// Topic: File Upload using Uncontrolled Component
// Level: Intermediate
// Problem: Create a file input (e.g., profile picture) using `useRef`. Show the file name after user selects a file and clicks submit.

import { useRef, useState } from "react";

function FileUpload(){
  const fileInputRef = useRef(null)
  const [fileName, setFileName] = useState("")

  function handleSubmit(e){
    e.preventDefault();

    const file = fileInputRef.current.files[0]

    if(file){
      setFileName(file.name);
    }
    else{
      setFileName("No file Selected");
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" ref={fileInputRef}/>
        <button type="submit">Upload</button>
      </form>

      {fileName && (
        <div style={{ marginTop: "20px" }}>
          <strong>Selected File:</strong> {fileName}
        </div>
      )}
    </div>
  )
}

export default FileUpload