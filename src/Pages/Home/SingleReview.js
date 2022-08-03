import React from "react";
import StarRatingComponent from 'react-star-rating-component';

const SingleReview = (props) => {
    const {img, name, description, designation, ratings} = props.review;
    
  return (
    <div className="card bg-base-100 hover:shadow-xl mx-auto mb-4">
      <div className="card-body">
        <div className='flex items-center'>
          <div className="avatar mr-2">
            <div className="w-20 rounded-full">
              <img src={img} alt='User img' />
            </div>
          </div>
          <div>
            <h2 className='card-title'>{name}</h2>
            <p>{designation}</p>
          </div>
        </div>
        <article>{description}</article>
        <div><StarRatingComponent 
          name="rate" 
          starCount={5}
          // value={+ratings}
          value={parseInt(ratings)}
          className='text-2xl'
        /></div>
      </div>
    </div>
  );
};

export default SingleReview;
