import { createContext, useState, useContext } from 'react';

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children}) => {
  const [user, setUser] = useState("");
  const [userInfo, setUserInfo] = useState({username: "", email: "", password: ""})
  return (
    <AppContext.Provider value={{user, setUser, userInfo, setUserInfo}}>
      {children}
    </AppContext.Provider>
  );
}

export default UserProvider;