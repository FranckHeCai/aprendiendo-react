import { useEffect, useState } from 'react'
import Header from './components/Header'

function App() {
  const [agents, setAgents] = useState(null)

  const fetchAgents = async () =>{
    const res = await fetch("https://valorant-api.com/v1/agents")
    const data = await res.json()
    setAgents(data.data)
  }

  useEffect(() => {
    fetchAgents()
  }, [])
  

  return (
    <main className='pt-20 px-25'>
      <Header />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 '>
        {
          agents?.map(agent => {
            return(
              <div className='border-2 border-red-400 rounded-lg p-2 md:p-5 bg-neutral-800' key={agent.uuid}>
                <h3 className='font-[VALORANT] text-red-400 text-lg'>{agent.displayName}</h3>
                <p className='text-neutral-300'>{agent.description}</p>
              </div>
            )
          })
        }
      </div>
      
    </main>
  )
}

export default App
