import React from 'react';

const TimerSection = ({ days, hours, minutes, seconds }) => {

     return (
          <div className='max-w-3xl mx-auto flex gap-10 mb-7'>
               <div className='text-sm text-slate-200'>
                    <span className='font-semibold text-6xl text-pink-500'>{days}</span> Days
               </div>
               <div className='text-sm text-slate-200'>
                    <span className='font-semibold text-6xl text-pink-500'>{hours}</span> Hour
               </div>
               <div className='text-sm text-slate-200'>
                    <span className='font-semibold text-6xl text-pink-500'>{minutes}</span> Min
               </div>
               <div className='text-sm text-slate-200'>
                    <span className='font-semibold text-6xl text-pink-500'>{seconds}</span> Sec
               </div>
          </div>
     );
};

export default TimerSection;