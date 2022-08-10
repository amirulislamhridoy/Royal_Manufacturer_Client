import React from "react";
import { Helmet } from "react-helmet";
import { Outlet, useNavigate } from "react-router-dom";
import boyCutton from "../../photos/boyCutton.jpg";
import { useQuery } from "@tanstack/react-query";
import auth from "../../firebase_init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading";

const MyProfile = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const { isLoading, error, data } = useQuery(["repoData"], () =>
    fetch(`http://localhost:5000/profile/${user?.email}`).then((res) =>
      res.json()
    )
  );
  console.log(data);
  if (loading || isLoading) {
    return <Loading />;
  }

  return (
    <section className="mt-20 mx-10">
      <Helmet>
        <title>Dashboard - My Profile</title>
      </Helmet>

      <div>
        <div className="md:flex items-center relative">
          <button
            onClick={() => navigate("/dashboard/myProfileEdit")}
            className="btn btn-ghost btn-sm border-gray-200 border-2 absolute top-0 right-0"
          >
            Edit
          </button>
          <aside className="mx-auto">
            <img
              className="max-w-[300px] max-h-[400px] mx-auto rounded"
              src={data?.img ? data.img : boyCutton}
              alt=""
            />
          </aside>
          <aside className="md:w-6/12">
            <h1 className="text-3xl font-bold">About Me</h1>
            <h2 className="text-2xl font-medium">{data?.name}</h2>
            <h3 className="text-xl text-primary">{data?.title}</h3>
            <article className="mb-5">{data?.description}</article>

            <div className="md:flex">
              <div className="w-6/12">
                <div className="my-1">
                  <b>Birthday : </b>
                  <i className="text-secondary"> {data?.birthday}</i>
                </div>
                <div className="my-1">
                  <b>Age : </b>
                  <i className="text-secondary">{data?.age} Yr</i>
                </div>
                <div className="my-1">
                  <b>Residence : </b>
                  <i className="text-secondary"> {data?.residence}</i>
                </div>
                <div className="my-1">
                  <b>Address : </b>
                  <i className="text-secondary"> {data?.address}</i>
                </div>
              </div>
              <div>
                <div className="my-1">
                  <b>Email : </b>
                  <i className="text-secondary"> {user?.email}</i>
                </div>
                <div className="my-1">
                  <b>Phone : </b>
                  <i className="text-secondary"> {data?.phone}</i>
                </div>
                <div className="my-1">
                  <b>Github : </b>
                  <a
                    className="text-blue-300"
                    href={data?.github}
                    target="_blank"
                  >
                    {" "}
                    Github
                  </a>
                </div>
                <div className="my-1">
                  <b>Portfolio : </b>
                  <a
                    className="text-blue-300"
                    href={data?.portfolio}
                    target="_blank"
                  >
                    {" "}
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div class="card bg-base-100 shadow-xl mt-10">
          <div class="card-body">
            <div className="sm:flex justify-around">
              <div className="flex flex-col items-center">
                <h2 className="text-3xl font-semibold">{data?.happyClients ? data.happyClients : "0"}</h2>
                <p>Happy Clients</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-3xl font-semibold">
                  {data?.projectCompleted ? data.projectCompleted : '0'}
                </h2>
                <p>Project Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet></Outlet>
    </section>
  );
};

export default MyProfile;
