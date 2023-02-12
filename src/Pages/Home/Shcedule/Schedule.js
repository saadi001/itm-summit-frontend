import React, { useEffect, useState } from 'react';
import { GoLocation } from "react-icons/go";
import { GiDuration } from "react-icons/gi";

const Schedule = () => {
     const [schedules, setSchedule] = useState([]);

     useEffect(() => {
          fetch('http://localhost:5000/schedule')
               .then(res => res.json())
               .then(data => setSchedule(data))
     }, [])
     return (
          <div id='schedule'>
               <p className='text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16'>Program Schedule</p>
               <div className='flex gap-4'>
                    <div className='w-1/3 hidden lg:inline-block'>
                         <p className='text-2xl md:text-4xl font-semibold'>Check The Schedule</p>
                         <p className='my-5 text-gray-500 font-serif'>This is event schedule section you can check the details about time duration, speaker, venue & more.</p>
                         {/* <div className='mt-10 flex-col'>
                              <div className='bg-gray-400/30 text-center w-[140px] py-3 inline-block hover:bg-pink-600 my-2 cursor-pointer hover:text-white font-medium'>Morning</div><br />
                              <div className='bg-gray-400/30 text-center w-[140px] py-3 inline-block hover:bg-pink-600 my-2 cursor-pointer hover:text-white font-medium'>Noon</div><br />
                              <div className='bg-gray-400/30 text-center w-[140px] py-3 inline-block hover:bg-pink-600 my-2 cursor-pointer hover:text-white font-medium'>Evening</div>
                         </div> */}
                    </div>
                    <div className='w-full lg:w-2/3'>
                         <div className='text-center text-xl font-medium py-3 bg-blue-500 text-white'>Saturday, 4 March 2019</div>
                         <div>
                              {
                                   schedules.map(schedule => {
                                        return (
                                             <div key={schedule.id} className='flex items-center gap-3 py-5 border'>
                                                  <div className='w-16 sm:w-auto px-4 text-sm md:text-base font-medium'>{schedule?.time}</div>
                                                  <div>
                                                       <div  className='flex gap-4'>
                                                            <div className='w-16 md:w-24'><img className='w-16 md:w-24 object-cover' src={schedule?.images} alt="" /></div>
                                                            <div className={`${schedule?.id === 1 || schedule?.id === 3 || schedule?.id === 8 ? 'flex items-center': ""}`}>
                                                                 <p className='text-base md:text-lg font-semibold'>{schedule?.name}</p>
                                                                 <div className='mt-3'>
                                                                      <div className='text-xs md:text-base '>
                                                                           {
                                                                                schedule?.location ?
                                                                                     <div className='flex items-center gap-1 font-semibold'>
                                                                                          <span className='text-pink-600'><GoLocation /></span> {schedule?.location}
                                                                                          <div className='flex items-center gap-1 ml-3'>
                                                                                               <span className='text-pink-600'><GiDuration /></span> {schedule?.Duration}
                                                                                          </div>
                                                                                     </div> : ''
                                                                           }
                                                                      </div>
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