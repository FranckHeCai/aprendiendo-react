import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Read from './components/Read'
import Create from './components/Create'
import ErrorPage from './components/ErrorPage'
import {getItems} from './services/api'
import DeleteUpdate from './components/DeleteUpdate'
import Login from './components/Login'
import Home from './components/Home'
import { useUserContext } from './services/UserProvider'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase'
function App() {
  const [patients, setPatients] = useState([])
  const  {user, setUser}  = useUserContext()
  // useEffect(() => {
  //   getItems()
  //   .then(data => {
  //     setPatients(data)
  //   })
  // }, [patients])
  
  useEffect(() => {
    onAuthStateChanged(auth, user => {
        if (user) {
            console.log('user', user, ' userId:', user.uid);
            setUser(user);
        } else {
            console.log("No user logged");
            setUser(null);
        }
    });
}, []);

  return (
    <div>
      {/* <Header /> */}
      <main className='p-2 sm:p-5'>
        {/* <BrowserRouter>
          <Routes>
            <Route index element={<Read patients={patients} />}/>
            <Route path='/create' element={<Create />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='/patient/:id' element={<DeleteUpdate />}/>
          </Routes>
        </BrowserRouter> */}
        {/* <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter> */}
        {user ? <Home/> : <Login/>}
      </main>
    </div>
  )
}

export default App
