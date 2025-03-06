import Header from './components/Header'
import AgentsList from './components/Agents/AgentsList'
import Filter from './components/Filter'
import { useAgentContext } from './context/AgentsContext'
import { useState } from 'react'
import useFilter from './hooks/useFilter'

function App() {
  
  const {filterAgents} = useFilter()
  const filteredAgents = filterAgents()
  

  return (
    <main className='pt-25 px-2 sm:px-10 md:px-25 flex flex-col gap-5'>
      <Header />
      <Filter />
      <AgentsList agents={filteredAgents} />
    </main>
  )
}

export default App
