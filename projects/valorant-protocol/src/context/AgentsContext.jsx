import { createContext, useState, useContext } from 'react';

const AppContext = createContext();
export const useAgentContext = () => useContext(AppContext);

const AgentsProvider = ({ children}) => {
  const [agents, setAgents] = useState();
  const [role, setRole] = useState("All")
  return (
    <AppContext.Provider value={{agents, setAgents, role, setRole}}>
      {children}
    </AppContext.Provider>
  );
}

export default AgentsProvider;