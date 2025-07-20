import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Spell from './Beginner'
import ProductCard from './Beginner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductCard 
    image="https://i.pinimg.com/736x/23/b3/6a/23b36a3272490b67055ddc08da1b47d3.jpg"
    title="Maggi noodles"
    price={15}
    inStock={true}/>

    <ProductCard 
    image="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg"
    title="Audi"
    price={5000000}
    inStock={false}/>
  </StrictMode>,
)
