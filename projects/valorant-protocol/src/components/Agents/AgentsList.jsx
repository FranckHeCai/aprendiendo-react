import useAgents from "../../hooks/useAgents";
import AgentCard from "./AgentCard";

const AgentsList = ({agents}) => {


  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 '>
        { agents &&
          agents.map(agent => {
            return(
              <AgentCard key={agent.uuid} agent={agent} />
            )
          })
        }
    </div>
  );
};

export default AgentsList;