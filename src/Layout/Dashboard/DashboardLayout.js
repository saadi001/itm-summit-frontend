import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import HeaderDashboard from '../../Components/HeaderDashboard/HeaderDashboard';

const DashboardLayout = () => {
     return (
          <div className='bg-gray-500/10 w-full min-h-screen'>
               <div className=''>
                    <div className='px-3 bg-white'><HeaderDashboard></HeaderDashboard></div>
                    <div className="drawer drawer-mobile">
                         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                         <div className="drawer-content ">
                              {/* <!-- Page content here --> */}
                              <Outlet></Outlet>
                              <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                         </div>
                         <div className="drawer-side">
                              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                              <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                                   {/* <!-- Sidebar content here --> */}
                                   <li><Link to={'/dashboard'}>Registration table</Link></li>
                                   <li><Link to={'/dashboard/registrationList'}>Registration List</Link></li>
                              </ul>

                         </div>
                    </div>
                    
               </div>
          </div>
     );
};

export default DashboardLayout;
