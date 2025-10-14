import { Link } from "react-router-dom";
import {auth} from '../../src/components/Firebase/firebase.init'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
// import { useState } from "react";
const Register = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
    console.log(e.target.name.value)
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const phoneNumber = e.target.phoneNumber.value
    
    // create user
    setError('')
    setSuccess(false)
    createUserWithEmailAndPassword(auth, email,password, name)
    .then(result => {
      console.log(result)
      setSuccess(true)
    })
    .catch(error => {
       setError(error.message)
    })
    }

    return (
        <div>
          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col space-y-3">
    <div className="text-center lg:text-center">
      <h1 className="text-5xl font-bold">Create an Account</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="fieldset" onSubmit={handleSubmit}>
          <label className="label">Name</label>
          <input type="name" class="input" placeholder="name" name="name"/>
          <label className="label">Phone Number</label>
          <input type="number" class="input" placeholder="phone number" name="phoneNumber"/>
          <label classNmae="label">Email</label>
          <input type="email" class="input" placeholder="Email" name="email"/>
          <label className="label">Password</label>
          <input type="password" class="input" placeholder="Password" name="password" />
          <div><a className="link link-hover">Forgot password?</a></div>
        
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        {
          error &&  <p className="text-red-700">{error}</p>
        }
         
          {
            success && <p>user has successfully created</p>
          }
      </div>
      <div className="mx-auto mb-4">
         <p>Already have an account? </p>
      <span className="text-blue-600 underline"><Link to='/login'>login</Link></span>
      </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;