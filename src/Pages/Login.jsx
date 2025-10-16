
import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState('')
  const location = useLocation()
  console.log(location)
  const navigate = useNavigate()
  const {signIn} = use(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
  
    signIn(email,password)
    .then(result => {
    // Signed in 
    const user = result.user;
    console.log(user)
    navigate(`${location.state ? location.state : '/'}`)
  })
  .catch((error) => {
   const errorMessage = error.message;
    setError(errorMessage)
  });

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
          <input type="email" name="email" className="input" placeholder="Email" required/>
          <label className="label">Password</label>
          <input type="password" className="input" name="password" placeholder="Password" required/>
          <div><a className="link link-hover">Forgot password?</a></div>

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