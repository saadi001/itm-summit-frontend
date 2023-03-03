import React from 'react';
import { GiConfirmed } from "react-icons/gi";

const Confirmation = () => {
     return (
          <div className='bg-gray-500/10 flex justify-center items-center w-full min-h-screen'>
               <div className='border p-5 rounded-md bg-white text-xl text-center'>
                    <div className='text-center flex justify-center text-4xl text-pink-600'><GiConfirmed/></div>
                    <p>Data has been stored.</p>
                    <p className='mb-3'>You will get confirmation email!</p>
                    <a href="/" className='text-sm bg-blue-600 text-white px-5 py-2  rounded'>register again</a>
               </div>
          </div>
     );
};

export default Confirmation;