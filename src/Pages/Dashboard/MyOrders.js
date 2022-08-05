import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Helmet } from "react-helmet";
import auth from "../../firebase_init";
import { useAuthState } from "react-firebase-hooks/auth";
import MyOrderRow from "./MyOrderRow";
import MyOrderDeleteModal from "./MyOrderDeleteModal";
import Loading from '../../Shared/Loading'
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";

const MyOrders = () => {
  const navigate = useNavigate()
  const [deleteOrder, setDeleteOrder] = useState(null);
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email;

  const { isLoading,  data : bookings, refetch } = useQuery(['repoData', user], () =>
    fetch(`http://localhost:5000/booking?email=${email}`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        "authorization": `Bearer ${localStorage.getItem("accessToken")}`
      },
    }).then(res =>{
      if(res.status === 403 || res.status === 401){
        toast.error(res.statusText)
        localStorage.removeItem('accessToken')
        signOut(auth)
        navigate('/login')
      }
      return res.json()
    })
  )

  if(isLoading){
    return <Loading />
  }
  return (
    <section>
      <Helmet>
        <title>Dashboard - My Orders</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-center">Tools Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">User Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Phone</th>
              <th className="text-center">Address</th>
              <th className="text-center">Transaction Id <br /> or Cancel</th>
              <th className="text-center"></th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <MyOrderRow
                booking={booking}
                i={i}
                key={booking._id}
                setDeleteOrder={setDeleteOrder}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && (
        <MyOrderDeleteModal
          refetch={refetch}
          deleteOrder={deleteOrder}
          setDeleteOrder={setDeleteOrder}
        />
      )}
    </section>
  );
};

export default MyOrders;
