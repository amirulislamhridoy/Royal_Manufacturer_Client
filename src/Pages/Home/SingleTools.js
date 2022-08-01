import React from "react";
import { useState } from "react";

const SingleTools = ({tool}) => {
    const [more, setMore] = useState(true)
    const {available, description, img, minium, name, price, _id} = tool
    
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <img className='rounded-xl' src={img} alt='Tools Photo' />
        <h2 className="card-title">{name}</h2>

        {more && <p>{description.length > 65 ? <div>{description.slice(0, 65)} <span onClick={() => setMore(!more)} className='cursor-pointer'>...more</span></div> : description}</p>}
        {more || <p>{description} <span onClick={() => setMore(!more)} className='cursor-pointer'>...less</span></p>}

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
