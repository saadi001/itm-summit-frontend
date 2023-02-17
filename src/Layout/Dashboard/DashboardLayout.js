import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Navbar from '../../Pages/Home/TopLandingPage/Navbar/Navbar';

const DashboardLayout = () => {
     return (
          <div className='bg-gray-500/10 w-full min-h-screen'>               
               <div className='2xl:max-w-7xl 2xl:mx-auto xl:mx-auto xl:max-w-5xl lg:mx-20 md:mx-12 mx-5'>
                    <Header></Header>
                    <Outlet></Outlet>
               </div>
          </div>
     );
};

export default DashboardLayout;