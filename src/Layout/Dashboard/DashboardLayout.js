import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Home/TopLandingPage/Navbar/Navbar';

const DashboardLayout = () => {
     return (
          <div>               
               <div className='2xl:max-w-7xl 2xl:mx-auto xl:mx-auto xl:max-w-5xl lg:mx-20 md:mx-12 mx-5'>
                    <Outlet></Outlet>
               </div>
          </div>
     );
};

export default DashboardLayout;