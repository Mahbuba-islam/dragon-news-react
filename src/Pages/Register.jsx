import { Link, useNavigate } from "react-router-dom";
import { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { sendEmailVerification } from "firebase/auth";
import { toast } from "react-toastify";
// import { useState } from "react";
const Register = () => {
  const [nameError, setNameError] = useState('')
  const navigate = useNavigate()
  const {createUser, setUser, updateUserProfile} = use(AuthContext)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

    const handleSubmit = (e) => {
       e.preventDefault()
    // console.log(e.target.name.value)
    const name = e.target.name.value 
    if(name.length<5){
      setNameError('name should be more than 5 character')
      return
    }
    else{
  
      setNameError('')

    }
    const email = e.target.email.value
    const password = e.target.password.value
    const phoneNumber = e.target.phoneNumber.value
    const photo = e.target.photo.value
    //  empty value 
    e.target.email.value = ''
    e.target.password.value=''
    e.target.phoneNumber.value=''
    e.target.photo.value=''
    e.target.name.value = ''

    // create user
    createUser(email,password)
    .then(result => {
      const user = result.user
      updateUserProfile({displayName : name, photoURL:photo, phoneNumber})
      .then(()=> {
      sendEmailVerification(result.user)
       .then(() => {
    toast.success("Verification email sent! Please check your inbox.");
   setUser({...user, displayName, photoURL})
    // ...
  });

      })
      .catch((error)=> {
      setError(error)
      setUser(user)
    })
       setTimeout(()=> {
        navigate('/')
       },4000)
     
    })
    .catch((error)=> {
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
    <div className="card bg-base-100 w-[420px] shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="fieldset" onSubmit={handleSubmit}>
          <label className="label">Name</label>
          <input type="name" class="input" placeholder="name" name="name" required/>
          <label className="label">PhotoUrl</label>
          <input type="img" class="input" placeholder="photoUrl" name="photo" />
          <label className="label">Phone Number</label>
          <input type="number" class="input" placeholder="phone number" name="phoneNumber" required/>
          <label classNmae="label">Email</label>
          <input type="email" class="input" placeholder="Email" name="email"/>
          <label className="label">Password</label>
          <input type="password" class="input" placeholder="Password" name="password" required/>
          <div><a className="link link-hover">Forgot password?</a></div>
           
           {
            nameError && <p className="text-red-600 text-xs">{nameError}</p>
           }
          <button type="submit" className="btn btn-neutral mt-4">Register</button>
        </form>
        {
          error &&  <p className="text-red-700">{error}</p>
        }
         
          {
            success && <p>user has successfully created</p>
          }
      </div>
      <div className="ml-8 mb-4">
         <p>Already have an account? </p>
      <span className="text-blue-600 underline"><Link to='/auth/login'>login</Link></span>
      </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;