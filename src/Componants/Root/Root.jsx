import { Outlet } from "react-router-dom";
import NavBer from "../SharedPages/NavBer";
import Footer from "../SharedPages/Footer";

const Root = () => {
    return (
        <div>
             <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;