import { NavLink } from "react-router-dom";
import user from '../../assets/demo-user.png'

const Navbar = () => {
    
    return (
        <div className=" flex justify-between items-center gap-4 content-center">
         <div></div>
         <div className="space-x-4 text-accent">
            <NavLink className={`btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent`}>Home</NavLink>
            <NavLink className={`btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent`}>About </NavLink>
            <NavLink className={`btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent`}>Career</NavLink>
         </div>
         <div className="flex items-center gap-5">
            <img src={user} alt="" />
            <button className="btn btn-primary px-8 py-1">Login</button>
            
        </div>   
        </div>
    );
};

export default Navbar;