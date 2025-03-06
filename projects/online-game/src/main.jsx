import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LobbyProvider from './context/LobbyProvider.jsx'

createRoot(document.getElementById('root')).render(
  <LobbyProvider>
    <App />
  </LobbyProvider>,
)
