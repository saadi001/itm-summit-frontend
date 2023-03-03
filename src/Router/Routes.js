import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../Layout/Dashboard/AllUsers";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import RegisrtrationList from "../Layout/Dashboard/RegisrtrationList";
import RegistrationTable from "../Layout/Dashboard/RegistrationTable/RegistrationTable";
import Competition from "../Pages/Competition/Competition";
import Confirmation from "../Pages/Confirmation/Confirmation";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

export const router = createBrowserRouter([
     {
          path:'/',
          element: <Home></Home>
     },
     {
          path: '/registration',
          element: <Registration></Registration>
     },
     {
          path: '/login',
          element: <Login></Login>
     },
     {
          path: '/confirmation',
          element: <Confirmation></Confirmation>
     },
     {
          path: '/competition',
          element: <Competition></Competition>
     },
     {
          path: '/dashboard',
          element: <DashboardLayout></DashboardLayout>,
          children: [
               {
                    path: '/dashboard',
                    element:  <RegistrationTable></RegistrationTable>
                    
               },
               {
                    path: '/dashboard/registrationList',
                    element: <RegisrtrationList></RegisrtrationList>
               }
          ]          
     }
])