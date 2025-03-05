import { createContext, useState, useContext } from 'react';

const AppContext = createContext();
export const useAgentContext = () => useContext(AppContext);

const AgentsProvider = ({ children}) => {
  const [agents, setAgents] = useState();
  return (
    <AppContext.Provider value={{agents, setAgents}}>
      {children}
    </AppContext.Provider>
  );
}

export default AgentsProvider;