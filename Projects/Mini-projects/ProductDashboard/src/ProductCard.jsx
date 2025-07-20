import './App.css';

function ProductCard({title, price, image, inStock, rating}){
  return(
    <div className='productCard'>
      <img className="card-image" src={image} alt="products" />
      <h2>Title: {title}</h2>
      <h4>Price {price}</h4>
      <p>In Stock: {inStock ? "In Stock" : "Out of Stock"}</p>
      <p>Rating: {rating>=4 ? "🌟Best Rated" : "👍🏻Good Product"}</p>
    </div>
  )
}

export default ProductCard;