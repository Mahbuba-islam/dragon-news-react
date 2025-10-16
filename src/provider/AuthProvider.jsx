import app from '../../src/components/Firebase/firebase.init'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)
  
    const createUser = (email,password) => {
        setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)
    }



    // set observer
    useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=> {
        setUser(currentUser)
        setLoading(false)
    })
    return () => {
    unsubscribe()
    }
    },[])

  
    // signOut
    const logOut = () => {
        return signOut(auth)
    }

    // logIn
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    // update user profile

    const updateUserProfile = (updatedData) => {
     return updateProfile(auth.currentUser, updatedData)
    }

    // google signin
    const googleSignIn = () => {
     const provider = new GoogleAuthProvider()
     return signInWithPopup(auth, provider)
    
    }
   
    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUserProfile,
        googleSignIn
    }
    return (
         <AuthContext.Provider value={authData}>
    {children}
  </AuthContext.Provider>

    );
};

export default AuthProvider;