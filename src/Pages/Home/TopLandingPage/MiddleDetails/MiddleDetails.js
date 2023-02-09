import React from 'react';
import { RxLapTimer } from "react-icons/rx";
import { GoLocation } from "react-icons/go";

const MiddleDetails = () => {
     return (
          <div className='text-white w-full flex justify-center items-center'>
               <div>
                    <div className='flex justify-center gap-4 text-2xl'>
                         <div className='flex items-center gap-1'>
                              <RxLapTimer className='text-pink-600' /> 21 February, 2023
                         </div>
                         <div className='flex items-center gap-1'>
                              <GoLocation className='text-pink-600'/> AB4, Daffodil International University
                         </div>
                    </div>
                    <div className='text-center text-7xl font-semibold py-12 max-w-5xl mx-auto'>Information Technology & Managemanet Summit 2023</div>
                    <div className='flex justify-center'>
                         <div className='bg-white px-8 py-3 text-pink-600 cursor-pointer hover:tracking-widest hover:bg-pink-600 hover:text-white hover:font-semibold duration-300 ease-in '>Register Now</div>
                    </div>
               </div>
          </div>
     );
};

export default MiddleDetails;