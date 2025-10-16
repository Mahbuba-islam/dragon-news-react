import { Link, NavLink } from "react-router-dom";
import userIcon from '../../assets/demo-user.png'
import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = use(AuthContext)
    console.log(user?.photoURL
)

    const handleLogOut = () => {
   logOut()
   .then(() => {
  alert('Sign-out successful')
}).catch((error) => {
  alert(error.message)
});

    }
    return (
        <div className=" flex justify-between items-center gap-4 content-center">
         {user && user?.email}
         <div className="space-x-4 text-accent">
            <NavLink className={`btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent`}>Home</NavLink>
            <NavLink className={`btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent`}>About </NavLink>
            <NavLink className={`btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent`}>Career</NavLink>
         </div>
         <div className="flex items-center gap-5">
            {
                user ?  <img className="w-[40px] h-[40px] rounded-full " src={user?.photoURL} alt="" /> : <img src={userIcon} alt="" />
            }
           
            {
                user ?  <button onClick={handleLogOut} className="btn btn-primary px-8 py-1">LogOut</button> : 
                 <button className="btn btn-primary px-8 py-1"> <Link to='/auth/login'>Login</Link></button>
            }
           
            
        </div>   
        </div>
    );
};

export default Navbar;