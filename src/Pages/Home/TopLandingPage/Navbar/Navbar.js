import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import {  RxCross2 } from "react-icons/rx";
import logo from '../../../../Asset/logo/328496960_760463888831247_1725153779242283475_n-removebg-preview.png'

const Navbar = () => {
     const [open, setOpen] = useState(false);
     return (
          <div className='flex justify-between items-center py-2 text-white mx-10'>
               <div className='w-24 cursor-pointer'><img className='w-full' src={logo} alt="" /></div>
               {/* for big screen  */}
               <div className='hidden md:block'>
                    <ul className='flex items-center gap-8 font-semibold'>
                         <li><Link to={'/'}>Home</Link></li>
                         <li><a href="#about">About</a></li>
                         <li><Link>Schedules</Link></li>
                         <li><Link>Speakers</Link></li>
                         <li>Contact</li>
                         <li className='bg-pink-700 px-6 py-3 rounded-md'>Competition</li>
                    </ul>
               </div>
               {/* for small screen  */}
               <div className='md:hidden'>
                    <div className='relative' onClick={() => setOpen(!open)}>
                         {
                              open ? <RxCross2 className='w-6 h-6 cursor-pointer'/> : <IoMdMenu  className='w-6 h-6 cursor-pointer ' />
                         }
                    </div>
                    {
                         open && <div className='bg-white text-slate-800 pl-5 pr-16 rounded-md mr-8 right-2 py-2 absolute z-10 block md:hidden'>
                              <ul className=' font-semibold'>
                                   <li className='pb-2'><Link to={'/'}>Home</Link></li>
                                   <li className='pb-2'><a href="#about">About</a></li>
                                   <li className='pb-2'><Link>Schedules</Link></li>
                                   <li className='pb-2'><Link>Speakers</Link></li>
                                   <li className='pb-2'>Contact</li>
                                   {/* <li className='bg-pink-700 px-6 py-3 rounded-md'>Competition</li> */}
                              </ul>
                         </div>
                    }
               </div>
          </div>
     );
};

export default Navbar;