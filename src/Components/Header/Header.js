import React from 'react';
import logo from '../../Asset/logo/328496960_760463888831247_1725153779242283475_n-removebg-preview.png'
import unknown from '../../Asset/image/unknown1.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <div className='py-2 flex justify-between items-center'>
               <Link to={'/'} className='w-16'><img className='w-full' src={logo} alt="" /></Link>
               <div className='flex items-center gap-2'>
                    <input className='py-1 px-1 rounded-md border border-gray-300' type="text" />
                    <img className='w-8 h-8 rounded-full border' src={unknown} alt="" />
               </div>
          </div>
     );
};

export default Header;