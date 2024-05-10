import { createBrowserRouter } from "react-router-dom";
import Root from "../Componants/Root/Root";
import Home from "../Componants/Home/Home";
import Services from "../Componants/Pages/Services";
import AddService from "../Componants/Pages/AddService";
import ManageService from "../Componants/Pages/ManageService";
import BookedService from "../Componants/Pages/BookedService";
import ServiceToDo from "../Componants/Pages/ServiceToDo";
import Login from "../Componants/Login";
import Register from "../Componants/Register";
import PrivateRoute from "../Componants/Private/PrivateRoute";
import NotFound from "../Componants/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: '*',
        element: <NotFound></NotFound>
    },
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
                path: '/addService',
                element: <AddService></AddService>
            },
            {
                path: '/manage',
                element: <PrivateRoute><ManageService></ManageService></PrivateRoute>
            },
            {
                path: '/booked',
                element: <PrivateRoute><BookedService></BookedService></PrivateRoute>
            },
            {
                path: '/serviceToDo',
                element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;