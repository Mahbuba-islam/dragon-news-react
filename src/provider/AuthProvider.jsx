import app from '../../src/components/Firebase/firebase.init'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
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


    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUserProfile
    }
    return (
        <AuthContext  value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;