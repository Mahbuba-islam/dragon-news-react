import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { use } from "react";

const SocialLogin = () => {
     const {googleSignIn,setUser, githubSignIn } = use(AuthContext)
    const handleGoogleSignIn = () => {
        googleSignIn()
         .then(result => {
    // Signed in 
    setUser(result.user)
    // console.log(user)
   
  })
  .catch((error) => {
   const errorMessage = error.message;
   console.log(errorMessage)
  });

    }
   
    // github signin
    const handleGitHubSignIn = () => {
        githubSignIn()
     .then((result) => {
      setUser(result.user)
    })
    .catch((error) => {
    // Handle Errors here.
    const errorMessage = error.message;
    console.log(errorMessage)
})
}
    return (
        <div>
            <h2 className="font-bold mb-5 text-xl mt-4">Login with</h2>
            <div className="space-y-5 grid grid-cols-1">
                <button onClick={handleGoogleSignIn} className="btn"> <FcGoogle size={22} /> Login with google</button>
                <button onClick={handleGitHubSignIn} className="btn"> <FaGithub size={22}  /> Login with github</button>
            </div>
            <div>
               
                 <h2 className="font-semibold mb-5 text-lg mt-10">Find Us On</h2>
                 <div className="space-y-5 flex flex-col justify-center">
                <button className="btn flex items-center gap-2"> <FaFacebook size={22} className="bg-blue-500 p-1 text-white px-1 py-1  rounded-full w-[25px] h-[25px]"/> Facebook</button>
                <button className="btn flex items-center gap-2"> <FaTwitter  size={25} className="bg-blue-500 p-1 rounded-full w-[25px] h-[25px] text-white"/>Twitter <div className="mx-2"></div></button>
                <button className="btn flex items-center gap-2"> <FaInstagramSquare size={22} className=" bg-gradient-to-r from-[#D82D7E] to-[#FBA756]  font-bold text-xl px-1 py-1  rounded-full w-[25px] h-[25px]"/>Instagram</button>
            </div>
            </div>
        </div>
    );
};

export default SocialLogin;