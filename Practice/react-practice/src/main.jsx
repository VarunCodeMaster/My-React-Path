import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LikeButton from './intermediate/exercise03'
import CarCard from './advanced/exercise02'
import BasicForm from './beginner/exercise06'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BasicForm />
  </StrictMode>,
)
