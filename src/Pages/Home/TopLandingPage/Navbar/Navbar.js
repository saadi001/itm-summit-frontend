import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../Asset/logo/328496960_760463888831247_1725153779242283475_n-removebg-preview.png'

const Navbar = () => {
     return (
          <div className='flex justify-between items-center py-2 text-white mx-10'>
               <div className='w-24 cursor-pointer'><img className='w-full' src={logo} alt="" /></div>
               {/* for big screen  */}
               <div className='hidden md:block'> 
                    <ul className='flex items-center gap-8 font-semibold'>
                         <li><Link to={'/'}>Home</Link></li>
                         <li><Link to={'/about'}>About</Link></li>
                         <li><Link>Schedules</Link></li>
                         <li><Link>Speakers</Link></li>
                         <li>Contact</li>
                         <li className='bg-pink-700 px-6 py-3 rounded-md'>Register</li>
                    </ul>
               </div>
               {/* for small screen  */}
               <div className='md:hidden'>
                    bar
               </div>
          </div>
     );
};

export default Navbar;