import React from 'react';

const Schedule = () => {
     return (
          <div>
              <p className='text-2xl md:text-4xl font-bold text-center mb-10'>Program Schedule</p>
              <div className='flex gap-4'>
                    <div className='w-1/3 border'>
                         <p className='text-2xl md:text-4xl font-semibold'>Check The Schedule</p>
                         <p className='my-5 text-gray-500 font-serif'>This is event schedule section you can check the details about time duration, speaker, venue & more.</p>
                         <div className='mt-10 flex-col'>
                              <div className='bg-gray-400/30 text-center w-[140px] py-3 inline-block hover:bg-pink-600 my-2 cursor-pointer hover:text-white font-medium'>Morning</div><br />
                              <div className='bg-gray-400/30 text-center w-[140px] py-3 inline-block hover:bg-pink-600 my-2 cursor-pointer hover:text-white font-medium'>Noon</div><br />
                              <div className='bg-gray-400/30 text-center w-[140px] py-3 inline-block hover:bg-pink-600 my-2 cursor-pointer hover:text-white font-medium'>Evening</div>
                         </div>
                    </div>
                    <div className='border w-2/3'>
                         <div className='text-center text-xl font-medium py-3 bg-blue-500 text-white'>Saturday, 4 March 2019</div>
                    </div>
              </div>
          </div>
     );
};

export default Schedule;