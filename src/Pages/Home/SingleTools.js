import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingleTools = ({tool}) => {
  const navigate = useNavigate()
    const [more, setMore] = useState(true)
    const {available, description, img, minium, name, price, _id} = tool
    
  return (
    <div className="card bg-base-100 shadow-xl mx-auto" data-aos="zoom-in">
      <div className="card-body">
        <img src={img} className='rounded-xl' alt='Tools img' />
        <h2 className="card-title">{name}</h2>

        {more && <div className='text-justify'>{description.length > 65 ? <>{description.slice(0, 65)} <b onClick={() => setMore(!more)} className='cursor-pointer'>...more</b></> : description}</div>}
        {more || <div className='text-justify'>{description} <b onClick={() => setMore(!more)} className='cursor-pointer'>...less</b></div>}

        <p>Minium Order: {minium}</p>
        <p>Available Tools: {available}</p>
        <h3 className="text-2xl font-semibold">Price: ${price}</h3>
        <div className="card-actions justify-end">
          <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-primary">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default SingleTools;
