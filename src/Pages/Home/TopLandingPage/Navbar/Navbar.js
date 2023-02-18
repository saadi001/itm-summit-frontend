import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../Asset/logo/328496960_760463888831247_1725153779242283475_n-removebg-preview.png'
import logo2 from '../../../../Asset/logo/Logo-02.png'

const Navbar = () => {
     const [color, setColor] = useState(false)

     const changeColor = () =>{
          if(window.scrollY >= 100){
               setColor(true)
          }
          else{
               setColor(false)
          }
     }

     window.addEventListener('scroll', changeColor);

     return (
          <div className={`lg:px-20 md:px-12 px-2 z-10 ${color ? 'bg-white/95 text-gray-800 shadow-md fixed left-0 right-0 ' : 'bg-transparent text-white'} duration-200 ease-in`} >
               <div className="navbar justify-between">
                    <div className="flex justify-between">
                         <div className="dropdown">
                              {/* mobile view  */}
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${color ? 'text-gray-800':'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box text-gray-800 w-52 z-50">
                                   <li><a href='#home' className='px-6 py-3'>Home</a></li>
                                   <li><a href='#about' className='px-6 py-3'>About</a></li>
                                   <li tabIndex={0}>
                                        <a className="justify-between px-6 py-3">
                                             Speakers
                                             <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                        </a>
                                        <ul className="p-2 bg-base-100 ">
                                             <li><a href='#keynotespeaker'>Keynote Speaker</a></li>
                                             <li><a href='#guest'>Honourable Guest</a></li>
                                             <li><a href='#pmpsession'>PMP session</a></li>
                                             <li><a href='#panel'>Panel Discussion</a></li>
                                        </ul>
                                   </li>
                                   <li><a href='#schedule' className='px-6 py-3'>Schedule</a></li>
                                   <li><a href='#contact' className='px-6 py-3'>Contact</a></li>
                                   <li className={`bg-pink-700 px-6 py-3 rounded-md hover:bg-blue-800 duration-200 ease-in cursor-pointer text-white`}>Competition</li>
                              </ul>
                         </div>
                         <Link to={'/'} className={`${color ? 'w-16' : 'w-16 md:w-20 lg:w-28 text-xl'} `}><img src={logo} alt="" /></Link>
                    </div>
                    {/* big screen view  */}
                    <div className=" hidden lg:flex">
                         <ul className="menu menu-horizontal px-1 font-semibold">
                              <li ><a href='#home'>Home</a></li>
                              <li><a href='#about'>About</a></li>
                              <li tabIndex={0}>
                                   <a>
                                        Speakers
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                   </a>
                                   <ul className="p-2 bg-base-100 text-gray-800 font-semibold">
                                        <li><a href='#keynotespeaker'>Keynote Speaker</a></li>
                                        <li><a href='#guest'>Honourable Guest</a></li>
                                        <li><a href='#pmpsession'>PMP session</a></li>
                                        <li><a href='#panel'>Panel Discussion</a></li>
                                   </ul>
                              </li>
                              <li><a href='#schedule'>Schedule</a></li>
                              <li><a href='#contact'>Contact</a></li>
                              <li className={`bg-pink-700 px-6 py-3 rounded-md hover:bg-blue-800 duration-200 ease-in ml-3 cursor-pointer text-white`}>Competition</li>
                         </ul>
                    </div>


               </div>
          </div>          
     );
};

export default Navbar;