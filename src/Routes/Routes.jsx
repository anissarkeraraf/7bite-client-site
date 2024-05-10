import { createBrowserRouter } from "react-router-dom";
import Root from "../Componants/Root/Root";
import Home from "../Componants/Home/Home";
import Services from "../Componants/Pages/Services";
import AddService from "../Componants/Pages/AddService";
import ManageService from "../Componants/Pages/ManageService";
import BookedService from "../Componants/Pages/BookedService";
import ServiceToDo from "../Componants/Pages/ServiceToDo";
import Login from "../Componants/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/services',
            element: <Services></Services>
        },
        {
            path:'/addService',
            element: <AddService></AddService>
        },
        {
            path:'/manage',
            element: <ManageService></ManageService>
        },
        {
            path:'/booked',
            element: <BookedService></BookedService>
        },
        {
            path: '/serviceToDo',
            element: <ServiceToDo></ServiceToDo>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
      ]
    },
  ]);

  export default router;