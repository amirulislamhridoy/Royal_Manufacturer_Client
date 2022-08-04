import React, { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import auth from "../../firebase_init";
import { useAuthState } from "react-firebase-hooks/auth";
import MyOrderRow from "./MyOrderRow";

const MyOrders = () => {
    const [bookings, setBookings] = useState([])
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      axios.get(`http://localhost:5000/booking?email=${email}`)
        .then((res) => setBookings(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <section>
      <Helmet>
        <title>Dashboard - My Orders</title>
      </Helmet>

      <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th className='text-center'>Tools Name</th>
        <th className='text-center'>Price</th>
        <th className='text-center'>Quantity</th>
        <th className='text-center'>User Name</th>
        <th className='text-center'>Email</th>
        <th className='text-center'>Phone</th>
        <th className='text-center'>Address</th>
        <th className='text-center'></th>
        <th className='text-center'></th>
      </tr>
    </thead>
    <tbody>
      {bookings.map((booking, i) => <MyOrderRow booking={booking} i={i} key={booking._id} />)}
    </tbody>
  </table>
</div>
    </section>
  );
};

export default MyOrders;
