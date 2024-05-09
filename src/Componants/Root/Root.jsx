import { Outlet } from "react-router-dom";
import NavBer from "../SharedPages/NavBer";

const Root = () => {
    return (
        <div>
             <NavBer></NavBer>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;