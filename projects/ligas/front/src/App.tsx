import useTeams from './hooks/useTeams'
import TeamCard from './components/TeamCard'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Team from './routes/Team'

function App() {
  const { teams , error , loading } = useTeams()
  return (
    <main className='p-5 flex flex-col gap-5'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/teams/:teamId' element={<Team />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
