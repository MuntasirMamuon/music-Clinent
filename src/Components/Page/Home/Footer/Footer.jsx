import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF,FaLinkedinIn, FaGithub} from "react-icons/fa";
const Footer = () => {
    return (
        <div className=' bg-[#2c2c6c] text-white rounded-lg'>
            <footer className="footer p-10  text-base-content">
  <div className='mt-10 font-bold text-white'>
  Music Instrument Learning School
  <br/>Providing reliable tech since 2023
  </div> 
  <div>
    <span className="footer-title text-white">Services</span> 
    <Link className="link link-hover">Music</Link> 
    <Link className="link link-hover">ClassTunes</Link> 
    <Link className="link link-hover">SoundScholars</Link> 
    <Link className="link link-hover">MusicMinds</Link>
    <Link className="link link-hover">BeatClass</Link>
  </div> 
  <div>
    <span className="footer-title text-white">Company</span> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Contact</Link> 
    <Link className="link link-hover">Jobs</Link> 
    <Link className="link link-hover">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title text-white">Legal</span> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </div>
  <div>
    <span className="footer-title  text-white">media</span> 

   <div className='flex gap-4 mt-10'>
   <p><Link to={'https://www.facebook.com/mdmuntasir.mamun.589'} className="link link-hover text-2xl"><FaFacebookF/></Link> </p>
    <p><Link to={'https://www.linkedin.com/in/md-muntasir-mamun-95a797275/'} className="link link-hover text-2xl"><FaLinkedinIn/></Link> </p>
   <p> <Link to={'https://github.com/MuntasirMamuon'} className="link link-hover text-2xl"><FaGithub/></Link></p>
   </div>
  </div>
  
 <div>

   
 </div>
</footer>
<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2023 - All right reserved by Music Instrument Learning School</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;