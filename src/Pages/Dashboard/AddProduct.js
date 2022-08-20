import React from "react";
import axiosPrivate from '../../Shared/axiosPrivate'
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const AddProduct = () => {
    const api_key = '893909661bf063b7b6747914cb9d81f0'
  const formSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const img = e.target.img.files[0];
    const description = e.target.description.value;
    const minium = e.target.minium.value;
    const available = e.target.available.value;
    const price = e.target.price.value;

    const formData = new FormData();
    formData.append('username', 'abc123');
    formData.append("image", img);
    fetch(`https://api.imgbb.com/1/upload?key=${api_key}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if(result.success){
            const imgUrl = result.data.url
            const tools = {
                img: imgUrl,
                name, description, minium, available, price,
              };
            axiosPrivate.post('https://royal-manufacturer.herokuapp.com/addProduct', tools)
            .then(res => {
                  toast.success('You are added a Tools.')
                  e.target.reset()
            })
            .catch(err => {
                if(err.response.status === 401 || err.response.status === 403){
                    toast.error(err.response.statusText)
                }
            })
        }
        if(result.error){
            toast.error(result.error.message)
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <section className="flex justify-center items-center min-h-[calc(100vh-80px)]">
      <Helmet><title>Dashboard - Add Product</title></Helmet>
      
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={formSubmit}>
          <h1 className="text-3xl text-center font-bold">
            You can add a Tools
          </h1>
          <div className="form-control">
            <label className="label" htmlFor="toolsName">
              <span className="label-text font-medium">Tools Name</span>
            </label>
            <input
              id="toolsName"
              type="text"
              placeholder="Tools"
              className="input input-bordered"
              required
              name="name"
            />
          </div>
          <div className="form-control mt-2">
            <label className="label" htmlFor="img">
              <span className="label-text font-medium">Image</span>
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
                required
              "
              name="img"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="minium">
              <span className="label-text font-medium">Minium Quantity</span>
            </label>
            <input
              type="number"
              id="minium"
              placeholder="1111"
              className="input input-bordered"
              required
              name="minium"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="available">
              <span className="label-text font-medium">Available Quantity</span>
            </label>
            <input
              type="number"
              id="available"
              placeholder="9999"
              className="input input-bordered"
              required
              name="available"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="price">
              <span className="label-text font-medium">Price</span>
            </label>
            <input
              type="number"
              id="price"
              placeholder="$123"
              className="input input-bordered"
              required
              name="price"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="description">
              <span className="label-text font-medium">Description</span>
            </label>
            <textarea
              type="text"
              id="description"
              placeholder="Description"
              className="input input-bordered h-20"
              required
              name="description"
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
