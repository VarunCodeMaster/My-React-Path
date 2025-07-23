import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CountdownTimer from './Exercises/exercise03.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountdownTimer />
  </StrictMode>,
)
