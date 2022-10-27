import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '~/lib/firebase';

const LoginScreen: React.FC = () => {
    const handleClick = () => {
    const provider = new GoogleAuthProvider();
    const auth = useAuth();
    // @see https://firebase.google.com/docs/auth/web/google-signin
    auth.languageCode = 'ja';

    signInWithRedirect(auth, provider);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-160 shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-6">
              <Link to='/register' className="btn btn-dark">Register</Link>
            </div>
           <div className='text-center'>
         <button onClick={handleClick} type="button" className="btn btn-primary normal-case min-w-60 mb-6 mt-3">
      Sign In With Google
    </button>
    <br />
    
    <button className='btn btn-success normal-case min-w-60 mb-7'>Sign In With Github</button>
           </div>
          </div>
        </div>
      </div>
     
    </div>
    
  );
};

export default LoginScreen;
