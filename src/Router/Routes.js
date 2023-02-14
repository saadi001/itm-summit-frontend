import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
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
     }
])