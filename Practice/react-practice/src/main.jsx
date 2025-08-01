import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LikeButton from './intermediate/exercise03'
import CarCard from './advanced/exercise02'
import BasicForm from './beginner/exercise06'
import ToggleButton from './beginner/exercise08'
import GreetingForm from './beginner/exercise09'
import LoginLogout from './beginner/exercise10'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <LoginLogout />
  </StrictMode>,
)
