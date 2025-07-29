// Topic: lifting state + event handling
// Level: Advanced
// Problem: Star Rating challenge

import { useState } from "react";

function StarRating(){
  document.title = "Star Rating";
  
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0)

  return(
    <div>
      <h2>Star Rating</h2>
      {[1,2,3,4,5].map((index) => (
        <Star
          key={index}
          index={index}
          rating={rating}
          hoverRating={hoverRating}
          onClick={() => setRating(index)}
          onMouseEnter={() => setHoverRating(index)}
          onMouseLeave={() => setHoverRating(0)}
        />  
      ))}
      <p>Selected Rating: {rating}</p>
    </div>
  )
}

function Star({index, rating, hoverRating, onClick, onMouseEnter, onMouseLeave}){
  const isFilled = index <= (hoverRating || rating)

  return(
    <span
      style={{
        fontSize: "2rem",
        color: isFilled ? "gold" : "lightgray",
        cursor: "pointer"
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isFilled ? "★" : "☆"}
    </span>
  )
}

export default StarRating;