import React from 'react';
import logo from '../../../Asset/logo/328496960_760463888831247_1725153779242283475_n-removebg-preview.png'

const About = () => {
     return (
          <div id='about' className='max-w-5xl lg:mx-auto mx-3 py-10'>
               <img className='w-32' src={logo} alt="" />
               <div className='font-semibold text-lg mt-4 mb-2'>About Information Technology & Management Summit 2023</div>
               <div className='text-base'>The ITM Summit 2023 is a one-day event hosted by the Information Technology and Management (ITM) department of Daffodil International University. The summit will be held on March 04, 2023 and is aimed at providing students and professionals with a platform to exchange ideas, share knowledge, and network with each other.</div>
               <div className='text-base mt-4'>
                    The summit is organized by the ITM Department and ITM Club with the aim of fostering growth and development in the field of Information Technology and Management. The day-long event will feature various segments such as puzzle competition, project management profession session, panel discussion, skill development session, and cultural program. With the attendance of prominent figures from the industry, the summit promises to provide valuable insights and perspectives to all participants.
               </div>
               <div className='text-base mt-4'>
                    Our team is committed to providing a high-quality experience for all attendees and participants. From event planning to execution, we are dedicated to ensuring the success of the ITM Summit 2023.
               </div>
               <div className='text-base mt-4'>We are honored to have the opportunity to host such a visionary leader and education entrepreneur, Mr. Ayman Sadiq, as the keynote speaker at our summit. His wealth of knowledge and experience in the field of education and technology will be of immense value to the students and attendees of our summit.</div>
               <div className='text-base mt-4'>Join us at the ITM SUMMIT 2023 to be a part of this exciting opportunity to network, learn, and grow with like-minded individuals</div>
          </div>
     );
};

export default About;