import React from 'react';
import MiddleDetails from './MiddleDetails/MiddleDetails';
import Navbar from './Navbar/Navbar';
import CountdownTimer from './TimerSection/CountdownTimer';
import './TopLandingPage.css'

const TopLandingPage = () => {
     const THREE_DAYS_IN_MS = 4 * 24 * 60 * 60 * 1000;
     const NOW_IN_MS = new Date().getTime();
   
     const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
     return (
          <div id='home' className='toplandingpage grid content-between min-h-screen '>
               <Navbar></Navbar>
               <MiddleDetails></MiddleDetails>
               <CountdownTimer targetDate={dateTimeAfterThreeDays} />
               <div className='opacity-0'>.</div>
          </div>
     );
};

export default TopLandingPage;