import React from "react";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../firebase_init'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading";

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
  const {register,formState: { errors },handleSubmit,} = useForm();

  let from = location.state?.from?.pathname || "/";
  if(loading){
    return <Loading />
  }
  if(user){
    navigate(from)
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password)
  };

  return (
    <section className="flex justify-center flex-col items-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h1 className='text-center text-2xl font-bold'>Login</h1>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              placeholder="jon@gmail.com"
              id="email"
              className="input input-bordered"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Email is invalid",
                },
              })}
            />
            <label className=" text-error">
              {errors.email?.type === "required" && errors.email.message}
              {errors.email?.type === "pattern" && errors.email.message}
            </label>
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
              {...register("password", {
                required: { value: true, message: "Password is required." },
                minLength: {
                  value: 6,
                  message: "You password must be 6 length.",
                },
              })}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <label className="label">
              <Link to="/register" className="label-text-alt link link-hover">
                Create a new account?
              </Link>
            </label>
            <label className=" text-error">
              {errors.password?.type === "required" && errors.password.message}
              {errors.password?.type === "minLength" && errors.password.message}
            </label>
          </div>
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
