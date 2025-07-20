// Topic: useState  
// Level: Intermediate  
// Problem: Create a LikeButton component that displays "Likes: 0".  
// When clicked, increase the count and change the button text to "Liked ❤️".

import { useState } from "react";
import './App.css'

function LikeButton(){
  const [like, setLike] = useState(0);

  return(
    <div>
      <h2 className="heading">Likes: {like}</h2>
      <button className="like-btn" onClick={() => setLike(like + 1)}>Like</button>
      <button className="dislike-btn" onClick={() => setLike(like - 1)}>Dislike</button>
    </div>
  ) 
}

export default LikeButton;