import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import webLogo from '../../../../../assets/web-logo.png'
import { useEffect } from "react";




const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme,setTheme]=useState(localStorage.getItem('theme')? localStorage.getItem('theme'):'light')
     const handleToggle=(e)=>{
      if(e.target.checked){
        setTheme('dark')
      }else{
        setTheme('light')
      }
     }
  
  useEffect(()=>{
      localStorage.setItem('theme',theme)
      const localTheme=localStorage.getItem('theme');
      document.querySelector('html').setAttribute('data-theme',localTheme)
  },[theme])

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
    
      });
  };
  const navbarLinkOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="instructor">Instructors</Link>
      </li>
      <li>
        <Link to="allClass"> Classes</Link>
      </li>
{user&&
  <li><Link to={'/dashboard'}>Dashboard</Link></li>
}
    
    </>
  );


  return (

      <div className="sm:mb-20" >
      <div className="navbar bg-[#2c2c6c] ">
        <div className="navbar-start">

        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbarLinkOption}
            </ul>
          </div>

         
          <a >
            <img className="w-20 rounded-lg" src={webLogo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbarLinkOption}</ul>
        </div>
        <div className="navbar-end list-none">
          {user && (
            <button className="btn btn-circle btn-outline">
              <img
                className="rounded-full w-16  "
                src={user?.photoURL}
                title={user?.displayName}
                alt=""
              />
            </button>
          )}
          {user ? (
            <>
              <li className="login-btn-style">
                <button onClick={handleLogOut}>Log Out</button>
              </li>
            </>
          ) : (
            <>
              <li className="login-btn-style">
                <Link to="login">Login</Link>
              </li>
            </>
           
          )}
          <li className="mr-3 ml-3 login-btn-style">
            <Link to={'signup'}>Sign Up</Link>
          </li>
          
          
          <li className="">
          <input onChange={handleToggle} checked={theme==='light'? false:true
        } type="checkbox" className="toggle"  />
          </li>

        </div>
      </div>
    </div>

  );
};

export default Navbar;
