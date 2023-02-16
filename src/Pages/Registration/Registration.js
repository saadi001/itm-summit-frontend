import React from 'react';

const Registration = () => {
     return (
          <div>
               <div className='py-4'>hello</div>
               <section class="p-4 sm:p-6 md:p-10 my-5 mx-auto bg-white rounded-md shadow-md border">
                    <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Registration Form</h2>

                    <form>
                         <div class="grid grid-cols-1 gap-6 my-6 sm:grid-cols-2">
                              <div>
                                   <label class="text-gray-700 dark:text-gray-200" for="username">Name</label>
                                   <input id="username" type="text" class="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                              </div>

                              <div>
                                   <label class="text-gray-700 dark:text-gray-200" for="emailAddress">ID</label>
                                   <input id="emailAddress" type="email" class="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                              </div>

                              <div>
                                   <label class="text-gray-700 dark:text-gray-200" for="password">Email Adress</label>
                                   <input id="password" type="password" class="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                              </div>

                              <div>
                                   <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Semester</label>
                                   <input id="passwordConfirmation" type="password" class="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                              </div>

                              <div>
                                   <label class="text-gray-700 dark:text-gray-200" for="phoneNumber">Phone Number(Whatsapp)</label>
                                   <input id="passwordConfirmation" type="password" class="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                              </div>

                              <div>
                                   <label for="image" class="text-gray-700 dark:text-gray-200">Image</label>
                                   <input type="file" class="block w-full px-3 py-[10px] mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300" />
                              </div>

                              <div>
                                   <label class="text-gray-700 dark:text-gray-200" for="transactionID">Transaction ID</label>
                                   <input id="passwordConfirmation" type="password" class="block w-full px-4 py-[10px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                              </div>
                         </div>

                         <div className="form-control">
                              <label className="flex items-center cursor-pointer">
                                   <input type="checkbox" className="checkbox checkbox-primary" />
                                   <span className="ml-3 label-text">Accept our terms and condition!</span>
                              </label>
                         </div>


                         <div class="flex justify-end mt-6">
                              <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                         </div>
                    </form>
               </section>

          </div>
     );
};

export default Registration;