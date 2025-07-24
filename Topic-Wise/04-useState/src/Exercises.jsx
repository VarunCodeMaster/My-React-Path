import { useState } from "react";
import './App.css'

//Create a LikeButton component.

/*function LikeButton(){
  const [like, setLike] = useState(0);

  return(
    <div>
      <h2>Likes: {like} ❤️</h2>
      <button onClick={() => setLike(like + 1)}>Like</button>
      <button onClick={() => setLike(like - 1)}>DisLike</button>
    </div>
  )
}

export default LikeButton;*/

//Create a ToggleMessage component

function ToggleMessage() {
  // const [message, setMessage] = useState("You found the hidden spell");
  const [isVisible, setIsVisible] = useState(true);

  return(
    <div>
      {isVisible && <h2>Message: You found the hidden spell</h2>}

      <button onClick={() => setIsVisible(true)}>Show message</button>
      <button onClick={() => setIsVisible(false)}>Hide message</button>

      {/* <h2>Message: {message}</h2>
      <button onClick={() => setMessage("You found the hidden spell")}>Show message</button>

      <button onClick={() => setMessage("")}>Hide message</button> */}
    </div>
  )
}

export default ToggleMessage;