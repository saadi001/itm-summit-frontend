import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import logo from '../../../../Asset/logo/328496960_760463888831247_1725153779242283475_n-removebg-preview.png'

const Navbar = () => {
     return (
          <div className='lg:mx-20 md:mx-12 mx-2 '>
               <div className="navbar justify-between text-white">
                    <div className="flex justify-between">
                         <div className="dropdown">
                              {/* mobile view  */}
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box text-gray-800 w-52">
                                   <li><a href='#home' className='px-6 py-3'>Home</a></li>
                                   <li><a href='#about' className='px-6 py-3'>About</a></li>
                                   <li tabIndex={0}>
                                        <a className="justify-between px-6 py-3">
                                             Speakers
                                             <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                        </a>
                                        <ul className="p-2 bg-base-100">
                                             <li><a href='#keynotespeaker'>Keynote Speaker</a></li>
                                             <li><a>Panel Member</a></li>
                                        </ul>
                                   </li>
                                   <li><a href='#schedule' className='px-6 py-3'>Schedule</a></li>
                                   <li><a className='px-6 py-3'>Contact</a></li>
                                   <li className='bg-pink-700 px-6 py-3 rounded-md hover:bg-blue-800 duration-200 ease-in cursor-pointer'>Competition</li>
                              </ul>
                         </div>
                         <Link to={'/'} className="w-16 md:w-24 text-xl"><img src={logo} alt="" /></Link>
                    </div>
                    {/* big screen view  */}
                    <div className=" hidden lg:flex">
                         <ul className="menu menu-horizontal px-1 font-semibold">
                              <li><a href='#home'>Home</a></li>
                              <li><a href='#about'>About</a></li>
                              <li tabIndex={0}>
                                   <a>
                                        Speakers
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                   </a>
                                   <ul className="p-2 bg-base-100 text-gray-800 font-semibold">
                                        <li><a href='#keynotespeaker'>Keynote Speaker</a></li>
                                        <li><a>Panel Member</a></li>
                                   </ul>
                              </li>
                              <li><a href='#schedule'>Schedule</a></li>
                              <li><a>Contact</a></li>
                              <li className='bg-pink-700 px-6 py-3 rounded-md hover:bg-blue-800 duration-200 ease-in cursor-pointer'>Competition</li>
                         </ul>
                    </div>


               </div>
          </div>
          // <div className='flex justify-between items-center py-2 text-white mx-10'>
          //      <div className='w-24 cursor-pointer'><img className='w-full' src={logo} alt="" /></div>
          //      {/* for big screen  */}
          //      <div className='hidden md:block'>
          //           <ul className='flex items-center gap-8 font-semibold'>
          //                <li><Link to={'/'}>Home</Link></li>
          //                <li><a href="#about">About</a></li>
          //                <li><Link>Schedules</Link></li>
          //                <li><Link>Speakers</Link></li>
          //                <li>Contact</li>
          //                <li className='bg-pink-700 px-6 py-3 rounded-md'>Competition</li>
          //           </ul>
          //      </div>
          //      {/* for small screen  */}
          //      <div className='md:hidden'>
          //           <div className='relative' onClick={() => setOpen(!open)}>
          //                {
          //                     open ? <RxCross2 className='w-6 h-6 cursor-pointer'/> : <IoMdMenu  className='w-6 h-6 cursor-pointer ' />
          //                }
          //           </div>
          //           {
          //                open && <div className='bg-white text-slate-800 pl-5 pr-16 rounded-md mr-8 right-2 py-2 absolute z-10 block md:hidden'>
          //                     <ul className=' font-semibold'>
          //                          <li className='pb-2'><Link to={'/'}>Home</Link></li>
          //                          <li className='pb-2'><a href="#about">About</a></li>
          //                          <li className='pb-2'><Link>Schedules</Link></li>
          //                          <li className='pb-2'><Link>Speakers</Link></li>
          //                          <li className='pb-2'>Contact</li>
          //                          {/* <li className='bg-pink-700 px-6 py-3 rounded-md'>Competition</li> */}
          //                     </ul>
          //                </div>
          //           }
          //      </div>
          // </div>
     );
};

export default Navbar;