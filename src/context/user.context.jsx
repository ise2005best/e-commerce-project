import { createContext, useState, useEffect } from "react";
import { onAuthStateChangeListener, createUserDocumentFromAuth } from "../utils/firebase/firebase-for-signIn/firebase-sign-in.utils";

export const userContext = createContext({
    setCurrentUser : () => null,
    currentUser: null,
});


export const UserProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = {
        currentUser,
        setCurrentUser,
    }
    useEffect(()=>{
      const unsubscribe =   onAuthStateChangeListener((user) =>{
        if(user){
            createUserDocumentFromAuth(user)
        }
        setCurrentUser(user)
      })
        return unsubscribe;
    }, [])
    return <userContext.Provider value={{value}}>
        {children}
    </userContext.Provider>
}