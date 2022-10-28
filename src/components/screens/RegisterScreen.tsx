import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'



const RegisterScreen:React.FC = () => {
const auth = getAuth()
  const handleRegister = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    console.log(name, email, password)
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
        const user = result.user
        console.log(user)
        form.reset()
        verifyEmail()
        updateUserName(name)
    })
    .catch(error => {
        console.error(error)
        alert(error.message)
    })
  }

const verifyEmail = () =>  {
    sendEmailVerification(auth.currentUser)
    .then(() => {
        alert('Please Check Your Email and verify')
    })
}
 const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
        displayName: name
    })
    .then(() => {
        alert('display name updated')
    })
    .catch(error => {
        console.error(error)
    })
 }
  return (
   <div className="hero min-h-screen bg-base-200">
      <form onSubmit={handleRegister} className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-160 shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
           
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-dark">Register</button>
            </div>
            <p>Already have an account.Please <Link className='link' to='/login'>Login</Link></p>
          </div>
        </div>
      </form>
     
    </div>
    
  )
}

export default RegisterScreen