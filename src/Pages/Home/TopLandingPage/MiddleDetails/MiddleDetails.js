import React from 'react';
import { RxLapTimer } from "react-icons/rx";
import { GoLocation } from "react-icons/go";
import { Link } from 'react-router-dom';

const MiddleDetails = () => {
     return (
          <div className='text-white w-full flex justify-center items-center '>
               <div>
                    <div className='md:flex justify-center gap-4 '>
                         <div className='flex items-center justify-center text-base md:text-xl gap-1'>
                              <RxLapTimer className='text-pink-600' /> 04 March, 2023
                         </div>
                         <div className='flex items-center justify-center text-base md:text-xl gap-1'>
                              <GoLocation className='text-pink-600'/> DSC, Daffodil International University
                         </div>
                    </div>
                    <div className='text-center lg:text-7xl md:text-5xl text-3xl font-medium pt-4 pb-8  max-w-5xl lg:mx-auto mx-3'>Information Technology Management Summit 2023</div>
                    <div className='flex justify-center'>
                         <Link to={'/'} className='bg-white text-sm md:text-base px-5 md:px-8 py-2 md:py-3 text-pink-600 cursor-pointer hover:tracking-widest hover:bg-pink-600 hover:text-white hover:font-semibold duration-300 ease-in '>Register Now</Link>
                    </div>
               </div>
          </div>
     );
};

export default MiddleDetails;