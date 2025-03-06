import { useEffect, useState } from "react";
import { useAgentContext } from "../context/AgentsContext";
import useAgents from "./useAgents";

const useFilter = () => {
  const {role, setRole, setAgents} = useAgentContext()
  const {agents} = useAgents()
  

  const filterAgents = () => {
    const filteredAgents = agents?.filter(agent => agent.role?.displayName === role || role === "All")
    return filteredAgents
  }

  return {filterAgents, role, setRole}
  
};

export default useFilter;