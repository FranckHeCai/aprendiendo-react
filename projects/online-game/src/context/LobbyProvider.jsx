import { useContext, createContext, useState } from "react";

const lobbyContext = createContext()

export const useLobbyContext = () => useContext(lobbyContext)

const LobbyProvider = ({children}) => {
  const [roomId, setRoomId] = useState(null)
  return (
    <lobbyContext.Provider value={{roomId, setRoomId}}>
      {children}
    </lobbyContext.Provider>
  );
};

export default LobbyProvider;