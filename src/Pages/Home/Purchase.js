import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading";
import auth from "../../firebase_init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import axios from "axios";
import { toast } from "react-toastify";

const Purchase = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantityE, setQuantityE] = useState();
  const [user, loading, uError] = useAuthState(auth);

  const {
    isLoading,
    error,
    data: tools,
  } = useQuery(["tools"], () =>
    fetch(`http://localhost:5000/tools/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }).then((res) => {
      if(res?.status === 403 || res?.status === 401){
        toast.error(res.statusText)
        localStorage.removeItem('accessToken')
        signOut(auth)
        navigate('/login')
      }
       return res.json()
    })
  );
  
  if (isLoading) {
    return <Loading />;
  }
  const { img, name, description, minium, available, price, _id } = tools;

  const submitFrom = (e) => {
    e.preventDefault();
    const quantity = e.target.quantity.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    if (+minium > parseInt(quantity)) {
      return setQuantityE("Your can booking minium " + minium + ".");
    } else if (+available < +quantity) {
      return setQuantityE(`Your can booking highest  ${available}.`);
    }
    setQuantityE("");

    const booking = {
      name: user?.displayName,
      email: user?.email,
      quantity,
      phone,
      address,
      toolsName:name,
      price,
      toolsId: _id
    };
    axios
      .post("http://localhost:5000/booking", booking, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then(function (response) {
        if(response?.data?.insertedId){
          toast(<p>You are booked <span className='text-primary'>{name}</span> is <span className='text-primary'>{quantity}</span> pieces.</p>)
          e.target.reset();
        }
      })
      .catch(function (error) {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          toast.error(error?.response?.data?.message);
          localStorage.removeItem("accessToken");
          signOut(auth);
          navigate("/login");
        }
      });
  };

  return (
    <main>
      <Header />
      <Helmet>
        <title>Purchase</title>
      </Helmet>

      <div className="lg:flex items-center min-h-[calc(100vh-80px)] lg:mt-0 mt-3">
        <div className="card w-96 bg-base-100 shadow-2xl mx-auto">
          <div className="card-body">
            <img src={img} className="rounded-xl" alt="Tools img" />
            <h2 className="card-title">{name}</h2>

            <p className="text-justify">{description}</p>

            <p>Minium Order: {minium}</p>
            <p>Available Tools: {available}</p>
            <h3 className="text-2xl font-semibold">Price: ${price}</h3>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl mx-auto lg:mt-0 mt-4">
          <form className="card-body" onSubmit={submitFrom}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                value={user?.displayName}
                disabled
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                value={user?.displayName}
                disabled
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="quantity">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                id="quantity"
                placeholder="Type quantity of tools"
                className="input input-bordered"
                defaultValue={minium}
                required
              />
              <label className=" text-error">{quantityE && quantityE}</label>
            </div>
            <div className="form-control">
              <label className="label" htmlFor="phone">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="address">
                <span className="label-text">Address</span>
              </label>
              <textarea
                type="text"
                id="address"
                name="address"
                placeholder="New York, America"
                className="input input-bordered h-20"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary rounded-3xl">Booking</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Purchase;
