import { Link, NavLink } from "react-router-dom";
import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
    const {user, logOut} = use(AuthContext)
//     console.log(user?.photoURL
// )

    const handleLogOut = () => {
   logOut()
   .then(() => {
  toast.success("You've signed out successfully. See you soon!");

}).catch((error) => {
  alert(error.message)
});

    }
    return (
       <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 py-2">
  {/* Navigation Links */}
  <div className="space-x-4 text-accent md:mx-auto flex justify-center">
    <NavLink to='/' className="btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent">Home</NavLink>
    <NavLink to='/about' className="btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent">About</NavLink>
    <NavLink to='/Career' className="btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent">Career</NavLink>
  </div>

  {/* User Info + Auth Buttons */}
  <div className="flex items-center gap-5 mt-4 md:mt-0">
    {user && (
      <div className="w-10 h-10 rounded-full border-2 border-pink-500 bg-secondary text-white font-bold flex justify-center items-center text-lg">
        {user?.displayName.slice(0, 1).toUpperCase()}
      </div>
    )}
    {user ? (
      <button onClick={handleLogOut} className="btn btn-primary px-8 py-1">LogOut</button>
    ) : (
      <Link to="/auth/login">
        <button className="btn btn-primary px-8 py-1">Login</button>
      </Link>
    )}
  </div>
</div>
    );
};

export default Navbar;