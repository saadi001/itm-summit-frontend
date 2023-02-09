import React from 'react';

const Navbar = () => {
     return (
          <div className='flex justify-between items-center py-5 text-white mx-10'>
               <div>Logo</div>
               <div>
                    <ul className='flex items-center gap-8 font-semibold'>
                         <li>Home</li>
                         <li>About</li>
                         <li>Schedules</li>
                         <li>Speakers</li>
                         <li>News</li>
                         <li>Contact</li>
                         <li className='bg-pink-700 px-6 py-3 rounded-md'>Register</li>
                    </ul>
               </div>
          </div>
     );
};

export default Navbar;