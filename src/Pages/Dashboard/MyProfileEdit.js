import React from "react";
import auth from "../../firebase_init";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const MyProfileEdit = () => {
  const [user, loading, error] = useAuthState(auth);
  const img_key = "893909661bf063b7b6747914cb9d81f0";
  const [updateProfile, updating] = useUpdateProfile(auth);

  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const img = data.img[0];

    const formData = new FormData();
    formData.append("image", img);
    fetch(`https://api.imgbb.com/1/upload?key=${img_key}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then(async (result) => {
        const imgUrl = result.data.url;
        data.img = imgUrl;
        data.email = user.email;
        await updateProfile({ displayName: data.name });
        await fetch(`http://localhost:5000/profileEdit/${user.email}`, {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            toast.success("Your Profile is updated.");
            reset();
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section className=" mx-5 my-5 min-h-[calc(100vh-80px)]">
      <Helmet>
        <title>Dashboard - Profile Edit</title>
      </Helmet>

      <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl text-center font-bold">
            You can edit your profile.
          </h1>
          <div className="form-control sm:w-8/12 lg:w-11/12">
            <label className="label" htmlFor="name">
              <span className="label-text font-medium">
                Your Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="your name"
              className="input input-bordered"
              required
              {...register("name")}
            />
          </div>
          <div className="form-control mt-2 sm:w-8/12 lg:w-11/12">
            <label className="label" htmlFor="img">
              <span className="label-text font-medium">
                Profile Picture <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="file"
              id="img"
              className="text-sm text-grey-500
                file:mr-5 file:py-3 file:px-10
                file:rounded-full file:border-0
                file:text-md file:font-semibold  file:text-white
                file:bg-gradient-to-r file:from-blue-600 file:to-amber-600
                hover:file:cursor-pointer hover:file:opacity-80
              "
              required
              {...register("img")}
            />
          </div>
          <div className="form-control sm:w-8/12 lg:w-11/12">
            <label className="label" htmlFor="title">
              <span className="label-text font-medium">
                Title <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              id="title"
              placeholder="title"
              className="input input-bordered"
              required
              {...register("title")}
            />
          </div>
          <div className="form-control sm:w-8/12 lg:w-11/12">
            <label className="label" htmlFor="description">
              <span className="label-text font-medium">
                Description <span className="text-red-500">*</span>
              </span>
            </label>
            <textarea
              type="text"
              id="description"
              placeholder="abc abd..."
              className="input input-bordered h-20"
              required
              {...register("description", {
                minLength: {
                  value: 50,
                  message: 'Description length will be minium 50 words.' 
                }
              })}
            />
            {errors.description?.type === 'minLength' && <p className='text-red-500'>{errors.description.message}</p>}
          </div>

          <div className="lg:flex">
            <div className="lg:w-6/12">
              <div className="form-control sm:w-8/12 lg:w-full lg:max-w-sm">
                <label className="label" htmlFor="birthday">
                  <span className="label-text font-medium">
                    Birthday <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="date"
                  id="birthday"
                  placeholder="01-Jan-2000"
                  className="input input-bordered"
                  required
                  {...register("birthday")}
                />
              </div>
              <div className="form-control sm:w-8/12 lg:w-full lg:max-w-sm">
                <label className="label" htmlFor="age">
                  <span className="label-text font-medium">
                    Age <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="number"
                  id="age"
                  placeholder="25 Yr"
                  className="input input-bordered"
                  required
                  {...register("age")}
                />
              </div>
              <div className="form-control sm:w-8/12 lg:w-full lg:max-w-sm">
                <label className="label" htmlFor="residence">
                  <span className="label-text font-medium">
                    Residence <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  id="residence"
                  placeholder="America"
                  className="input input-bordered"
                  required
                  {...register("residence")}
                />
              </div>
              <div className="form-control sm:w-8/12 lg:w-full lg:max-w-sm">
                <label className="label" htmlFor="address">
                  <span className="label-text font-medium">
                    Address <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Washing Ton"
                  className="input input-bordered"
                  required
                  {...register("address")}
                />
              </div>
            </div>
            <div className="lg:w-6/12">
              <div className="form-control sm:w-8/12 lg:w-full lg:max-w-sm">
                <label className="label" htmlFor="email">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="jon@gmail.com"
                  className="input input-bordered"
                  value={user?.email}
                  disabled
                  {...register("email")}
                />
              </div>
              <div className="form-control sm:w-8/12 lg:w-full lg:max-w-sm">
                <label className="label" htmlFor="phone">
                  <span className="label-text font-medium">
                    Phone <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="number"
                  id="phone"
                  placeholder="+1464316748"
                  className="input input-bordered"
                  required
                  {...register("phone")}
                />
              </div>
              <div className="form-control sm:w-8/12 lg:w-full lg:max-w-sm">
                <label className="label" htmlFor="github">
                  <span className="label-text font-medium">
                    Github <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="url"
                  id="github"
                  placeholder="https://github.com/"
                  className="input input-bordered"
                  required
                  {...register("github")}
                />
              </div>
              <div className="form-control sm:w-8/12 lg:w-full lg:max-w-sm">
                <label className="label" htmlFor="portfolio">
                  <span className="label-text font-medium">
                    Portfolio <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="url"
                  id="portfolio"
                  placeholder="https://gleaming-madeleine-230e9a.netlify.app/"
                  className="input input-bordered"
                  required
                  {...register("portfolio")}
                />
              </div>
            </div>
          </div>

          <div className="lg:flex">
            <div className="lg:w-6/12">
              <div className="form-control sm:w-8/12 lg:w-full lg:max-w-sm">
                <label className="label" htmlFor="happyClients">
                  <span className="label-text font-medium">
                    How much Happy Clients
                  </span>
                </label>
                <input
                  type="number"
                  id="happyClients"
                  placeholder="500"
                  className="input input-bordered"
                  {...register("happyClients")}
                />
              </div>
            </div>
            <div className='lg:w-6/12'>
              <div className="form-control sm:w-8/12 lg:w-full lg:max-w-sm">
                <label className="label" htmlFor="projectCompleted">
                  <span className="label-text font-medium">
                    How much Project Completed
                  </span>
                </label>
                <input
                  type="number"
                  id="projectCompleted"
                  placeholder="200"
                  className="input input-bordered"
                  {...register("projectCompleted")}
                />
              </div>
            </div>
          </div>

          <div className="form-control mt-6 w-52">
            <input
              className="btn btn-primary"
              type="submit"
              value="Update Profile"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default MyProfileEdit;
