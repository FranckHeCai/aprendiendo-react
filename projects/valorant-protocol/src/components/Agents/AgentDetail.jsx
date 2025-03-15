import { useParams } from "react-router";
import fetchAgents from "../../services/fetchAgents";
import { useEffect, useState } from "react";

const AgentDetail = () => {
    const {agentId} = useParams()
    const [agent, setAgent] = useState()
    const getAgent = async () => {
        const fetchedAgent = await fetchAgents(agentId)
        setAgent(fetchedAgent)
    }
    useEffect(() => {
        getAgent()
    }, [])
    
    return (
        <div className="">
            { agent &&
                <div className="flex flex-col xl:flex-row justify-center xl:justify-normal items-center xl:items-stretch gap-5 xl:gap-0">
                    <img className="lg:max-w-3/5 xl:max-w-1/2 drop-shadow-2xl" src={agent.fullPortrait} alt={`${agent.displayName} portrait`} />
                    <div className="flex flex-col gap-5 bg-neutral-800 w-full p-5 sm:p-10 rounded-xl ">
                        <div>
                            <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-[VALORANT] text-red-400">{agent.displayName}</h2>
                            <h3 className=" text-neutral-400 text-center  text-xl md:text-2xl">{agent.role.displayName}</h3>
                        </div>
                        
                        <div className="text-neutral-200 text-lg">
                            <p className="">{agent.description}</p>
                        </div>
                    </div>
                    
                </div>
            }
        </div>
    );
};

export default AgentDetail;