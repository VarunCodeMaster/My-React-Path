import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormDisplay from './beginner/exercises'
import Login from './beginner/exercises'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
