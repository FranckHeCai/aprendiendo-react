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
                    <img className="lg:max-w-4/5 xl:max-w-1/2 drop-shadow-2xl object-cover" src={agent.fullPortrait} alt={`${agent.displayName} portrait`} />
                    <div className="flex flex-col gap-5 bg-neutral-800 w-full p-5 sm:p-10 rounded-xl ">
                        <div>
                            <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-[VALORANT] text-red-400">{agent.displayName}</h2>
                            <h3 className=" text-neutral-400 text-center  text-xl md:text-2xl">{agent.role.displayName}</h3>
                        </div>
                        <p className="text-neutral-200 text-lg">{agent.description}</p>
                        <h3 className="font-[VALORANT] text-center text-red-400 text-3xl">Abilities</h3>
                        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5 text-neutral-200">
                            {
                                agent.abilities.map(ability => {
                                    return(
                                        <div className="text-xl flex flex-col gap-5">
                                            <div className="flex flex-col items-center gap-5 text-red-400">
                                                <img className="max-w-1/4 2xl:max-w-1/3" src={ability.displayIcon} alt="" />
                                                <p className="font-bold">{ability.displayName}</p>
                                            </div>
                                            <p className="text-base text-neutral-400">{ability.description}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                </div>
            }
        </div>
    );
};

export default AgentDetail;