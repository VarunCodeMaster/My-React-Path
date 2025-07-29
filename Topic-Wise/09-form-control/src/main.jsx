import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InputForm from './uncontrolled/exercise01.jsx'
import FileUpload from './uncontrolled/exercise02.jsx'
import FocusInput from './uncontrolled/exercise03.jsx'
import MixedForm from './uncontrolled/exercise04.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MixedForm />
  </StrictMode>,
)
