import React from 'react';
import './Panelists.css'
import sobhan from '../../../Asset/image/sakhawat sobhan.jfif'
import mahbub from '../../../Asset/image/mahbub a alam.jfif'
import imran from '../../../Asset/image/imran mahmud.jfif'
import unknown from '../../../Asset/image/unknown1.jpg'
import nusrat from '../../../Asset/image/Nusrat.png'


const Panelists = () => {
     return (
          <div id='panel'>
               <p className='text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16'>Panel Discussion of ITM Summit 2023</p>
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-7'>
                    <div class="h-72 md:h-96   lg:mb-0">
                         <a href="#" class="h-72 md:h-96 block group relative overflow-hidden shadow-lg">
                              <img src={sobhan} class="absolute z-0 object-cover w-full h-72 md:h-96" alt='' />
                              <div class="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-0"></div>
                              <div className='absolute top-1 left-2 font-medium z-10 text-white text-base'>Panelist</div>
                              <div class="absolute left-0 right-0 bottom-0 p-6 z-0 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                                   <div class="h-1/2 relative">
                                        <div class="absolute bottom-0">
                                             <h2 class="font-bold text-white leading-tight transition duration-300 text-xl pb-6 ">Sakhawat Sobhan</h2>
                                        </div>
                                   </div>
                                   <div class="h-1/2">
                                        <p class="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">Director & COO at Monico Technologies Ltd, BD</p>
                                        <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
                                   </div>
                              </div>
                         </a>
                    </div>

                    <div class="h-72 md:h-96   lg:mb-0">
                         <a href="#" class="h-72 md:h-96 block group relative overflow-hidden shadow-lg">
                              <img src={mahbub} class="absolute z-0 object-cover w-full h-72 md:h-96" alt='' />
                              <div class="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-0"></div>
                              <div className='absolute top-1 left-2 font-medium z-10 text-white text-base'>Panelist</div>
                              <div class="absolute left-0 right-0 bottom-0 p-6 z-0 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                                   <div class="h-1/2 relative">
                                        <div class="absolute bottom-0">
                                             <h2 class="font-bold text-white leading-tight transition duration-300 text-xl pb-6 ">Mahbub A. Alam</h2>
                                        </div>
                                   </div>
                                   <div class="h-1/2">
                                        <p class="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">Chief Digital Officer, Bank Asia Limited</p>
                                        <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
                                   </div>
                              </div>
                         </a>
                    </div>

                    <div class="h-72 md:h-96   lg:mb-0">
                         <a href="#" class="h-72 md:h-96 block group relative overflow-hidden shadow-lg">
                              <img src={imran} class="absolute z-0 object-cover w-full h-72 md:h-96" alt='' />
                              <div class="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-0"></div>
                              <div className='absolute top-1 left-2 font-medium z-10 text-white text-base'>Panelist</div>
                              <div class="absolute left-0 right-0 bottom-0 p-6 z-0 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                                   <div class="h-1/2 relative">
                                        <div class="absolute bottom-0">
                                             <h2 class="font-bold text-white leading-tight transition duration-300 text-xl pb-6">Dr. Imran Mahmud</h2>
                                        </div>
                                   </div>
                                   <div class="h-1/2">
                                        <p class="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">Associate Professor and Head at Department of Software Engineering ,Daffodil International University-DIU</p>
                                        <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
                                   </div>
                              </div>
                         </a>
                    </div>

               </div>
               <div className='grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-7 '>
                    <div></div>

                    <div class="h-72 col-span-2 md:h-96  lg:mb-0 mt-7">
                         <a href="#" class="h-72 md:h-96 block group relative overflow-hidden shadow-lg">
                              <img src={unknown} class="absolute z-0 object-cover w-full h-72 md:h-96" alt='' />
                              <div class="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-0"></div>
                              <div className='absolute top-1 left-2 font-medium z-10 text-white text-base'>Panelist</div>
                              <div class="absolute left-0 right-0 bottom-0 p-6 z-0 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                                   <div class="h-1/2 relative">
                                        <div class="absolute bottom-0">
                                             <h2 class="font-bold text-white leading-tight transition duration-300 text-xl pb-6 ">Coming Soon</h2>
                                        </div>
                                   </div>
                                   <div class="h-1/2">
                                        <p class="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">Coming soon!!</p>
                                        <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
                                   </div>
                              </div>
                         </a>
                    </div>

                    <div class="h-72 col-span-2 md:h-96  lg:mb-0 mt-7">
                         <a href="#" class="h-72 md:h-96 block group relative overflow-hidden shadow-lg">
                              <img src={unknown} class="absolute z-0 object-cover w-full h-72 md:h-96" alt='' />
                              <div class="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-0"></div>
                              <div className='absolute top-1 left-2 font-medium z-10 text-white text-base'>Panelist</div>
                              <div class="absolute left-0 right-0 bottom-0 p-6 z-0 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                                   <div class="h-1/2 relative">
                                        <div class="absolute bottom-0">
                                             <h2 class="font-bold text-white leading-tight transition duration-300 text-xl pb-6 ">Coming Soon</h2>
                                        </div>
                                   </div>
                                   <div class="h-1/2">
                                        <p class="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">Coming soon!!</p>
                                        <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
                                   </div>
                              </div>
                         </a>
                    </div>

                    <div></div>
               </div>

               <div className='flex justify-center '>
                    <div class="h-72 w-[300px] col-span-2 md:h-96  lg:mb-0 mt-7">
                         <a href="#" class="h-72 md:h-96 block group relative overflow-hidden shadow-lg">
                              <img src={nusrat} class="absolute z-0 object-cover w-full h-72 md:h-96" alt='' />
                              <div class="absolute gradient-mam transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-0"></div>
                              <div className='absolute top-1 left-2 font-medium z-10 text-white text-base'>Moderator</div>
                              <div class="absolute left-0 right-0 bottom-0 p-6 z-0 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                                   <div class="h-1/2 relative">
                                        <div class="absolute bottom-0">
                                             <h2 class="font-bold text-white leading-tight transition duration-300 text-xl pb-6 ">Nusrat Jahan</h2>
                                        </div>
                                   </div>
                                   <div class="h-1/2">
                                        <p class="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">Assistant Professor & Head, Department of ITM, <br /> Daffodil International University.</p>
                                        <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
                                   </div>
                              </div>
                         </a>
                    </div>
               </div>
          </div>
     );
};

export default Panelists;