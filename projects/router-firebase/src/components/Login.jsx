import { useContext, useEffect, useState } from "react";
import { loginWithGoogle, signIn, signUp } from "../services/api";
import { useUserContext } from "../services/UserProvider";


const Login = () => {
  const { email, setEmail, password, setPassword} =  useUserContext()
  const [haveAccount, setHaveAccount] = useState(false)
  const handleSignUp = () =>{
    signUp(email,password)
  }
  const handleSignIn = () =>{
    signIn(email,password)
  }
  return (
    <div className="flex flex-col gap-3 sm:max-w-md m-auto">
      <h2 className="text-xl text-center font-bold">Login</h2>
      <div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input required onChange={(event) =>{setEmail(event.target.value)
          }} value={email} className="border-2 border-blue-300 rounded" id="email" type="text" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input required onChange={(event) =>{setPassword(event.target.value)}} value={password} className="border-2 border-blue-300 rounded" id="password" type="text" />
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
      <button onClick={loginWithGoogle} className="py-2 px-4 rounded-full m-auto flex gap-3 items-center font-sm font-medium border-2 justify-center cursor-pointer active:bg-gray-200"><img className="w-7" src="/icons8-google.svg" alt="google logo icon" />Sign with Google</button>
    </div>
  );
};

export default Login;