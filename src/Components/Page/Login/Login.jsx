import React, { useContext, useState } from "react";
import "./Login.css";
import {FcGoogle} from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { HiUser } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import {  toast } from 'react-hot-toast';
import { AuthContext } from "../../../Provider/AuthProvider";
import { Result } from "postcss";
import SocaialLogin from "../Home/SocalLogin/SocaialLogin";
const Login = () => {
  const navigate=useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const {signIn}=useContext(AuthContext)
  const onSubmit = data => {

    const email=data.email;
    const password=data.password
    signIn(email,password)
    .then(result=>{
      const user=result.user
      toast.success('SignUp Successfully ');
      navigate('/')

    })

  }
  return (
    <div className="bodyStyle">
      <div class="containerStyle">
        <div class="design">
          <div class="pill-1 rotate-45"></div>
          <div class="pill-2 rotate-45"></div>
          <div class="pill-3 rotate-45"></div>
          <div class="pill-4 rotate-45"></div>
        </div>
        <div class="login">
          <h3 class="title text-2xl font-bold">User Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div class="text-input">
            {/* <i class="ri-user-fill"></i> */}
            <HiUser />
            <input className="inputStyle" type="text"  {...register("email")} placeholder="UserEmail" />
          </div>
          <div class="text-input">
            {/* <i class="ri-lock-fill"></i> */}
            <RiLockPasswordFill />
            <input  className="inputStyle" type="password"  {...register("password")} placeholder="Password" />
          </div>
          <div><Link to={'/signup'}>
          Are You New?Please Sign up
          </Link></div>
          <button class="login-btn">LOGIN</button>
          </form>
        
          
         <SocaialLogin></SocaialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
