import React from "react";
import gLogo from '../../icons/Group 573.png'
import auth from '../../firebase_init'
import { useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from "../../Shared/Loading";
import { toast } from 'react-toastify';
import useToken from "../../hoo/userToken";

const SocialLogin = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = useToken(user)

  let from = location.state?.from?.pathname || "/";
  if(loading){
    return <Loading />
  }
  if(error?.message){
    toast.error(error.code)
  }
  if(token){
    navigate(from)
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-5">
      <div className="card-body">
          <div className="form-control">
          {error?.message && <label className='text-error'>{error.message}</label>}
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
