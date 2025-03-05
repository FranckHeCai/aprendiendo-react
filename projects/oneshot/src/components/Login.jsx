import { useContext, useEffect, useState } from "react";
import { loginWithGoogle, signIn, signUp } from "../services/api";
import { useUserContext } from "../context/UserProvider";

const Login = () => {
  const { userInfo, setUserInfo } =  useUserContext()
  const [haveAccount, setHaveAccount] = useState(false)
  const handleSignUp = () =>{
    signUp(userInfo)
  }
  const handleSignIn = () =>{
    signIn(userInfo)
  }
  useEffect(() => {
  }, [])
  
  return (
    <div className="h-screen w-full flex justify-center items-center bg-blue-100 p-2">
      <div className="flex flex-col gap-5 w-full sm:w-md p-5 sm:p-10 bg-white border-2 border-blue-400 rounded-lg">
        <h2 className="text-xl text-center font-bold">{haveAccount ? "Log in" : "Register"}</h2>
        <div>
          { !haveAccount &&
            <div className="flex flex-col gap-1">
              <label htmlFor="username">Username</label>
              <input required onChange={(event) =>{setUserInfo(prev => ({...prev, username: event.target.value}))
            }} value={userInfo.username} className="border-2 border-blue-300 rounded py-1 px-2" id="username" type="text" />
            </div>
          }
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input required onChange={(event) =>{setUserInfo(prev => ({...prev, email: event.target.value}))
            }} value={userInfo.email} className="border-2 border-blue-300 rounded py-1 px-2" id="email" type="text" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input required onChange={(event) =>{setUserInfo(prev => ({...prev, password: event.target.value}))}} value={userInfo.password} className="border-2 border-blue-300 rounded py-1 px-2" id="password" type="text" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button onClick={haveAccount ? handleSignIn : handleSignUp} className="py-1 px-3 bg-blue-500 cursor-pointer rounded-md text-white">{haveAccount ? "Sign In" : "Sign Up"}</button>
          <button onClick={()=>{setHaveAccount(!haveAccount)}} className="text-sm text-blue-400 active:text-blue-600 underline">
          {
            haveAccount
            ? "Don't have an account? Sign Up"
            : "Aready have an account? Sign In"
          }
      
          </button>
        </div>
        <button onClick={loginWithGoogle} className="py-2 px-4 text-sm sm:text-lg rounded-full m-auto flex gap-1 sm:gap-3 items-center font-sm font-medium border-2 justify-center cursor-pointer active:bg-gray-200"><img className="w-7" src="/icons8-google.svg" alt="google logo icon" />Sign with Google</button>
      </div>
    </div>
  );
};

export default Login;