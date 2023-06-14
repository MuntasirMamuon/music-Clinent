import React, { useContext } from 'react';
import {FcGoogle} from "react-icons/fc";
import { AuthContext } from '../../../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const SocaialLogin = () => {
 const { googleSignIn}=useContext(AuthContext)
  const navigate=useNavigate()
  const handleGoogleLogin=()=>{
    googleSignIn()
    .then(result=>{
      const loggedUser=result.user

      const saveUser={name:loggedUser.displayName,email:loggedUser.email,photoURL:loggedUser.photoURL,role:'student'}
      fetch('https://assignment-12-server-steel.vercel.app/users',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(saveUser)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        toast.success('Google SignUp Successfully ');
        navigate('/')
    
    }
    })
      
    })
  }
    return (
        <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
      <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
       <FcGoogle/>
      </button>
      </div>
    </div>
    );
};

export default SocaialLogin;