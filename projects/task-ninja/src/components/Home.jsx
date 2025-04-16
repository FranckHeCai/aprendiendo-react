import { useContext, useEffect, useState } from "react";
import Login from "./Login";
import { createItem, getCurrentUserId, getTasksByUserId, logout, updateItem } from "../services/api";
import { useUserContext } from "../services/UserProvider";
import PopupScreen from "./PopupScreen";
import NoTask from "./NoTask";
import TaskList from "./TaskList";
import { useTaskStore } from "../store/taskStore";

const Home = () => {
  const {userId, setUserId, tasks, setTasks, currentTask, setCurrentTask} = useUserContext()
  const [showPop, setShowPop] = useState(false)
  // const [currentTask, setCurrentTask] = useState("")
  const [taskId, setTaskId] = useState("")
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
    }, userId)
    setCurrentTask("")
  }

  return (
    <div className="flex flex-col container m-auto gap-5 p-2 sm:p-5">
      <div className="flex justify-between items-center gap-3">
        <img className="max-w-20" src="/task-ninja-icon.png" alt="task ninja logo" />
        <h2 className="text-4xl text-center font-bold text-sky-800">Task Ninja</h2>
        <button className=" py-2 px-4 bg-sky-700 cursor-pointer rounded-md text-white" onClick={logout}>Log Out</button>
      </div>
      <div className="">
        {tasks.length === 0
          ? (<NoTask />)
          : (<TaskList tasks={tasks} setShowPop={setShowPop} showPop={showPop} setTaskId={setTaskId}/>)
        }
      </div>
      {/* <form onSubmit={(e)=> {
        e.preventDefault()
        addTask()
      }} className="flex flex-col gap-2 border-t-2 border-sky-700 pt-2">
        <input onChange={handleOnChange} className="px-3 py-1 bg-slate-100 border-2 border-sky-700 rounded" id="addTask" type="text" value={currentTask} />
        <button className="py-1 px-3 bg-sky-700 cursor-pointer rounded-md text-white">Add Task</button>
      </form> */}
      
      
    {
        showPop && 
        <PopupScreen setShowPop={setShowPop}>
          <h2 className="text-lg text-center font-medium">Edit Task</h2>
          <form 
            onSubmit={(e) => {
              e.preventDefault()
              updateItem(userId, taskId.id, taskId)
              setShowPop(false)
            }}

            className="flex flex-col gap-2"
          >
            <label htmlFor="updateTask">New Task Name</label>
            <input className="px-3 py-1 border-2 border-slate-300 rounded" onChange={(event)=>{
              setTaskId(prev => ({...prev, name : event.target.value}))
            }} value={taskId.name} type="text" id="updateTask" />
            <button className="py-1 px-3 bg-sky-700 cursor-pointer rounded-md text-white">Confirm</button>
          </form>
        </PopupScreen>
    }
    </div>
  );
};

export default Home;