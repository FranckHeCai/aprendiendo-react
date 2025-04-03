import useTeams from './hooks/useTeams'
import TeamCard from './components/TeamCard'
import Header from './components/Header'

function App() {
  const { teams , error , loading } = useTeams()
  return (
    <main className='p-5 flex flex-col gap-5'>
      <Header />
      <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'> 
        {loading && <p className='text-xl'>Loading...</p>}
        {
          teams && (
          teams.map(team => <TeamCard key={team.id} team={team} />)
          )
        }
      </div>
    </main>
  )
}

export default App
