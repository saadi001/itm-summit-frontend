import React, { useEffect, useState } from 'react';
import { GoLocation } from "react-icons/go";
import women from '../../../Asset/image/women 1.jpg'

const Schedule = () => {
     const [schedules, setSchedule] = useState([]);

     useEffect(() => {
          fetch('http://localhost:5000/schedule')
               .then(res => res.json())
               .then(data => setSchedule(data))
     }, [])
     return (
          <div>
               <p className='text-2xl md:text-4xl font-bold text-center mb-10'>Program Schedule</p>
               <div className='flex gap-4'>
                    <div className='w-1/3 border'>
                         <p className='text-2xl md:text-4xl font-semibold'>Check The Schedule</p>
                         <p className='my-5 text-gray-500 font-serif'>This is event schedule section you can check the details about time duration, speaker, venue & more.</p>
                         <div className='mt-10 flex-col'>
                              <div className='bg-gray-400/30 text-center w-[140px] py-3 inline-block hover:bg-pink-600 my-2 cursor-pointer hover:text-white font-medium'>Morning</div><br />
                              <div className='bg-gray-400/30 text-center w-[140px] py-3 inline-block hover:bg-pink-600 my-2 cursor-pointer hover:text-white font-medium'>Noon</div><br />
                              <div className='bg-gray-400/30 text-center w-[140px] py-3 inline-block hover:bg-pink-600 my-2 cursor-pointer hover:text-white font-medium'>Evening</div>
                         </div>
                    </div>
                    <div className='border w-2/3'>
                         <div className='text-center text-xl font-medium py-3 bg-blue-500 text-white'>Saturday, 4 March 2019</div>
                         <div>
                              {
                                   schedules.map(schedule => {
                                        return (
                                             <div className='flex items-center gap-3 py-4 border'>
                                                  <div className='px-4 text-base font-medium'>{schedule?.time}</div>
                                                  <div className='flex gap-4'>
                                                       <div className='w-24'><img className='w-full' src={women} alt="" /></div>
                                                       <div >
                                                            <p className='text-lg font-semibold'>{schedule?.name}</p>
                                                            <div className='mt-3'> 
                                                                 <div className='text-base '>
                                                                      {
                                                                           schedule?.location ? <div><GoLocation/> {schedule?.location}</div> : ''
                                                                      }
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        )
                                   })
                              }
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Schedule;