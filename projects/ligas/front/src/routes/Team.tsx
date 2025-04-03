import { useParams } from "react-router-dom";

const Team = () => {
  const { teamId } = useParams()
  return (
    <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'> 
        
    </div>
  );
};

export default Team;