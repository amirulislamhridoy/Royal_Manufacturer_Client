import React, { useEffect, useState } from "react";
import SocialLogin from "./SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../firebase_init'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading";
import { Helmet } from "react-helmet";
import { toast } from 'react-toastify';
import useToken from "../../hook/userToken";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user)
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );

  let from = location.state?.from?.pathname || "/";
  useEffect( () => {
    if(token){
      navigate(from)
    }
  }, [from , navigate, token])
  
  if(loading){
    return <Loading />
  }
  if(error?.message){
    toast.error(error.code)
  }
  function formSubmit(e){
    e.preventDefault()
    const password = e.target.password.value
    signInWithEmailAndPassword(email, password)
  }
  async function forgotPasswordFn(){
    const validation = /\S+@\S+\.\S+/.test(email)
    if(!validation){
      return toast.error('Please type valid email address.')
    }
    await sendPasswordResetEmail(email)
    toast.success('Send password reset email.')
  }
  
  return (
    <section className="flex justify-center flex-col items-center min-h-screen">
      <Helmet><title>Login</title></Helmet>
      <div className="card w-96 bg-base-100 shadow-xl">
        <form className="card-body" onSubmit={formSubmit}>
          <h1 className='text-center text-2xl font-bold'>Login</h1>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              placeholder="jon@gmail.com"
              type='email'
              id="email"
              className="input input-bordered"
              onBlur={e=> setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="input input-bordered"
              name='password'
            />
            <label className="label">
              <a href="#" onClick={forgotPasswordFn} className="label-text-alt link link-hover" alt=''>
                Forgot password?
              </a>
            </label>
            <label className="label">
              <Link to="/register" className="label-text-alt link link-hover">
                Create a new account?
              </Link>
            </label>
          </div>
          {error?.message && <label className='text-error'>{error.message}</label>}
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-3xl">Login</button>
          </div>
        </form>
      </div>

      <SocialLogin />
    </section>
  );
};

export default Login;
