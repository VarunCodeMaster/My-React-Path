import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LiveClock from './LiveClock'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LiveClock />
  </StrictMode>,
)
