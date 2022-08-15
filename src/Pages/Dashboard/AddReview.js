import React from "react";
import {useNavigate} from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase_init";
import axiosPrivate from '../../Shared/axiosPrivate'
import { signOut } from "firebase/auth";

const AddAReview = () => {
  const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    const email = user.email
    data.email = email
    data.name = user.displayName
    
    axiosPrivate.post(`http://localhost:5000/addReview?email=${email}`, data)
    .then(function (response) {
      console.log(response);
      toast.success('Your review is success.')
      reset()
    })
    .catch(function (error) {
      console.log(error)
      if(error?.response?.status){
        signOut(auth);
        localStorage.removeItem("accessToken")
        toast.error(error?.response?.data?.message)
        navigate('/login')
      }
    });
    
  };
  return (
    <section className='flex justify-center mt-5 md:mt-20'>
      <Helmet>
        <title>Dashboard - Add Review</title>
      </Helmet>

      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label" htmlFor='company'>
              <span className="label-text font-semibold">Your Company Name <b className='text-red-500'>*</b></span>
            </label>
            <input
              type="text"
              id='company'
              placeholder="Manpol"
              className="input input-bordered"
              {...register("company")}
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor='designation'>
              <span className="label-text font-semibold">Designation</span>
            </label>
            <input
              type="text"
              id='designation'
              placeholder="CEO"
              className="input input-bordered"
              {...register("designation")}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor='description'>
              <span className="label-text font-semibold">Description <b className='text-red-500'>*</b></span>
            </label>
            <textarea
              type="text"
              id='description'
              placeholder="abc abd..."
              className="input input-bordered h-20"
              {...register("description")}
              required
            />
          </div>
          <div className="form-control" htmlFor='ratings'>
            <label className="label">
              <span className="label-text font-semibold">Ratings</span>
            </label>
            <select id='ratings' defaultValue='0' {...register("ratings")}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Review</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddAReview;
