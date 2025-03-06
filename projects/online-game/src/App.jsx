import { useEffect, useState } from 'react'
import { useLobbyContext } from './context/LobbyProvider'
import { createRoom, getRooms, onRoomUpdated, updateRoom } from './services/api'

function App() {
  const [count, setCount] = useState(0)
  const { roomId, setRoomId } = useLobbyContext()
  const [guestEntered, setGuestEntered ] = useState(false)
  const [roomList, setRoomList] = useState([])

  useEffect(() => {
    getRooms()
    .then(rooms => {
      setRoomList(rooms)
    })
    const idRoom = "0001"
    createRoom(idRoom, {
      isGuestReady : false
    })
    onRoomUpdated(idRoom,(recoveredRoom)=>{
      const data = recoveredRoom.data()
      if(data.isGuestReady){
        setGuestEntered(true)
      }
    })
  }, [])
  
  const handleCreateRoom = (event) =>{
    event.preventDefault()
    createRoom(event.target.create.value)
  }

  const handleEnterRoom = (event) =>{
    event.preventDefault()
    setRoomId(event.target.enter.value)
    updateRoom(event.target.enter.value, {isGuestReady : true})
  }

  return (
    <div>
      <h2 className=''>Tres En Ralla</h2>
      <form onSubmit={(e)=>handleCreateRoom(e)}>
        <input id='room' type="text" placeholder='room id' />
        <button>Create room</button>
      </form>
      <form onSubmit={(e)=>handleEnterRoom(e)}>
        <input id='enter' type="text" placeholder='room id' />
        <button>Enter room</button>
      </form>
      <div>
        {
          roomList?.map(room => (
            <div key={room.id}>
              <p>{room.id}</p>
            </div>
          ))
        }
      </div>
      {
        guestEntered &&
        <>
          <h2 className='text-4xl'>Guest Entered</h2>
        </>
      }
    </div>
  )
}

export default App
