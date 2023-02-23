import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdReportGmailerrorred } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Loading from '../Loading/Loading';

const Registration = () => {
     const navigate = useNavigate();
     const [checkbox, setCheckbox] = useState(false);
     const [selectedValue, setSelectedValue] = useState('');
     const [loading, setLoading] = useState(false)
     const { register, handleSubmit, formState: { errors } } = useForm();

     const handleCheckbox = (e) => {
          setCheckbox(e)
          // console.log(checkbox)
     }

     const handleOptionChange = (event) => {
          setSelectedValue(event.target.value);
     }

     const handleRegisterForm = (data) => {
          // console.log(selectedValue, data)
          setLoading(true)
          const { name,department,id, email, semester, phone, transactionID } = data;

          // image upload 
          const image = data.image[0]
          const formData = new FormData();
          formData.append('image', image)
          const url = `https://api.imgbb.com/1/upload?key=63767107697823bd4d26d5b8bb78e4a0`
          fetch(url, {
               method: 'POST',
               body: formData
          })
               .then(res => res.json())
               .then(imageData => {
                    if (imageData.success) {
                         console.log(imageData.data.url)
                         const registerData = {
                              name,
                              department,
                              id,
                              email,
                              semester,
                              phone,
                              taka: selectedValue,
                              image: imageData.data.url,
                              transactionID
                         }
                         fetch('https://itmsummitbackend.vercel.app/registration', {
                              method: "POST",
                              headers: {
                                   'content-type': 'application/json'
                              },
                              body: JSON.stringify(registerData)
                         })
                              .then(res => res.json())
                              .then(() => {
                                   setLoading(false)
                                   navigate('/confirmation')
                              })
                    }
               })


     }
     return (
          
          <div className='bg-gray-500/10 w-full min-h-screen'>
               <div className='2xl:max-w-7xl 2xl:mx-auto xl:mx-auto xl:max-w-5xl lg:mx-20 md:mx-12 mx-3'>
                    <Header></Header>
               {
                    loading ? <div className='pt-3 flex justify-center items-center min-h-screen'><Loading></Loading></div> :
                         <div className='pb-10'>
                              <section className="p-4 sm:p-6 md:p-10 pt-6 mx-auto bg-white rounded-md shadow-md">
                                   <h2 className="text-lg font-semibold text-gray-700 capitalize ">Registration Form</h2>

                                   <form onSubmit={handleSubmit(handleRegisterForm)}>
                                        <div className="grid grid-cols-1 gap-6 my-6 sm:grid-cols-2">
                                             <div>
                                                  <label className="text-gray-700 " for="username">Name</label>
                                                  <input {...register('name', { required: "This field is required." })} id="username" type="text" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                  {errors.name && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.name?.message}</p>}
                                             </div>

                                             <div>
                                                  <label className="text-gray-700 " for="username">Department</label>
                                                  <input {...register('department', { required: "This field is required." })} id="username" type="text" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                  {errors.department && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.department?.message}</p>}
                                             </div>

                                             <div>
                                                  <label className="text-gray-700" for="ID">ID</label>
                                                  <input {...register('id', { required: "This field is required." })} id="id" type="text" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                  {errors.id && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.id?.message}</p>}
                                             </div>

                                             <div>
                                                  <label className="text-gray-700 " for="email">Email Address</label>
                                                  <input {...register('email', { required: "This field is required." })} id="email" type="email" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                                  {errors.email && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.email?.message}</p>}
                                             </div>

                                             <div>
                                                  <label className="text-gray-700 " for="passwordConfirmation">Semester</label>
                                                  <input {...register('semester')} id="semester" type="text" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                             </div>

                                             <div>
                                                  <label className="text-gray-700 " for="phoneNumber">Phone Number(Whatsapp)</label>
                                                  <input {...register('phone', { required: "This field is required." })} id="phoneNumber" type="number" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                  {errors.phone && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.phone?.message}</p>}
                                             </div>

                                             <div>
                                                  <label for="image" className="text-gray-700 ">Image</label>
                                                  <input {...register('image', { required: "This field is required." })} type="file" className="block w-full px-3 py-[10px] mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full placeholder-gray-400/70  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
                                                  {errors.image && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.image?.message}</p>}
                                             </div> <br className='hidden sm:inline-block'/>

                                             <div>
                                                  <p className='font-medium'>Use <span className='text-pink-600'>send money</span> option by Bkash/Nagad and send 500/300 taka to <span className='text-pink-600'>01757210124</span>. <span className='text-sm font-normal'>(please use your id as reference)</span></p>
                                                 
                                                  <div className='mt-5'>
                                                       <label className='flex items-center'>
                                                            <input
                                                                 className='radio radio-secondary mr-2'
                                                                 type="radio"
                                                                 value="500"
                                                                 checked={selectedValue === '500'}
                                                                 onChange={handleOptionChange}
                                                            />
                                                            <span className='text-sm'>500 (includes competition, souvenir, lunch & snacks) <br /> <span className='text-xs'>Highly recommended for ITM student*</span></span>
                                                       </label>

                                                       <label className='flex items-center mt-3'>
                                                            <input
                                                                 className='radio radio-secondary mr-2'
                                                                 type="radio"
                                                                 value="300"
                                                                 checked={selectedValue === '300'}
                                                                 onChange={handleOptionChange}
                                                            />
                                                            <span className='text-sm'>300 (includes competition & souvenir)</span>
                                                       </label>

                                                  </div>

                                             </div>

                                             <div>
                                                  <label className="text-gray-700 " for="transactionID">Transaction ID (if you pay directly, write cash)</label>
                                                  <input {...register('transactionID', { required: "This field is required." })} id="transaction" type="text" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                  {errors.transactionID && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.transactionID?.message}</p>}
                                             </div>
                                        </div>

                                        <div className="form-control mt-10">
                                             <label className="flex items-center cursor-pointer">
                                                  <input onChange={(e) => handleCheckbox(e.target.checked)} type="checkbox" className="checkbox checkbox-primary" />
                                                  <span className="ml-3 label-text">Accept our terms and condition!</span>
                                             </label>
                                        </div>


                                        <div className="flex justify-end mt-6">
                                             <button disabled={!checkbox} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-pink-600 disabled:bg-pink-300 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-500">Register</button>
                                        </div>
                                   </form>
                              </section>

                         </div>
               }
               </div>
          </div>
     );
};

export default Registration;