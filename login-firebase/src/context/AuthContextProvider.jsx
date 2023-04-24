import { createContext, useContext, useState } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { auth } from '../firebase';
import { useEffect } from 'react';

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}

const AuthContextProvider = ({children}) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    })
  }, [])

  const singup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  return (
    <AuthContext.Provider value={{singup, login, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider