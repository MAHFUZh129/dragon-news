import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from 'firebase/auth';
export const AuthContext=createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [load,seLoad]= useState(true);
    
    // console.log(load)
    const createUser =(email,password)=>{
        seLoad(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const logout=()=>{
        return signOut(auth)
        
    }
    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }
    const signIn=(email,password)=>{
        seLoad(true)
        return signInWithEmailAndPassword(auth,email,password)
    };
    
    useEffect(()=>{
    const unSubs= onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
          seLoad(false)
        });
        return ()=>{
            unSubs()
        }
    },[])
    const authData={
        user,
        logout,
        signIn,
        setUser,
        createUser,
        seLoad,
        load,updateUser
    };
    return <AuthContext value={authData}>{children}</AuthContext>

};

export default AuthProvider;