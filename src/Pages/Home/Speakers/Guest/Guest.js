import React from 'react';
import enayet from '../../../../Asset/image/enayet chowdhury.jpg'

const Guest = () => {
     return (
          <div id='guest' className='md:my-20 my-12'>
               <p className='text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16'>Honourable Guest</p>
               <div className='grid grid-cols-1 md:grid-cols-2 shadow-md relative rounded-md gap-0 sm:gap-3'>
                    
                    <div className='p-3 order-last md:order-first'>
                         <p className='text-lg md:text-2xl font-semibold md:text-end'>Enayet Chowdhury</p>
                         <p className='text-gray-500 text-sm mt-2 font-serif md:text-end'>Teacher <br />
                         Writer<br />
                         Researcher
                         </p>
                         <p className='mt-5 font-medium md:text-end'>
                              Ayman Sadiq is a Bangladeshi education entrepreneur. He is the founder of Ten Minute School, an online educational institution. Ayman Sadiq has implemented this idea in the country where online learning and teaching is possible through his organization. Ayman Sadiq not only manages the Ten Minute School, but also serves as a teacher here.
                         </p>
                    </div>
                    <div className='order-first md:order-last'>
                         <img className='w-full h-full object-cover rounded-tr-md md:rounded-br-md rounded-br-none rounded-tl-md md:rounded-tl-none ' src={enayet} alt="" />
                    </div>
                         <div className='absolute top-0 bg-black/60 backdrop-blur-md bottom-0 w-full flex justify-center items-center text-xl font-semibold rounded-md text-white'>
                              Coming soon!!!☺
                         </div>
               </div>

          </div>
     );
};

export default Guest;