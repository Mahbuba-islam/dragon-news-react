
import { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState('')
  const location = useLocation()
  const emailRef = useRef()
  // console.log(location)
  const navigate = useNavigate()
  const {signIn,setUser, auth} = use(AuthContext)
  // handle sign in
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
     form.email.value=''
     form.password.value=''
    signIn(email,password)
    .then(result => {
    if(!result.user.emailVerified)
      toast.info("Please verify your email to activate your account.");

    // Signed in 
    else{
     setUser(result.user)
    } 
    
    setTimeout(()=> {
     navigate(`${location.state ? location.state : '/'}`)
    },4000)
  
  })
  .catch((error) => {
   const errorMessage = error.message;
    setError(errorMessage)
  });

  }

  // handleForgetPassword
  const handleForgetPassword = () => {
   const email = emailRef.current.value
   sendPasswordResetEmail(auth, email)
   .then(() => {
   toast.success("Password reset email sent! Please check your inbox.");

   })
   .catch((error) => {
    console.log(error)
   })
  }
    return (
        <div>
          <div className="hero bg-base-200 min-h-screen pb-8">
  <div className="hero-content flex-col space-y-3">
    <div className="text-center lg:text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-[400px] shrink-0 shadow-2xl py-3">
      <div className="card-body">
        <form className="fieldset" onSubmit={handleLogin}>
          <label className="label">Email</label>
          <input type="email" ref={emailRef} name="email" className="input" placeholder="Email" required/>
          <label className="label">Password</label>
          <input type="password" className="input" name="password" placeholder="Password" required/>
          <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>

          {
            error && <p className="text-red-600 text-xs">{error}</p>
          }
          <button type="submit" className="btn btn-neutral mt-4 p-0 w-[322px]">Login</button>
        </form>
      </div>
       <div className="ml-6 mb-3">
         <p>Don't have an account? </p>
      <span className="text-blue-600 underline"><Link to='/auth/register'>Create account</Link></span>
      </div>
    </div>
     
     
    </div>
  </div>
</div>
       
    );
};

export default Login;