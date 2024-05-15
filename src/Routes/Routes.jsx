import { createBrowserRouter } from "react-router-dom";
import Root from "../Componants/Root/Root";
import Home from "../Componants/Home/Home";
import AddService from "../Componants/Pages/AddService";
import BookedService from "../Componants/Pages/BookedService/BookedService";
import ServiceToDo from "../Componants/Pages/ServiceToDo";
import Login from "../Componants/Login";
import Register from "../Componants/Register";
import PrivateRoute from "../Componants/Private/PrivateRoute";
import NotFound from "../Componants/NotFound/NotFound";
import AllService from "../Componants/Pages/AllServices/AllService";
import ViewDetails from "../Componants/Home/ViewDtails/ViewDetails";
import Update from "../Componants/Pages/Manges/Update";
import Purchase from "../Componants/Purchase/Purchase";
import ContactUs from "../Componants/Pages/Contuct/ContactUs";
import ManageService from "../Componants/Pages/Manges/ManageService";
import { treatmentsLoader } from "../Componants/Home/loader";
import { DetailsLoader } from "../Componants/Home/ViewDtails/DetailsLoader";

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
                path: "/",
                element: <Home />,
                loader: () => fetch('https://assignment-eleven-server-taupe.vercel.app/service'),
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
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
            },
            {
                path: '/allServices',
                element: <AllService></AllService>,
                // loader: treatmentsLoader,
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-eleven-server-taupe.vercel.app/service/${params.id}`)
            },
            {
                path: '/purchase/:id',
                element: <Purchase></Purchase>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-eleven-server-taupe.vercel.app/service/${params.id}`)
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            }
        ]
    },
]);

export default router;