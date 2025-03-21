import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AgentsProvider from './context/AgentsContext.jsx'


createRoot(document.getElementById('root')).render(
  <AgentsProvider>
    <App />
  </AgentsProvider>,
)
