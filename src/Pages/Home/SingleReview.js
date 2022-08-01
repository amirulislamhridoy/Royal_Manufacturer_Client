import React from "react";

const SingleReview = (props) => {
    const {img, name, description, designation, ratings} = props.review;
    console.log(props.review)
  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto">
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
        <p>{ratings}</p>
      </div>
    </div>
  );
};

export default SingleReview;
