import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Schedule from './Shcedule/Schedule';
import KeynoteSpeaker from './Speakers/KeynoteSpeaker/KeynoteSpeaker';
import TopLandingPage from './TopLandingPage/TopLandingPage';

const Home = () => {
     return (
          <div>
               <TopLandingPage></TopLandingPage>
               <div className='2xl:max-w-7xl xl:mx-auto xl:max-w-5xl lg:mx-20 md:mx-12 mx-5'>
                    <About></About>
                    <KeynoteSpeaker></KeynoteSpeaker>
                    <Schedule></Schedule>
                    <Contact></Contact>
                    <Footer></Footer>
               </div>
          </div>
     );
};

export default Home;