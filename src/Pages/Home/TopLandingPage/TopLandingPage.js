import React from 'react';

import MiddleDetails from './MiddleDetails/MiddleDetails';
import Navbar from './Navbar/Navbar';
import TimerSection from './TimerSection/TimerSection';
import './TopLandingPage.css'

const TopLandingPage = () => {
     return (
          <div className='toplandingpage grid content-between  min-h-screen '>
               <Navbar></Navbar>
               <MiddleDetails></MiddleDetails>
               {/* <div className='text-white opacity-0'>.</div> */}
               <TimerSection></TimerSection>
          </div>
     );
};

export default TopLandingPage;