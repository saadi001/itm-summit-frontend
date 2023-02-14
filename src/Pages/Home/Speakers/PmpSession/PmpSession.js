import React from 'react';
import annesha from '../../../../Asset/image/annesha.jfif'

const PmpSession = () => {
     return (
          <div id='pmpsession' className='md:my-20 my-12'>
               <p className='text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16'>Project Management Professional Session</p>
               <div className='grid grid-cols-1 md:grid-cols-2 shadow-md relative rounded-md gap-0 sm:gap-3'>
                    <div>
                         <img className='w-full h-full object-cover rounded-tl-md rounded-tr-md sm:rounded-tr-none sm:rounded-bl-md' src={annesha} alt="" />
                    </div>
                    <div className='p-3'>
                         <p className='text-lg md:text-2xl font-semibold'>Annesha Ahmed</p>
                         <p className='text-gray-500 text-sm mt-2 font-serif'>President, Project Management Institute Bangladesh
                         </p>
                         <ul className='mt-5 font-medium list-disc ml-4'>
                              <li>14+ Yrs. experience in Business Development Strategy, Project Management, Marketing, Business Research and Consultancy in ITES and Power Generation industry</li>   
                              <li>Currently working as Director, Business Strategy and Supply Chain Management, Diesel Power Services Limited, a 30 years old off Grid power supply management company with 80% of area coverage in Bangladesh and $20 million project delivery each year.</li>
                              <li>Involved in Volunteering with PMI® Bangladesh Chapter from 2013 and with PMI® Global from 2015</li>
                         </ul>
                    </div>
                    {/* <div className='absolute top-0 bg-black/40 backdrop-blur-md bottom-0 w-full flex justify-center items-center text-xl font-semibold rounded-md text-white'>
                         Surprise!!!☺
                    </div> */}
               </div>

          </div>
     );
};

export default PmpSession;