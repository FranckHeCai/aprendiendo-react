import { createContext, useState, useContext } from 'react';

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children}) => {
  const [user, setUser] = useState("");
  const [userInfo, setUserInfo] = useState({username: "", email: "", password: ""})
  const [showPop, setShowPop] = useState(false)
  return (
    <AppContext.Provider value={{user, setUser, userInfo, setUserInfo, showPop, setShowPop}}>
      {children}
    </AppContext.Provider>
  );
}

export default UserProvider;