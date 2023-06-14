import React, { useContext } from 'react';
import { HiPhotograph, HiUser } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdAlternateEmail} from "react-icons/md";
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Provider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import SocaialLogin from '../Home/SocalLogin/SocaialLogin';

const Register = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const{createUser,userDetails}=useContext(AuthContext)
    const navigate=useNavigate()
  const onSubmit = data => {

    if(data.password===data.ConfirmPassword){
        const name=data.name;
        const photo=data.photoUrl;

        const email=data.email;
        const password=data.password
        
        createUser(email,password,name,photo)
        .then(result=>{
         
            userDetails(name,photo)
            const saveUser={name:name,email:email,photoURL:photo,role:'student'
            }
            fetch('https://assignment-12-server-steel.vercel.app/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    toast.success('SignUp Successfully ');
                    navigate('/')
           
                }
            })
           
        })
      }else{
        toast.error('SignUp Successfully ');
      }
    }
    
   

    return (
        <div className='bodyStyle'>
        <div class="containerStyle">
    <div class="design">
        <div class="pill-1 rotate-45"></div>
        <div class="pill-2 rotate-45"></div>
        <div class="pill-3 rotate-45"></div>
        <div class="pill-4 rotate-45"></div>
    </div>
    <div class="login">
        <h3 class="title text-2xl font-bold">Sign Up</h3>
       <form onSubmit={handleSubmit(onSubmit)}>
       <div class="text-input">
          
            <HiUser/>
            <input  className="inputStyle" type="text" {...register("name")} placeholder="Username"/>
        </div>
        <div class="text-input">
         
            <HiPhotograph/>
            <input  className="inputStyle" type="text" {...register("photoUrl")}  placeholder="Photo Url"/>
        </div>
        <div class="text-input">
            
            <MdAlternateEmail/>
            <input  className="inputStyle" type="email" {...register("email")} placeholder="email"/>
        </div>
        <div class="text-input">
          
           <RiLockPasswordFill/>
            <input  className="inputStyle" type="password" {...register("password",{ required: true, minLength:6,pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="Password"/>

 
  {errors.password?.type === 'required' && toast.error('Password is required')}
  {errors.password?.type === 'minLength' &&   toast.error('Password must be 6 characters')}

  {errors.password?.type === 'pattern' &&   toast.error('Password must have one Uppercase one lower case, one number and one special character')}







   




        </div>
        <div class="text-input">
        
           <RiLockPasswordFill/>
            <input  className="inputStyle" type="password" {...register("ConfirmPassword")} placeholder="Confirm Password"/>
        </div>
        <div>
            <Link to={'/login'}>Already Have a Account? Please Sign in</Link>
        </div>
        <input  className="inputStyle" type='submit' value='Sign Up' class="login-btn"/>
       </form>
      <SocaialLogin></SocaialLogin>
       
       

    </div>
</div>

    </div>
    );
};

export default Register;