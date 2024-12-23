import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import QuoteMachine from './QuoteMachine'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuoteMachine />
  </StrictMode>,
)
