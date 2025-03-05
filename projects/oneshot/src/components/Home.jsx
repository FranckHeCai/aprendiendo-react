import { useEffect, useState } from "react";
import { createMessage, getCurrentUserId, getItemById, getItemsByCondition, getMessageByUserId, logout, updateProfile } from "../services/api";
import { useUserContext } from "../context/UserProvider";
import PopupScreen from "./PopupScreen";

const Home = () => {
  const {userInfo, setUserInfo, showPop, setShowPop} = useUserContext()
  const [messages, setMessages] = useState(null)
  const [userId, setUserId] = useState(null)
  const [userList, setUserList] = useState([])
  
  useEffect(() => {
    getCurrentUserId()
      .then(id => {
        setUserId(id);
        getItemById(id)
          .then(user => {
            setUserInfo(user);
          });
      });
  }, []);

  useEffect(() => {
    if (userId) {
      getItemsByCondition(userInfo.username)
        .then(list => {
          setUserList(list);
        });
      getMessageByUserId(userId)
        .then(messages => setMessages(messages));
    }
  }, [userId]);
  
  const handleSubmit = (event) =>{
    event.preventDefault()
    updateProfile(userId, userInfo)
    setShowPop(false)
  }

  return (

    <div>
      <div className="relative sm:max-w-2xl m-auto p-2 sm:p-5 bg-violet-50 flex flex-col gap-3" >
        <h2 className="text-2xl text-center font-bold text-violet-500" >OneShot</h2>
        <div className="relative">
          <h3 className="text-sm text-violet-500">User ID : {userId}</h3>
          <h3 className="text-sm text-violet-500">Username : {userInfo.username}</h3>
          <div>
            <h3 className="text-lg text-violet-500 font-bold">Messages</h3>
            {
              messages
              ? <div>
                {
                  messages.map(message => {
                    return(
                      <p>{message.content}</p>
                    )
                  })
                }
              </div>
              : <h3>Currently no messages</h3>
            }
          </div>
          <div>
            <h3 className="text-lg text-violet-500 font-bold">Users</h3>
            {
              userList.map(user => (
                <div key={user.id}>
                  <p>{user.username}</p>
                </div>
              ))
            }
          </div>
          <form onSubmit={(e)=> {
            e.preventDefault()
            createMessage({originId: userId, destinationId: "iGhmEFKUmea8fr9a2rE6JZBiJPn1", content: e.target.message.value}, "iGhmEFKUmea8fr9a2rE6JZBiJPn1")
            }} className="flex flex-col gap-2 border-t-2 border-violet-500 pt-2">
            <input className="px-3 py-1 bg-violet-50 border-2 border-violet-400 rounded" id="message" type="text" />
            <button className="py-1 px-3 bg-violet-500 cursor-pointer rounded-md text-white">Send Message</button>
          </form>
        </div>
        <button className="absolute top-5 right-5 py-1 px-3 bg-violet-400 cursor-pointer rounded-md text-white" onClick={()=>{
            setShowPop(true)
          }}>Edit profile</button>
      </div>
          <button className="absolute top-5 right-5 py-1 px-3 bg-violet-400 cursor-pointer rounded-md text-white" onClick={()=>{
            logout()
            setUserInfo({username: "", email: "", password: ""})
          }}>Log Out</button>
      {
        showPop && <PopupScreen>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label htmlFor="newname">Username</label>
            <input onChange={(e)=>{setUserInfo(prev => ({...prev, username: e.target.value}))}} className="p-2 border-2 border-violet-500 rounded" id="newname" type="text" value={userInfo.username} />
            <button className=" py-1 px-3 bg-violet-400 cursor-pointer rounded-md text-white">Save</button>
          </form>
        </PopupScreen>
      }
    </div>
  );
};

export default Home;