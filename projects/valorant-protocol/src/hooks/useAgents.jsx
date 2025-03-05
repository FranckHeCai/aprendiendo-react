import { useEffect } from "react";
import { useAgentContext } from "../context/AgentsContext";
import fetchAgents from "../services/fetchAgents";

const useAgents = () => {
  const { agents ,setAgents } = useAgentContext();

  useEffect(() => {
    const getAgents = async () => {
      const fetchedAgents = await fetchAgents();
      setAgents(fetchedAgents);
    };

    getAgents();
  }, [setAgents]);

  return {agents, setAgents}
};

export default useAgents;