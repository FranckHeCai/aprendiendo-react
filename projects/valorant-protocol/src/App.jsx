import Header from './components/Header'
import AgentsList from './components/Agents/AgentsList'
import Filter from './components/Filter'
import { useAgentContext } from './context/AgentsContext'
import { useState } from 'react'
import useFilter from './hooks/useFilter'
import Home from './components/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AgentDetail from './components/Agents/AgentDetail'
import ErrorPage from './components/ErrorPage'

function App() {

  return (
    <main className='pt-25 px-2 sm:px-10 md:px-25'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/agent/:agentId' element={<AgentDetail />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      
    </main>
  )
}

export default App
