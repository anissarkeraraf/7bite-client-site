import { createBrowserRouter } from "react-router-dom";
import Root from "../Componants/Root/Root";
import Home from "../Componants/Home/Home";
import Services from "../Componants/Pages/Services";

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
        }
      ]
    },
  ]);

  export default router;