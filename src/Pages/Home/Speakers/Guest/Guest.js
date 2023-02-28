import React from 'react';
import enayet from '../../../../Asset/image/enayet chowdhury.jpg'
import george from '../../../../Asset/image/Anjus_George - George Vinoj.jpg'

const Guest = () => {
     return (
          <div id='guest' className='my-10'>
     
               <div className='grid grid-cols-1 md:grid-cols-2 shadow-md relative rounded-md gap-0 sm:gap-3'>

                    <div className='p-3 order-last md:order-first'>
                         <p className='text-lg md:text-2xl font-semibold md:text-end'>Anjus George, Ph.D</p>
                         <p className='text-gray-500 text-sm mt-2 font-serif md:text-end'>HPC Storage R&D staff <br /> Linux kernel <br /> Edge Computing <br /> Distributed Systems
                         </p>
                         <p className='mt-5 font-medium md:text-end text-sm'>
                              <span className=''>
                                   Dr. George works with the Technology integration team at Oak Ridge National Laboratory (ORNL) that powers the some of the world’s fastest supercomputers like Summit and Frontier. Dr. George leverages her skills in the Lustre file system, scientific Edge, distributed system software, HPC storage durability and performance to make contributions that open many doors for the future of scientific research. She is the author of the technical report “Understanding Lustre Internals Second Edition” that serves as the foundational document for Lustre developers all over the world.</span> <br />
                              {/* 
                              Aside from Lustre file system, Dr. George leads the research on QuickSilver, a data management solution for multi-tier, large-scale storage systems. She conducts explorative studies on HPC storage performance, novel data durability schemes, and failure trends. Her passion also lies in Edge computing, particularly in boosting the performance of Edge ecosystem components. */}

                              <p className='mt-3'>Prior to joining ORNL, Dr. George obtained her Ph.D. in Computer Science from University of North Carolina at Charlotte where she created a distributed messaging framework for computer vision applications (CVAs) called Mez that achieved a 10.1x latency improvement over state-of-the-art systems. Aside from that, she designed a low-latency in-memory distributed storage for CVAs running in resource-constrained IoT environments.</p>

                              She is excited to be a part of a laboratory  eco-system that designs and runs some of the fastest and most sophisticated computers in the world .
                         </p>
                    </div>
                    <div className='order-first md:order-last'>
                         <img className='w-full h-full object-cover rounded-tr-md md:rounded-br-md rounded-br-none rounded-tl-md md:rounded-tl-none ' src={george} alt="" />
                    </div>
                    {/* <div className='absolute top-0 bg-black/60 backdrop-blur-md bottom-0 w-full flex justify-center items-center text-xl font-semibold rounded-md text-white'>
                              Coming soon!!!☺
                         </div> */}
               </div>

          </div>
     );
};

export default Guest;