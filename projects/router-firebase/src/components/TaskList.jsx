import { useState } from "react"
import { deleteItem } from "../services/api"
import { useUserContext } from "../services/UserProvider"
import { updateItem } from "../services/api"
import PopupScreen from "./PopupScreen"

const TaskList = ({tasks , setShowPop, showPop, setTaskId}) => {
  const { userId } = useUserContext()

  return (
    <div className="flex flex-col gap-2 ">
      {
        tasks.map(task => {
          return (
            <div className="flex justify-between bg-blue-50 rounded p-3 font-medium" key={task.id}>
              <p>{task.name}</p>
              <div className='flex gap-2'>
                      <button onClick={()=>{
                        setShowPop(true)
                        setTaskId(task)
                        }} className='text-xs sm:text-sm bg-blue-400 py-1 cursor-pointer px-2 rounded-full'>Edit</button>
                      <button onClick={()=>{deleteItem(userId , task.id)}} className='text-xs sm:text-sm bg-green-300 py-1 cursor-pointer px-2 rounded-full'>Done</button>
                </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default TaskList;