const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/Home/Home");

export const router = createBrowserRouter([
     {
          path:'/',
          element: <Home></Home>
     }
])