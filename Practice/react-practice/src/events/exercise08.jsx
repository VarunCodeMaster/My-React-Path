// Exercise 8: Rating Stars
// Click on 1-5 stars to rate a product.

import { useState } from "react";

function Rating(){
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  return(
    <div style={{}}>
      <h2>Rate the product: </h2>

      {[1,2,3,4,5].map((star) => (
        <span 
        key={star}
        style={{
          cursor: "pointer"
        }}
        onClick={() => setRating(star)}
        onMouseEnter={() => setHovered(star)}
        onMouseLeave={() => setHovered(0)}
        >
          ★
        </span>
      ))}

      {rating > 0 && <p>You rated this product: {rating} star{rating > 1 ? "s" : ""}⭐️</p>}
    </div>
  )
}

export default Rating;