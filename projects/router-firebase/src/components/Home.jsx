import { useContext, useEffect, useState } from "react";
import Login from "./Login";
import { createItem, getCurrentUserId, getTasksByUserId, logout } from "../services/api";
import { useUserContext } from "../services/UserProvider";
import PopupScreen from "./PopupScreen";
import NoTask from "./NoTask";
import TaskList from "./TaskList";

const Home = () => {
  const {userId, setUserId, tasks, setTasks} = useUserContext()
  const [showPop, setShowPop] = useState(false)
  const [currentTask, setCurrentTask] = useState("")
  useEffect(() => {
    getCurrentUserId()
    .then(data => {
      setUserId(data)
      getTasksByUserId(data)
      .then(list => setTasks(list))
    })
  }, [tasks])

  

  // useEffect(() => {
  //   getTasksByUserId(id)
  //   .then(data => {setTasks(data)}) 
  // }, [])
  
  const handleOnChange = (event) =>{
    setCurrentTask(event.target.value)
  }

  const addTask = () =>{
    console.log("adding task : ", currentTask)
    if(currentTask === "") return
    createItem({
      name : currentTask, 
      status: "pending",
      comments: [] 
    }, userId)
    setCurrentTask("")
  }

  const handleUpdateTask = () =>{

  }

  return (
    <div className="flex flex-col sm:max-w-xl m-auto gap-5">
      <h2 className="text-2xl text-center font-bold text-blue-400">Task Ninja</h2>
      <div className="flex flex-col  gap-3" >
        {tasks.length === 0
          ? (<NoTask />)
          : (<TaskList tasks={tasks} setShowPop={setShowPop} />)
        }
      </div>
      <form onSubmit={(e)=> {
        e.preventDefault()
        addTask()
      }} className="flex flex-col gap-2 border-t-2 border-blue-500 pt-2">
        <input onChange={handleOnChange} className="px-3 py-1 border-2 border-blue-300 rounded" id="addTask" type="text" value={currentTask} />
        <button className="py-1 px-3 bg-blue-500 cursor-pointer rounded-md text-white">Add Task</button>
      </form>
      {
        showPop && 
        <PopupScreen setShowPop={setShowPop}>
          <h2 className="text-lg text-center font-medium">Edit Task</h2>
          <form 
            onSubmit={(e) => {
              e.preventDefault()
              handleUpdateTask()
            }}

            className="flex flex-col gap-2"
          >
            <label htmlFor="updateTask">New Task Name</label>
            <input className="px-3 py-1 border-2 border-blue-300 rounded" type="text" id="updateTask" />
          </form>
        </PopupScreen>
      }
      <button className="absolute top-5 right-5 py-1 px-3 bg-blue-400 cursor-pointer rounded-md text-white" onClick={logout}>Log Out</button>
    </div>
  );
};

export default Home;