import React from 'react';
import MiddleDetails from './MiddleDetails/MiddleDetails';
import Navbar from './Navbar/Navbar';
import './TopLandingPage.css'

const TopLandingPage = () => {
     return (
          <div className='toplandingpage grid content-between   min-h-screen'>
               <Navbar></Navbar>
               <MiddleDetails></MiddleDetails>
               <div className='text-white'>hello</div>
          </div>
     );
};

export default TopLandingPage;