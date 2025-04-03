import useTeams from "../hooks/useTeams";
import TeamCard from "../components/TeamCard";
const Home = () => {
  const { teams , error , loading } = useTeams()
  return (
    <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'> 
        {loading && <p className='text-xl'>Loading...</p>}
        {
          teams && (
          teams.map(team => <TeamCard key={team.id} team={team} />)
          )
        }
      </div>
  );
};

export default Home;