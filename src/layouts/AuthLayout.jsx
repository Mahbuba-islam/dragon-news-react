import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const AuthLayout = () => {
    return (
        <div>
            <div className="py-8 bg-base-200 pr-15">
             <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;