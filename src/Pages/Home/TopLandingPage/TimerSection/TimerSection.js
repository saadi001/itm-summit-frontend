import React from 'react';

const TimerSection = ({ days, hours, minutes, seconds }) => {

     return (
          <div className='max-w-3xl mx-auto flex md:gap-10 gap-5 mb-7'>
               <div className='md:text-sm text-xs  text-slate-200'>
                    <span className='font-semibold text-3xl md:text-6xl  text-pink-500'>{days}</span> Days
               </div>
               <div className='md:text-sm text-xs text-slate-200'>
                    <span className='font-semibold text-3xl md:text-6xl text-pink-500'>{hours}</span> Hour
               </div>
               <div className='md:text-sm text-xs text-slate-200'>
                    <span className='font-semibold text-3xl md:text-6xl text-pink-500'>{minutes}</span> Min
               </div>
               <div className='md:text-sm text-xs text-slate-200'>
                    <span className='font-semibold text-3xl md:text-6xl text-pink-500'>{seconds}</span> Sec
               </div>
          </div>
     );
};

export default TimerSection;