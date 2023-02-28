import React, { useState } from 'react';
import './Panelists.css'
import sobhan from '../../../Asset/image/sakhawat sobhan.jfif'
import mahbub from '../../../Asset/image/mahbub a alam.jfif'
import imran from '../../../Asset/image/imran mahmud.jfif'
import nusrat from '../../../Asset/image/Nusrat.png'
import farhana from '../../../Asset/image/farhanaIslam.jpg';
import sazzad from '../../../Asset/image/sazzad.jfif';
import PanelistsDescription from '../../../Components/Modal/PanelistsDescription';


const Panelists = () => {
     const [description, setDescription] = useState(null)

     const panelistData = {
          sobhan: {
               id: 1,
               name: 'Sakhawat Sobhan',
               image: sobhan,
               designation: 'Director & COO at Monico Technologies Ltd, BD',
               account: 'https://www.linkedin.com/in/sakhawat-sobhan-6722a98/?originalSubdomain=bd',
               details: [
                    {details: 'Founded an ITES for GPS Tracking for Cars, Trucks and all sorts of vehicles in Bangladesh, which is one of the top GPS Tracking company in Bangladesh under the brandname FINDER. As a part of founding FINDER GPS Tracking, He has worked on the basics of system design and control which assists in process automation for scaling a business from zero. '},

                    {details: 'He has worked on software design, system analysis, technology selection, system architecture design and implementation for strategic growth of an organization. Worked in system design and implementation for proper control in the organization, especially in marketing, operations and finance. Currently working for development and establishment of organization wide implementation of Standard Operating Procedure(SOP)s with the assistance of related software technology by internally developing through our team members.'},

                    {details:'As part of my entrepreneurial aspirations starting with Finder, he has started Truck Kothay (http://truck.kothay.com), one of the first leading Truck Aggregation/ Online Truck Booking platform in Bangladesh. He could not stop there which is why also moved into e-commerce through our latest step to start Shodai (http://shod.ai or http://সদাই.com) for delivering from farm to table via the retail distribution channel.'} ,
                    
                    {details: 'During our endeavors, He has seen the challenges involved in managing supply chain, tasks and logistics management, which is why he has started the Conveyance App(http://conveyance.app) which turns your team’s movement properly accountable and manageable covering areas of Sales Force Management, Transport and Logistics Management, Container and Parcel Management as well as Order Management covering first mile collection to last mile delivery through an all through out automation.'},
                    
                    {details: 'His goals correspond to successfully implementing SOP through the use of technologies for creating a Enterprise Information System(EIS).'},
                    
                    {details: 'Specialties: System analysis, design, technology selection, financial report analysis, control point designing and implementing.'}
               ]
          },
         mahbub: {
               id: 2,
               name: 'Mahbub A. Alam',
               image: mahbub,
               designation: 'Chief Digital Officer, Bank Asia Limited',
               account: 'https://www.linkedin.com/in/mahbub-a-alam-pmp-340076113/',
               details: [
                    {details: 'Creating and implementing an organizations overall digital strategy. Converting traditional "Analog" businesses to digital ones and responsible for the adaption of new and world standard digital technologies across the entire business.'},

                    {details: '25 years extensive experienced in development & management of Core Banking System.'},
                    
               ]
          },
          imran: {
               id: 3, 
               name: 'Dr. Imran Mahmud',
               image: imran,
               designation: 'Associate Professor and Head at Department of Software Engineering, Daffodil International University-DIU',
               account: '',
               details: [
                    {details: 'comming'}
               ]
          },
          farhana:{
               id: 4, 
               name: "Farhana Islam",
               image: farhana,
               designation: 'Specialist, Project Coordination at edotco Group',
               account: '',
               details: [
                    {details: '15+ Yrs. experience in Engineering, Project Management, Sales & Marketing and Business planning in Telecom industry.'},

                    {details: 'Currently working as Project Coordinator in Center of design excellence in EDOTCO Bangladesh ltd. the leading towerCo of Bangladesh.'},

                    {details: 'Involved in Volunteering with PMI® Bangladesh Chapter from 2020'},

                    {details: 'BSc in Civil (CUET), MBA in Finance (Dhaka University)'}
               ]
          },
          sajjad:{
               id: 5,
               name: 'Sazzad Ar Rahman, PMP, ITIL',
               image: sazzad,
               designation: 'Project Manager | FinTech | B Sc in EEE | MBA। Director, PMI Bangladesh Chapter',
               account: 'https://www.linkedin.com/in/sazzad-ar-rahman-pmp-itil-b16a4938/',
               details: [
                    {details: 'A PMP certified passionate Project Manager & having 10+ years’ experience in Project Management, Data Center Operations & Facilities Management in FinTech & IT Industry. Have proven expertise in Service Development, Stakeholder Management (including Central Bank, Ministry, Banks, MFS, PSP, etc.), Risk Management, Project & People Management, Policy Enforcement, Communication, Coordination & Strategic Planning & Development area.'},
                    {details: 'A Growth Centric leader, with a variable record of successful business development through rich capability in project Management & experienced in managing complex business by developing relationships, convincing & executing strategic business development plan to achieve the final target.'},
                    {details: ' Passionate about directing a new strategy, Project analysis, critical situation handling, Vendor Management, Scheduling, Reporting & Documentation, Data Analysis, demand forecasting, product penetration strategy in a competitive environment'}
               ]
          },
          nusrat: {
               id: 6,
               name: 'Nusrat Jahan',
               image: nusrat,
               designation: 'Assistant Professor & Head, Department of ITM, DIU',
               account: '',
               details: [
                    {details: ''}
               ]
          }

     }

     const closeModal = () => {
          setDescription(null)
     }

     return (
          <div id='panel'>
               <p className='text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16'>Panel Discussion of ITM Summit 2023</p>
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-7'>
                    {/* sobhan sir  */}
                    <div class="h-72 md:h-96   lg:mb-0">
                         <div class="h-72 md:h-96 block group relative overflow-hidden shadow-lg">
                              <img src={sobhan} class="absolute z-0 object-cover w-full h-72 md:h-96" alt='' />
                              <div class="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-0"></div>
                              <div className='absolute top-1 left-2 font-medium z-10 text-white text-base'>Panelist</div>
                              <div class="absolute left-0 right-0 bottom-0 p-6 z-0 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                                   <div class="h-1/2 relative">
                                        <div class="absolute bottom-0">
                                             <h2 class="font-bold text-white leading-tight transition duration-300 text-xl pb-6 ">{panelistData.sobhan.name}</h2>
                                        </div>
                                   </div>
                                   <div class="h-1/2">
                                        <p class="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">{panelistData.sobhan.designation}</p>
                                        {/* <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button> */}
                                        {/* <label  htmlFor="my-modal-6" className="">Read more</label> */}
                                        <label onClick={() => setDescription(panelistData.sobhan)} htmlFor="my-modal-5" className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300 cursor-pointer capitalize">read more</label>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* mahbub sir  */}
                    <div class="h-72 md:h-96   lg:mb-0">
                         <div class="h-72 md:h-96 block group relative overflow-hidden shadow-lg">
                              <img src={mahbub} class="absolute z-0 object-cover w-full h-72 md:h-96" alt='' />
                              <div class="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-0"></div>
                              <div className='absolute top-1 left-2 font-medium z-10 text-white text-base'>Panelist</div>
                              <div class="absolute left-0 right-0 bottom-0 p-6 z-0 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                                   <div class="h-1/2 relative">
                                        <div class="absolute bottom-0">
                                             <h2 class="font-bold text-white leading-tight transition duration-300 text-xl pb-6 ">{panelistData.mahbub.name}</h2>
                                        </div>
                                   </div>
                                   <div class="h-1/2">
                                        <p class="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">{panelistData.mahbub.designation}</p>                                        
                                        <label onClick={() => setDescription(panelistData.mahbub)} htmlFor="my-modal-5" className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300 cursor-pointer capitalize">read more</label>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* imran sir  */}
                    <div class="h-72 md:h-96   lg:mb-0">
                         <div class="h-72 md:h-96 block group relative overflow-hidden shadow-lg">
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
                                        <p class="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">Associate Professor and Head at Department of Software Engineering, Daffodil International University-DIU</p>                                        
                                        <label onClick={() => setDescription(panelistData.imran)} htmlFor="my-modal-5" className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300 cursor-pointer capitalize">read more</label>
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
               <div className='grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-7 '>
                    <div></div>
                    {/* farhana mam  */}
                    <div class="h-72 col-span-2 md:h-96  lg:mb-0 mt-7">
                         <div class="h-72 md:h-96 block group relative overflow-hidden shadow-lg">
                              <img src={farhana} class="absolute z-0 object-cover w-full h-72 md:h-96" alt='' />
                              <div class="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-0"></div>
                              <div className='absolute top-1 left-2 font-medium z-10 text-white text-base'>Panelist</div>
                              <div class="absolute left-0 right-0 bottom-0 p-6 z-0 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                                   <div class="h-1/2 relative">
                                        <div class="absolute bottom-0">
                                             <h2 class="font-bold text-white leading-tight transition duration-300 text-xl pb-6 ">Farhana Islam PMP</h2>
                                        </div>
                                   </div>
                                   <div class="h-1/2">
                                        <p class="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">Specialist, Project Coordination at edotco Group</p>
                                        {/* <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button> */}
                                        <label onClick={() => setDescription(panelistData.farhana)} htmlFor="my-modal-5" className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300 cursor-pointer capitalize">read more</label>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* saazzad sir  */}
                    <div class="h-72 col-span-2 md:h-96  lg:mb-0 mt-7">
                         <div  class="h-72 md:h-96 block group relative overflow-hidden shadow-lg">
                              <img src={sazzad} class="absolute z-0 object-cover w-full h-72 md:h-96" alt='' />
                              <div class="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-0"></div>
                              <div className='absolute top-1 left-2 font-medium z-10 text-white text-base'>Panelist</div>
                              <div class="absolute left-0 right-0 bottom-0 p-6 z-0 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                                   <div class="h-1/2 relative">
                                        <div class="absolute bottom-0">
                                             <h2 class="font-bold text-white leading-tight transition duration-300 text-xl pb-6 ">{panelistData.sajjad.name}</h2>
                                        </div>
                                   </div>
                                   <div class="h-1/2">
                                        <p class="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">{panelistData.sajjad.designation}</p>
                                        {/* <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button> */}
                                        <label onClick={() => setDescription(panelistData.sajjad)} htmlFor="my-modal-5" className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300 cursor-pointer capitalize">read more</label>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div></div>
               </div>
               {/* nusrat jahan mam */}
               <div className='flex justify-center '>
                    <div class="h-72 w-[330px] col-span-2 md:h-96  lg:mb-0 mt-7">
                         <div class="h-72 md:h-96 block group relative overflow-hidden shadow-lg">
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
                                        {/* <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button> */}
                                        <label onClick={() => setDescription(panelistData.nusrat)} htmlFor="my-modal-5" className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300 cursor-pointer capitalize">read more</label>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div>
                    {
                         description && <PanelistsDescription
                         data={description}
                         closeModal={closeModal}
                         ></PanelistsDescription>
                    }
               </div>
          </div>
     );
};

export default Panelists;