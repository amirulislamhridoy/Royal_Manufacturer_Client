import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import Loading from '../../Shared/Loading'
import ManageOrdersDeleteModal from "./ManageOrdersDeleteModal";

const ManageOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null)
  const { isLoading, error, data : orders, refetch } = useQuery(["orders"], () =>
    fetch("http://localhost:5000/orders").then((res) => res.json())
  );
  if(isLoading){return <Loading />}
  
  return (
    <section>
      <Helmet>
        <title>Dashboard - Manage Orders</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Per. Price</th>
              <th>Quantity</th>
              <th>Client Name</th>
              <th>Client Email</th>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => <tr key={order._id}>
              <th>{order?.toolsName}</th>
              <td>{order?.price}</td>
              <td>{order?.quantity}</td>
              <td>{order?.name}</td>
              <td>{order?.email}</td>
              <td>{order?.address}</td>
              <td>
                <label onClick={() => setDeleteOrder(order)} className='btn btn-xs btn-error' htmlFor="delete-order">Remove</label>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
    {deleteOrder && <ManageOrdersDeleteModal deleteOrder={deleteOrder} setDeleteOrder={setDeleteOrder} refetch={refetch} />}
    </section>
  );
};

export default ManageOrders;
