import { createContext, useState, useContext } from 'react';
import { createItem, getCurrentUserId, getTasksByUserId, logout, updateItem } from './api';

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState("")
  const [tasks, setTasks] = useState([])
  const [currentTask, setCurrentTask] = useState("")

  const addTask = () =>{
      console.log("adding task : ", currentTask)
      if(currentTask === "") return
      createItem({
        name : currentTask, 
        status: "pending",
      }, userId)
      setCurrentTask("")
    }

  return (
    <AppContext.Provider value={{email, setEmail, password, setPassword, user, setUser, userId, setUserId, tasks, setTasks, addTask, currentTask, setCurrentTask}}>
      {children}
    </AppContext.Provider>
  );
}

export default UserProvider;