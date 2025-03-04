import { signUp } from "../../services/api";
import { useUserContext } from "../../services/UserProvider";

const SignUp = () => {
  const { email, setEmail, password, setPassword} =  useUserContext()
  
  const handleSignUp = () =>{
    signUp(email,password)
  }
  return (
    <>
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
        <button onClick={handleSignUp} className="py-1 px-3 bg-blue-500 cursor-pointer rounded-md text-white">Sign Up</button>
        <a className="text-sm text-blue-400 active:text-blue-600 underline" href="/login/signin">Aready have an account? Sign In</a>
      </div>
    </>
  );
};

export default SignUp;