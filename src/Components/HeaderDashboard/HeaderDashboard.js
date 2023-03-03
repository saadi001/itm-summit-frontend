import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import logo from '../../Asset/logo/328496960_760463888831247_1725153779242283475_n-removebg-preview.png'
import { Link } from 'react-router-dom';
import { IoLogInOutline } from "react-icons/io5";
import unknown from '../../Asset/image/unknown1.jpg'

const HeaderDashboard = () => {
     const {logOut, user} = useContext(AuthContext);

     const handleLogout = () =>{
          logOut()
          .then(()=>{})
          .catch((err)=>{
               console.error(err)
          })
     }
     return (
          <div className='py-3 px-2 flex justify-between items-center'>
               <Link to={'/'} className='w-16'><img className='w-full' src={logo} alt="" /></Link>
               <div className='flex items-center gap-2'>
                    <input className='py-1 px-1 w-24 sm:w-auto rounded-md border border-gray-300' type="text" />
                    <img className='w-8 h-8 rounded-full border' src={user?.photoURL ? user?.photoURL : unknown} alt="" />
                    <button onClick={handleLogout} className='bg-pink-600 text-white px-5 py-[6px] rounded cursor-pointer'>log out</button> 
                    
               </div>
          </div>
     );
};

export default HeaderDashboard;