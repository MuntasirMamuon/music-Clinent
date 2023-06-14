import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { app } from "../Firebase/firebase.config";
import axios from "axios";



export const AuthContext = createContext();
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

// ==================================================
// create usr  Section Part Start
// ============================================================
  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

// ==================================================
// create usr  Section Part end
// ============================================================


// ==================================================
// user login  Section Part Start
// ============================================================
  const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
// ==================================================
// user login  Section Part end
// ============================================================


// ==================================================
// user logOUT  Section Part Start
// ============================================================
  const logOut=()=>{
    
    return signOut(auth)
  }
// ==================================================
// user logOUT  Section Part end
// ============================================================
// user profile picture function 

// ==================================================
// user UpdateProfile and name  Section Part Start
// ============================================================
const userDetails=(name,photoUrl)=>{
    updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoUrl
    })
    .then(() => setUser((user) => (
      { ...user, displayName: name, photoURL: photoUrl })))
   .catch((error) => { console.log(error) });
  }
// ==================================================
// user UpdateProfile and name  Section Part end
// ============================================================

// ==================================================
// user Google SignIn  Section Part Start
// ============================================================
//   google signIn function 

  const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

// ==================================================
// user Google SignIn  Section Part end
// ============================================================

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
   // ==================================================
// user get and set token line Part Start
// ============================================================
       
if(currentUser){
  axios.post('https://assignment-12-server-steel.vercel.app/jwt',{email:currentUser.email.toLocaleLowerCase()})
  .then(data=>{
    // console.log(data.data.jwtToken);
   if(data.data){
    localStorage.setItem('access-token',data.data.jwtToken)
    setLoading(false)
   }
 
  })
 }else{
  localStorage.removeItem('access-token')  
  setLoading(false)
 }
        
    })
    return ()=>{
        return unsubscribe()
    }
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    userDetails,
    googleSignIn
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;