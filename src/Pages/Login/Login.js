import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import logo from '../../Asset/logo/328496960_760463888831247_1725153779242283475_n-removebg-preview.png'
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
     const {providerLogin} = useContext(AuthContext);
     const provider = new GoogleAuthProvider();

     const handleGooglePopup = (provider) =>{
          providerLogin(provider)
          .then(result=>{
               const user = result.user
               console.log(user)
          })
          .catch(error=>{
               console.error(error)
          })
     }

     return (
          <div className='flex justify-center items-center h-screen w-full'>
               <div className=''>
                    <div className='w-full flex justify-center'><Link to={'/'} className='w-20  mb-3'><img src={logo} alt="" /></Link></div>
                    <div onClick={()=>handleGooglePopup(provider)} className='flex items-center gap-3 text-xl font-bold text-slate-700 border px-7 py-3 rounded-md bg-slate-500/20 cursor-pointer hover:border-blue-400/20'><FcGoogle className='text-3xl' /> Sign in with google</div>
               </div>
          </div>
     );
};

export default Login;