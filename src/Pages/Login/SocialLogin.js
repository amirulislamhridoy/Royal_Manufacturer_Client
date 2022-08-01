import React from "react";
import gLogo from '../../icons/Group 573.png'
import auth from '../../firebase_init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-5">
      <div className="card-body">
          <div className="form-control">
            <button onClick={() => signInWithGoogle()} className="btn btn-ghost border-2 rounded-3xl border-gray-200">
                <img className='w-8' src={gLogo} alt='Google' />
                <span className='flex-1'>Sign In with Google</span>
            </button>
          </div>
      </div>
    </div>
  );
};

export default SocialLogin;
