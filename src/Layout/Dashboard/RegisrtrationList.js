import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../../Pages/Loading/Loading';

const RegisrtrationList = () => {
     const { data: registrationList, isLoading, refetch } = useQuery({
          queryKey: ['registrationList'],
          queryFn: async () => {
               const res = await fetch('https://itmsummitbackend.vercel.app/registration')
               const data = await res.json()
               console.log(data);
               return data;
          }
     })

     const handleCollected = (id) => {
          fetch(`http://localhost:5000/collected/${id}`, {
               method: 'PUT'
          })
               .then(res => res.json())
               .then(data => {
                    if (data.modifiedCount > 0) {
                         refetch()
                         toast.success('collected successfully.')
                    }
               })

     }

     if (isLoading) {
          return (<div className='mt-3 flex justify-center'><Loading></Loading></div>)
     }

     return (
          <div className=' p-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
               {
                    registrationList?.map(register => <div key={register._id} className='p-3 bg-white shadow border'>
                         <div className='flex gap-2 relative'>
                              {/* <img className='w-32 h-36 object-cover' src={register?.image} alt="" /> */}
                              <div className='text-sm'>
                                   <p>Name: {register?.name}</p>
                                   <p>Tk: {register?.taka}</p>
                                   <p>Phone: {register?.phone}</p>
                                   <p>transactionID: {register?.transactionID}</p>
                                   <p>Department: {register?.department}</p>

                              </div>
                              
                         </div>
                         <div className='flex justify-end items-center gap-3'>
                                   <div className='text-sm'><span >Souvenir collection: </span><button onClick={() => handleCollected(register._id)} className='bg-pink-600 px-3 py-1 text-white rounded-md'>Remaining</button></div>
                                   <div className='text-sm'><span >Email sending: </span><button  className='bg-pink-600 px-3 py-1 text-white rounded-md'>Remaining</button></div>
                              </div>


                    </div>)
               }
          </div>
     );
};

export default RegisrtrationList;