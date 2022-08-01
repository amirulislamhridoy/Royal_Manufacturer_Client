import React from "react";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="flex justify-center flex-col items-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              id="name"
              className="input input-bordered"
              {...register('name', {required: true})}
            />
            <label className='label text-error'>{errors.name?.type === 'required' && "Name is required"}</label>
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              placeholder="jon@gmail.com"
              id='email'
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
            <label className="label text-error">
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
                required: {value: true, message: 'Password is required.'},
                minLength: {
                  value: 6,
                  message: 'You password must be 6 length.'
                }
              })}
            />
            <label className='label text-error'>
              {errors.password?.type === 'required' && errors.password.message}
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
