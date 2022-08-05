import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Shared/Loading'

const Payment = () => {
    const {id} = useParams()
  const stripePromise = loadStripe("pk_test_51L3yxyGxDf7DYIvzB2dADBrYRLv1V6ynAao5VILfSswUx6XUNts49HImSyLVwIBcx9HPvXz17bEpK5EVFNhIOcYl00TB8aBnAO");

    const { isLoading, error, data : booking } = useQuery(['repoData'], () =>
    fetch(`http://localhost:5000/booking/${id}`).then(res =>
      res.json()
    )
  )
  if(isLoading){
    return <Loading />
  }

  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm booking={booking} />
      </Elements>
    </div>
  );
};

export default Payment;
