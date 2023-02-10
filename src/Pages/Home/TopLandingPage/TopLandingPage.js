import React from 'react';
import MiddleDetails from './MiddleDetails/MiddleDetails';
import Navbar from './Navbar/Navbar';
import CountdownTimer from './TimerSection/CountdownTimer';
import './TopLandingPage.css'

const TopLandingPage = () => {
     const THREE_DAYS_IN_MS = 22 * 24 * 60 * 60 * 1000;
     const NOW_IN_MS = new Date().getTime();
   
     const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
     return (
          <div className='toplandingpage grid content-between min-h-screen '>
               <Navbar></Navbar>
               <MiddleDetails></MiddleDetails>
               <CountdownTimer targetDate={dateTimeAfterThreeDays} />
          </div>
     );
};

export default TopLandingPage;