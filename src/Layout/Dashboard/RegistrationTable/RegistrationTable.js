import React from 'react';
import { useQuery } from 'react-query';
import Excelexport from '../../../Hooks/Excelexport';

const RegistrationTable = () => {
     const { data: registrationList=[], } = useQuery({
          queryKey: ['registrationList'],
          queryFn: async () => {
               const res = await fetch('https://itmsummitbackend.vercel.app/registration')
               const data = await res.json()
               console.log(data);
               return data;
          }
     })
     return (
          <div className=''>
               <div><Excelexport excelData={registrationList} fileName={'Registration list'}></Excelexport></div>
               {
                    <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                      {/* head */}
                      <thead>
                        <tr>
                          <th></th>
                          <th>Name</th>
                          <th>email</th>
                          <th>ID</th>
                          <th>Taka</th>
                          <th>Department</th>
                          <th>phone</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        {
                         registrationList?.map((r,i)=> <tr>
                         <th>{i+1}</th>
                         <td>{r.name}</td>
                         <td>{r.email}</td>
                         <td>{r.id}</td>
                         <td>{r.taka}</td>
                         <td>{r.department}</td>
                         <td>{r.phone}</td>
                       </tr>)
                        }
                        
                      </tbody>
                    </table>
                  </div>
               }
          </div>
     );
};

export default RegistrationTable;