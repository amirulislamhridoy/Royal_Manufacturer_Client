import React from "react";
import StarRatingComponent from 'react-star-rating-component';

const SingleReview = (props) => {
    const {img, name, description, designation, ratings} = props.review;
    
  return (
    <div class="card max-w-96 bg-base-100 hover:shadow-xl mx-auto mb-4">
      <div class="card-body">
        <div className='flex items-center'>
          <div class="avatar mr-2">
            <div class="w-20 rounded-full">
              <img src={img} alt='user photo' />
            </div>
          </div>
          <div>
            <h2 className='card-title'>{name}</h2>
            <p>{designation}</p>
          </div>
        </div>
        <article>{description}</article>
        <p><StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={ratings}
          className='text-2xl'
        /></p>
        
      </div>
    </div>
  );
};

export default SingleReview;
