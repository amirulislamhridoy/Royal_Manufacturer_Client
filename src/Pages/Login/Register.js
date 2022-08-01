import React from "react";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from '../../firebase_init'
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { updateProfile } from "firebase/auth";
import Loading from "../../Shared/Loading";
import { Helmet } from "react-helmet";

const Register = () => {
  const location = useLocation()
  const navigate = useNavigate()
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const {register,formState: { errors },handleSubmit,} = useForm();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({displayName: data.name})
  };

  let from = location.state?.from?.pathname || "/";
  if(loading){
    return <Loading />
  }
  if(user){
    navigate(from)
  }
  
  return (
    <section className="flex justify-center flex-col items-center min-h-screen">
      <Helmet><title>Sign Up</title></Helmet>
      <div className="card w-96 bg-base-100 shadow-xl">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-center text-2xl font-bold">Sign Up</h1>
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              id="name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            <label className=" text-error">
              {errors.name?.type === "required" && "Name is required"}
            </label>
          </div>
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
            <label className=" text-error">
              {errors.password?.type === "required" && errors.password.message}
              {errors.password?.type === "minLength" && errors.password.message}
            </label>
          </div>

          <label className="label">
            <Link to="/login" className="label-text-alt link link-hover">
              You have an account?
            </Link>
          </label>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-3xl">Sign Up</button>
          </div>
        </form>
      </div>

      <SocialLogin />
    </section>
  );
};

export default Register;
