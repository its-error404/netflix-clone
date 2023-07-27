import { createContext, useContext, useEffect, useState } from "react";
import {Auth} from '../firebase.config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged  } from 'firebase/auth'

const AuthContext = createContext()

export function AuthContextProvider({children})
{
    const [user, SetUser] = useState({})

    const Signup = (email, password) =>
    {
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const SignIn = (email,password) =>
    {
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const SignOut = () =>
    {
        return SignOut(Auth)
    }

    useEffect(()=>
    {
        const unsubscribe = onAuthStateChanged(Auth, (currentUser)=>
        {
            SetUser(currentUser)
        })

        return () =>
        {
            unsubscribe()
        }
    })


    return (
        <AuthContext.Provider value={{Signup, SignIn, SignOut, user}}>
            {children}
        </AuthContext.Provider>
    )
    

}

export function userAuth()
{
    return useContext(AuthContext)
}