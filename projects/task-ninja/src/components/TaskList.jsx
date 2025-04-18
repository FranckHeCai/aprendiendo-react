import { useState } from "react"
import { deleteItem } from "../services/api"
import { useUserContext } from "../services/UserProvider"
import { updateItem } from "../services/api"
import PopupScreen from "./PopupScreen"

const TaskList = ({tasks , setShowPop, showPop, setTaskId}) => {
  const { userId, currentTask, setCurrentTask, addTask } = useUserContext()

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      {
        tasks.map(task => {
          return (
            <div className="flex flex-col justify-center items-center gap-5 bg-slate-50 rounded-lg py-6 sm:py-10 px-3 font-medium" key={task.id}>
              <p>{task.name}</p>
              <div className='flex gap-2'>
                      <button onClick={()=>{
                        setShowPop(true)
                        setTaskId(task)
                        }} className='text-xs sm:text-sm bg-slate-200 border-2 border-slate-300 py-1 cursor-pointer px-3 rounded-full'>Edit</button>
                      <button onClick={()=>{deleteItem(userId , task.id)}} className='text-xs sm:text-sm bg-sky-700 text-slate-50 py-1 cursor-pointer px-3 rounded-full'>Done</button>
                </div>
            </div>
          )
        })
      }
      <div className="flex flex-col justify-center items-center gap-5 border-dashed border-2 border-sky-900  rounded-lg p-3 font-medium">
        <picture>
          <img className="w-8" src="plus-icon.svg" alt="" />
        </picture>
        <form onSubmit={(e)=> {
        e.preventDefault()
        addTask()
      }} className="w-full flex flex-col gap-2 border-t-2 border-sky-700 pt-2">
        <input onChange={(event) => {
          setCurrentTask(event.target.value)
        }} className="px-3 py-1 bg-slate-100 border-2 border-sky-700 rounded" id="addTask" type="text" value={currentTask} />
        <button className="py-1 px-3 bg-sky-700 cursor-pointer rounded-md text-white">Add Task</button>
      </form>
      </div>
    </div>
  )
}

export default TaskList;