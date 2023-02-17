import React, { useEffect, useState } from 'react';
import { GoLocation } from "react-icons/go";
import { GiDuration } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";

const Schedule = () => {
     const [schedules, setSchedule] = useState([]);
     const [open, setOpen] = useState(false);
     const [toggleState, setToggleState] = useState()

     useEffect(() => {
          fetch('https://itmsummitbackend.vercel.app/schedule')
               .then(res => res.json())
               .then(data => setSchedule(data))
     }, [])

     const handleDetails = (id) => {
          // setOpen(!open)
          setToggleState(id)

          // setOpen(!open)
     }
     return (
          <div id='schedule'>
               <p className='text-2xl md:text-4xl font-bold text-center pt-10 md:pt-16  mb-10 md:mb-16'>Program Schedule</p>
               <div className='flex gap-4'>
                    <div className='w-1/4 hidden lg:inline-block'>
                         <p className='text-2xl md:text-4xl font-semibold'>Check The Schedule</p>
                         <p className='my-5 text-gray-500 font-serif'>This is event schedule section, you can check the details about time duration, speaker, venue & more.</p>
                         {/* <div className='mt-10 flex-col'>
                              <div className='bg-gray-400/30 text-center w-[140px] py-3 inline-block hover:bg-pink-600 my-2 cursor-pointer hover:text-white font-medium'>Morning</div><br />
                              <div className='bg-gray-400/30 text-center w-[140px] py-3 inline-block hover:bg-pink-600 my-2 cursor-pointer hover:text-white font-medium'>Noon</div><br />
                              <div className='bg-gray-400/30 text-center w-[140px] py-3 inline-block hover:bg-pink-600 my-2 cursor-pointer hover:text-white font-medium'>Evening</div>
                         </div> */}
                    </div>
                    <div className='w-full lg:w-3/4'>
                         <div className='text-center text-xl font-medium py-3 bg-blue-500 text-white'>Saturday, 4 March 2023</div>
                         <div>
                              {
                                   schedules.map(schedule => {
                                        return (
                                             <div>
                                                  <div key={schedule.id} className={` grid grid-cols-4 content-center gap-3 py-5 border-x border-b ${schedule?.id === 1 || schedule?.id === 3 || schedule?.id === 7 || schedule?.id === 9 ? 'bg-pink-400/20' : ""}`}>
                                                       <div className='flex items-center'><div className=' sm:w-auto px-4 text-sm font-medium'>{schedule?.time}</div></div>
                                                       <div className='col-span-3'>
                                                            <div className='grid grid-cols-1 sm:grid-cols-4 gap-3'>
                                                                 <div className=''>
                                                                      <img className='w-1/2 sm:w-full object-cover' src={schedule?.images?.[0]} alt="" />
                                                                 </div>
                                                                 <div onClick={() => handleDetails(schedule.id)} className={`sm:col-span-3 ${schedule?.id === 1 || schedule?.id === 3 || schedule?.id === 7 || schedule?.id === 9 ? 'flex items-center ' : ""}`}>
                                                                      <div className='flex justify-between'>
                                                                           <div>
                                                                                <p className='text-base md:text-lg font-semibold text-start'>{schedule?.Method}</p>
                                                                                <div className='mt-3'>
                                                                                     <div className='text-xs md:text-sm '>
                                                                                          {
                                                                                               schedule?.location ?
                                                                                                    <div className='grid grid-cols-2 gap-1 font-medium'>
                                                                                                         <div className='flex gap-1'><span className='text-pink-600'><GoLocation /></span> <span className='-mt-[3px]'>{schedule?.location}</span></div>
                                                                                                         <div className='flex  gap-1 ml-3'>
                                                                                                              <span className='text-pink-600'><GiDuration /></span> <span className='-mt-[3px]'>{schedule?.Duration}</span>

                                                                                                         </div>
                                                                                                    </div> : ''
                                                                                          }
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                           {schedule?.content?.title?.length > 0 ?
                                                                                <div className='px-3 flex items-center '>
                                                                                     <IoMdArrowDropdown className='text-lg' />
                                                                                </div> : ''
                                                                           }
                                                                      </div>

                                                                 </div>
                                                            </div>
                                                       </div>



                                                  </div>
                                                  <div className={`${toggleState === schedule.id ? "block" : "hidden"} duration-300 ease-in ${toggleState=== 1 || schedule?.id === 3 || schedule?.id === 7 || schedule?.id === 9 ? "h-0 opacity-0" : "h-auto"}`}>
                                                       {
                                                            <div className={`w-full bg-gray-500/10`}>
                                                                 <div className='px-6 sm:px-12 py-8'>
                                                                      {/* <div>
                                                                      <img src={schedule?.images} alt="" />
                                                                 </div> */}
                                                                      <div>
                                                                           <p className='text-lg font-semibold '>{schedule?.content?.title}</p>
                                                                           <ul className='list-disc ml-3 sm:ml-6 mt-3'>
                                                                                {
                                                                                     schedule?.content?.option?.map((list) => <li className='py-[2px]'>{list?.list}</li>)
                                                                                }
                                                                           </ul>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       }
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