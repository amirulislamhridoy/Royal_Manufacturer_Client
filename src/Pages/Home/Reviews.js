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
  var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <section className="mt-20 mb-16">
      <h2 className="text-4xl text-center font-bold mb-10">
        User <span className="text-primary">Reviews</span>
      </h2>

      <div className='w-10/12 md:w-11/12 mx-auto'>
        <Slider {...settings}>
          {reviews.map(review => <SingleReview key={review._id} review={review} />)}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
