import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AutoTips from './AutoTips.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AutoTips />
  </StrictMode>,
)
