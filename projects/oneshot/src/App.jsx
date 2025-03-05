import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';
import { useState, useEffect } from 'react'
import { useUserContext } from './context/UserProvider'
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const {user, setUser} = useUserContext()

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

  return user ? <Home/> : <Login/>
}

export default App
