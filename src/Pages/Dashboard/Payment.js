import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading";

const Payment = () => {
  const { id } = useParams();
  const stripePromise = loadStripe(
    "pk_test_51L3yxyGxDf7DYIvzB2dADBrYRLv1V6ynAao5VILfSswUx6XUNts49HImSyLVwIBcx9HPvXz17bEpK5EVFNhIOcYl00TB8aBnAO"
  );

  const {
    isLoading,
    error,
    data: booking,
  } = useQuery(["repoData"], () =>
    fetch(`https://royal-manufacturer.herokuapp.com/booking/${id}`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const {price, name, toolsName, quantity } = booking
  return (
    <div className='mx-10'>
      <div className="card w-96 bg-base-100 shadow-xl my-5">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {name}</p>
          <h2 className='cart-title'>Please Pay for <span className='text-primary'>{toolsName}</span></h2>
          <p>Your booking <span className='text-primary'>{toolsName}</span> is <span className='text-primary'>{quantity}</span> pice & per price is <span className='text-primary'>{price}</span></p>
          <p>Please pay total: <b>${price * quantity}</b></p>
        </div>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm booking={booking} />
      </Elements>
    </div>
  );
};

export default Payment;
