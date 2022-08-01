import React, { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import SingleReview from "./SingleReview";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <section className="mt-20">
      <h2 className="text-4xl text-center font-bold mb-10">
        User <span className="text-primary">Reviews</span>
      </h2>

      <div className=''>
        <Slider {...settings}>
          {reviews.map(review => <SingleReview key={review._id} review={review} />)}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
