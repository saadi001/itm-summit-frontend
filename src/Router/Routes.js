import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import Confirmation from "../Pages/Confirmation/Confirmation";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/Home/Home");

export const router = createBrowserRouter([
     {
          path:'/',
          element: <Home></Home>
     },
     {
          path: '/dashboard',
          element: <DashboardLayout></DashboardLayout>,
          children: ([
               {
                    path: '/dashboard',
                    element: <div></div>
               },
               {
                    path: '/dashboard/registration',
                    element: <Registration></Registration>
               }
          ])
     },
     {
          path: '/login',
          element: <Login></Login>
     },
     {
          path: '/confirmation',
          element: <Confirmation></Confirmation>
     }
])