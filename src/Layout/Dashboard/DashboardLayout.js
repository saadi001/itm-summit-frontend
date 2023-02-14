import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Home/TopLandingPage/Navbar/Navbar';

const DashboardLayout = () => {
     return (
          <div>
               <Navbar></Navbar>
               <Outlet></Outlet>
          </div>
     );
};

export default DashboardLayout;