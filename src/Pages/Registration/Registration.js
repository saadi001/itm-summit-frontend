import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdReportGmailerrorred } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Registration = () => {
     const navigate = useNavigate();
     const [checkbox, setCheckbox] = useState(false);
     const [selectedValue, setSelectedValue] = useState('');
     const [laoding, setLoading] = useState(false)
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
          const { name, id, email, semester, phone, transactionID } = data;

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
                                   navigate('/confirmation')
                                   setLoading(false)
                              })
                    }
               })


     }
     return (
          <div>
               {
                    laoding ? <div className='pt-3 flex justify-center'><Loading></Loading></div> :
                         <div className='pb-10'>
                              <section className="p-4 sm:p-6 md:p-10 mt-6 mx-auto bg-white rounded-md shadow-md">
                                   <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Registration Form</h2>

                                   <form onSubmit={handleSubmit(handleRegisterForm)}>
                                        <div className="grid grid-cols-1 gap-6 my-6 sm:grid-cols-2">
                                             <div>
                                                  <label className="text-gray-700 dark:text-gray-200" for="username">Name</label>
                                                  <input {...register('name', { required: "This field is required." })} id="username" type="text" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                  {errors.name && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.name?.message}</p>}
                                             </div>

                                             <div>
                                                  <label className="text-gray-700 dark:text-gray-200" for="ID">ID</label>
                                                  <input {...register('id', { required: "This field is required." })} id="id" type="text" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                  {errors.id && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.id?.message}</p>}
                                             </div>

                                             <div>
                                                  <label className="text-gray-700 dark:text-gray-200" for="email">Email Address</label>
                                                  <input {...register('email', { required: "This field is required." })} id="email" type="email" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                  {errors.email && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.email?.message}</p>}
                                             </div>

                                             <div>
                                                  <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Semester</label>
                                                  <input {...register('semester')} id="semester" type="text" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                             </div>

                                             <div>
                                                  <label className="text-gray-700 dark:text-gray-200" for="phoneNumber">Phone Number(Whatsapp)</label>
                                                  <input {...register('phone', { required: "This field is required." })} id="phoneNumber" type="number" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                                  {errors.phone && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.phone?.message}</p>}
                                             </div>

                                             <div>
                                                  <label for="image" className="text-gray-700 dark:text-gray-200">Image</label>
                                                  <input {...register('image', { required: "This field is required." })} type="file" className="block w-full px-3 py-[10px] mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300" />
                                                  {errors.image && <p className='text-sm text-red-600 mt-1 flex items-center gap-1'><MdReportGmailerrorred />{errors.image?.message}</p>}
                                             </div>

                                             <div>
                                                  <p className='font-medium'>Use <span className='text-pink-600'>send money</span> option by Bkash/Nagad and send 500/300 taka to <span className='text-pink-600'>01757210124</span>.</p>
                                                  {/* <input  type="radio" name="radio-3" className="radio radio-secondary"  value={"500"}/>
                                   <label htmlFor="">500</label>
                                   <input  type="radio" name="radio-3" className="radio radio-secondary" value={"300"}/>
                                   <label htmlFor="">300</label> */}
                                                  <div className='mt-5'>
                                                       <label className='flex items-center'>
                                                            <input
                                                                 className='radio radio-secondary mr-2'
                                                                 type="radio"
                                                                 value="500"
                                                                 checked={selectedValue === '500'}
                                                                 onChange={handleOptionChange}
                                                            />
                                                            <span className='text-sm'>500 (includes competition, souvenir, lunch & snacks)</span>
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
                                                  <label className="text-gray-700 dark:text-gray-200" for="transactionID">Transaction ID</label>
                                                  <input {...register('transactionID', { required: "This field is required." })} id="transaction" type="text" className="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
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
     );
};

export default Registration;