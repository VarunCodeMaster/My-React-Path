import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BackgroundSwitch from './Exercises/exercise02.jsx'
import CounterApp from './Exercises/exercise03.jsx'
import TabApp from './Exercises/exercise04.jsx'
import QuizNavigator from './Exercises/exercise05.jsx'
import StarRating from './Exercises/exercise06.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarRating />
  </StrictMode>,
)
