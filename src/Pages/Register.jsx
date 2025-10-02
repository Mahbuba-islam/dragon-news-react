import { Link } from "react-router-dom";

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    console.log(e.target.name.value)
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
          <input type="number" class="input" placeholder="phone number" name="email"/>
          <label classNmae="label">Email</label>
          <input type="email" class="input" placeholder="Email" name="name"/>
          <label className="label">Password</label>
          <input type="password" class="input" placeholder="Password" name="password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
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