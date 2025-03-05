import useAgents from "../../hooks/useAgents";
import AgentCard from "./AgentCard";

const AgentsList = () => {
  const {agents} = useAgents()

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 '>
        { agents &&
          agents.map(agent => {
            return(
              <AgentCard agent={agent} />
            )
          })
        }
    </div>
  );
};

export default AgentsList;