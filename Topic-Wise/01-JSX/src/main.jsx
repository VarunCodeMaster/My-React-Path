import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Advance from './Advanced.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Advance />
  </StrictMode>,
)
