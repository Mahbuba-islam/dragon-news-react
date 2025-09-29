import { NavLink } from "react-router-dom";
import user from '../../assets/demo-user.png'

const Navbar = () => {
    return (
        <div className=" flex justify-between items-center gap-4 content-center">
         <div></div>
         <div className="space-x-4 text-accent">
            <NavLink>Home</NavLink>
            <NavLink>About </NavLink>
            <NavLink>Career</NavLink>
         </div>
         <div className="flex items-center gap-5">
            <img src={user} alt="" />
            <button className="btn btn-primary px-8 py-1">Login</button>
        </div>   
        </div>
    );
};

export default Navbar;