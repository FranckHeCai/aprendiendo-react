import { deleteItem } from "../services/api"
import { useUserContext } from "../services/UserProvider"

const TaskList = ({tasks , setShowPop}) => {
  const { userId } = useUserContext()
  return (
    <div className="flex flex-col gap-2 ">
      {
        tasks.map(task => {
          return (
            <div className="flex justify-between bg-blue-100 rounded p-3" key={task.id}>
              <p>{task.name}</p>
              <div className='flex gap-2'>
                      <button onClick={()=>{
                        setShowPop(true)
                        }} className='text-xs bg-blue-400 py-1 cursor-pointer px-2 rounded'>Edit</button>
                      <button onClick={()=>{deleteItem(userId , task.id)}} className='text-xs bg-red-400 py-1 cursor-pointer px-2 rounded-full'>Delete</button>
                </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TaskList;