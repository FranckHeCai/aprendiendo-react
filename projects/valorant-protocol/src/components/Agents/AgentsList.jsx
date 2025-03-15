import { useState } from "react";
import useAgents from "../../hooks/useAgents";
import AgentCard from "./AgentCard";

const AgentsList = ({agents}) => {
  const [prevAgent, setPrevAgent] = useState('')

  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 '>
        { agents &&
          agents
          .filter(agent => agent.role!==null)
          .map((agent) => {
            return(
              <a key={agent.uuid} href={`/agent/${agent.uuid}`}>
                <AgentCard agent={agent} />
              </a>
            )
          })
        }
    </div>
  );
};

export default AgentsList;