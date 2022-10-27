import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '~/lib/firebase';

const SignInMethods:React.FC = () => {
    const handleClick = () => {
    const provider = new GoogleAuthProvider();
    const auth = useAuth();
    // @see https://firebase.google.com/docs/auth/web/google-signin
    auth.languageCode = 'ja';

    signInWithRedirect(auth, provider);
  };
  return (
    <div className='d-flex items-center justify-center text-center'>
         <button onClick={handleClick} type="button" className="btn btn-primary normal-case min-w-60 mb-6">
      Sign In With Google
    </button>
    <br />
    <button  className="btn btn-dark normal-case min-w-60 mb-6">Sign In With Email and PassWord</button> 
    <br />
    <button className='btn btn-success normal-case min-w-60 mb-7'>Sign In With Github</button>
    </div>
  )
}

export default SignInMethods