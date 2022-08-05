import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

const CheckoutForm = ({ booking }) => {
  const [error, setError] = useState("");
  const { price, name, email, toolsName, phone, _id } = booking;
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    // if (error) {
    //   console.log(error);
    // } else {
    //   console.log(paymentMethod);
    // }
    setError(error?.message || "");

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
    } else {
      console.log(paymentIntent);
      fetch(`http://localhost:5000/payment/${_id}`, {
        method: "PATCH",
        body: JSON.stringify({transactionId: paymentIntent.id}),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          toast('Your payment is successful.')
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  return (
    <div class="card w-96 bg-base-100 shadow-xl mt-10 ml-10">
      <div class="card-body">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
        </form>
        <p className="text-error">{error}</p>
      </div>
    </div>
  );
};

export default CheckoutForm;
