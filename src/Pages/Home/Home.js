import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Panelists from './Panelists/Panelists';
import Schedule from './Shcedule/Schedule';
import Guest from './Speakers/Guest/Guest';
import KeynoteSpeaker from './Speakers/KeynoteSpeaker/KeynoteSpeaker';
import PmpSession from './Speakers/PmpSession/PmpSession';
import TopLandingPage from './TopLandingPage/TopLandingPage';

const Home = () => {
     return (
          <div>
               <TopLandingPage></TopLandingPage>
               <div className='2xl:max-w-7xl 2xl:mx-auto xl:mx-auto xl:max-w-5xl lg:mx-20 md:mx-12 mx-5'>
                    <About></About>
                    <KeynoteSpeaker></KeynoteSpeaker>
                    <Guest></Guest>
                    <PmpSession></PmpSession>
                    <Panelists></Panelists>
                    <Schedule></Schedule>
                    <Contact></Contact>
                    <Footer></Footer>
               </div>
          </div>
     );
};

export default Home;