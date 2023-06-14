import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Page/Home/Home/Navbar/Navbar';
import Footer from '../Page/Home/Footer/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;