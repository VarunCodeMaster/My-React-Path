import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DarkMode from './Exercises/exercise04.jsx'
import AutoSaveText from './Exercises/exercise05.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AutoSaveText />
  </StrictMode>,
)
