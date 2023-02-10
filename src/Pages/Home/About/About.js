import React from 'react';
import logo from '../../../Asset/logo/328496960_760463888831247_1725153779242283475_n-removebg-preview.png'
import diu from '../../../Asset/image/DIU.png'

const About = () => {
     return (
          <div id='about' className='max-w-7xl xl:mx-auto lg:mx-28 md:mx-12 mx-5 py-14'>
               <div className=''>
                    <img className='w-32' src={logo} alt="" />
                    <div className='font-semibold text-xl mt-4 mb-2'>About Information Technology & Management Summit 2023</div>
                    <div className='font-serif'>
                         <div className='text-base'>The ITM Summit 2023 is a one-day event hosted by the Information Technology and Management (ITM) department of Daffodil International University. The summit will be held on March 04, 2023 and is aimed at providing students and professionals with a platform to exchange ideas, share knowledge, and network with each other.</div>
                         <div className='text-base mt-4'>
                              The summit is organized by the ITM Department and ITM Club with the aim of fostering growth and development in the field of Information Technology and Management. The day-long event will feature various segments such as puzzle competition, project management profession session, panel discussion, skill development session, and cultural program. With the attendance of prominent figures from the industry, the summit promises to provide valuable insights and perspectives to all participants.
                         </div>
                         <div className='text-base mt-4'>
                              Our team is committed to providing a high-quality experience for all attendees and participants. From event planning to execution, we are dedicated to ensuring the success of the ITM Summit 2023.
                         </div>
                         <div className='text-base mt-4'>We are honored to have the opportunity to host such a visionary leader and education entrepreneur, Mr. X, as the keynote speaker at our summit. His wealth of knowledge and experience in the field of education and technology will be of immense value to the students and attendees of our summit.</div>
                         <div className='text-base mt-4'>Join us at the ITM SUMMIT 2023 to be a part of this exciting opportunity to network, learn, and grow with like-minded individuals</div>
                    </div>
               </div>
               <div className='mt-8'>
                    <p className='font-semibold text-xl mb-2'>About Daffodil International University (DIU)</p>
                    <img src={diu} alt="" />
                    <div className='text-base mt-4 font-serif'>
                         <div>
                              Daffodil International University (DIU) is one of the top universities in Bangladesh according to many national and international rankings, including THE, QS and Greenmetric for its green outlook. Currently DIU is having 22,000 students under 5 different faculties and 25 departments. Around 400 international students from many different countries are currently studying here too. DIU established international collaborations with around 440 universities all over the world and members of leading international organizations like AUPF, IIE, IAU, IAUP, AUAP, ACU, ALA, ACD, Magna Charta, UNAI, APAIE, EURAS, ESRUC, EEUA, ATUNET, IEEE, ISTQB, ACE, NAFSA, AMDISA, EAIE, ATIFTAF, ITU, ACBSP, UNGC, UMAP, IFLA, WUACD, GUNI, SDSN, ASEF, AIESEC, ASECU, IETI, Future Team, SDG Helpdesk, EEUA etc.
                         </div>
                         <div className='text-base mt-4'>
                              With global partners, DIU is mutually working in the area of student and faculty exchange programs, summer & winter programs, scholarship, international internship, research collaborations, short-term training programs, virtual mobility, etc.
                         </div>
                         <div className='mt-2'>
                              website: <a className='text-blue-700' href="https://daffodilvarsity.edu.bd/">https://daffodilvarsity.edu.bd/</a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default About;