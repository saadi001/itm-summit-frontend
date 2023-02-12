import React from 'react';
import logo from '../../../Asset/logo/328496960_760463888831247_1725153779242283475_n-removebg-preview.png'
import { FaFacebook,FaYoutube,FaGithub } from "react-icons/fa";

const Footer = () => {
     return (
          <div>
               <footer className="bg-white mt-4 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-between py-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                         <a href="#home">
                              <img className="w-24" src={logo} alt=""/>
                         </a>

                         <p className="text-sm text-center text-gray-600 dark:text-gray-300">© Copyright 2023. <br /> All Rights Reserved by <br /> Department of Information Technology & Management</p>

                         <div className="flex gap-2">
                              <a href=""><FaFacebook/></a>
                              <a href=""><FaYoutube/></a>
                              <a href=""><FaGithub/></a>
                         </div>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;