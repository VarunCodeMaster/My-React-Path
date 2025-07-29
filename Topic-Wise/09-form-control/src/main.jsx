import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NameField from './controlled/exercise01.jsx'
import TextField from './controlled/exercise02.jsx'
import CheckField from './controlled/exercise03.jsx'
import DropField from './controlled/exercise04.jsx'
import SignUpForm from './controlled/exercise05.jsx'
import PasswordCheck from './controlled/exercise06.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordCheck />
  </StrictMode>,
)
