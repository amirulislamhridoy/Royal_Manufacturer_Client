import React from "react";

const SingleTools = ({tool}) => {
    const {available, description, img, minium, name, price, _id} = tool
    
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <img src={img} alt='Tools Photo' />
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Minium Order: {minium}</p>
        <p>Available Tools: {available}</p>
        <h3 className="text-2xl font-bold">Price: {price}</h3>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleTools;
