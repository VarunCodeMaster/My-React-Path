import ProductCard from './ProductCard'
import './App.css'

function App(){
  return(
    <div className='productList'>
      <h1>Product's List</h1>
      <div className="card-wrapper">
      <div className='product-card'>
      <ProductCard 
      image="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg"
      title="Red Ferrari"
      price={700000}
      inStock = {true}
      rating = {5}
      />
      </div>
      <div className="product-card">
      <ProductCard 
      image="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg"
      title="Blue Audi Sedan"
      price={500000}
      inStock = {true}
      rating = {4}/>
      </div>
      <div className="product-card">
      <ProductCard 
      image="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg"
      title="White Land Rover"
      price={750000}
      inStock = {false}
      rating = {3}
      /> 
      </div>
      <div className="product-card">
        <ProductCard 
      image="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg"
      title="Gray Mercedes-Benz AMG"
      price={750000}
      inStock = {false}
      rating = {3}
      />
      </div>
      </div>
    </div>
  )
}

export default App;