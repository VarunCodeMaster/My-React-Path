import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ToggleMessage from './Exercises'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleMessage />
  </StrictMode>,
)
