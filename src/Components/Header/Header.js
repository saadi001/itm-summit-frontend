import React, { useContext } from 'react';
import logo from '../../Asset/logo/328496960_760463888831247_1725153779242283475_n-removebg-preview.png'
import unknown from '../../Asset/image/unknown1.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Header = () => {
     const {logOut, user} = useContext(AuthContext);

     const handleLogout = () =>{
          logOut()
          .then(()=>{})
          .catch((err)=>{
               console.error(err)
          })
     }

     return (
          <div className='py-3 flex justify-between items-center'>
               <Link to={'/'} className='w-16'><img className='w-full' src={logo} alt="" /></Link>
               <div className='flex items-center gap-2'>
                    {/* <input className='py-1 px-1 w-24 sm:w-auto rounded-md border border-gray-300' type="text" />
                    <img className='w-8 h-8 rounded-full border' src={user?.photoURL ? user?.photoURL : unknown} alt="" />
                    <button onClick={handleLogout} className='bg-pink-600 text-white px-5 py-[6px] rounded cursor-pointer'>log out</button> */}
                    <p className='text-lg font-semibold'>04 March, 2023</p>          
               </div>
          </div>
     );
};

export default Header;