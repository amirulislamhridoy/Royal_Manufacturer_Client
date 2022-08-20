import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading";
import ManageOrdersDeleteModal from "./ManageOrdersDeleteModal";
import axiosPrivate from '../../Shared/axiosPrivate';
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import auth from '../../firebase_init'
import { useNavigate } from "react-router-dom";

const ManageOrders = () => {
  const navigate = useNavigate()
  const [deleteOrder, setDeleteOrder] = useState(null);
  const [all,setAll] =useState('')
  const [unpaid,setUnpaid] =useState('')
  const [paid,setPaid] =useState('')
  const [shift,setShift] =useState('')
  const [active, setActive] = useState('all')

  const allFn = () => {
    setAll('')
    setUnpaid('')
    setPaid('')
    setShift('')
    setActive('all')
  }
  const unpaidFn = () => {
    setAll('')
    setUnpaid('unpaid')
    setPaid('')
    setShift('')
    setActive('unpaid')
  }
  const paidFn = () => {
    setAll('')
    setUnpaid('')
    setPaid('paid')
    setShift('')
    setActive('paid')
  }
  const shiftFn = () => {
    setAll('')
    setUnpaid('')
    setPaid('')
    setShift('shift')
    setActive('shift')
  }
  const {
    isLoading,
    error,
    data: orders,
    refetch,
  } = useQuery(["orders", all, unpaid, paid, shift], () =>
    fetch(`https://royal-manufacturer.herokuapp.com/orders?all=${all}&unpaid=${unpaid}&paid=${paid}&shift=${shift}`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const pendingFn = (order) => {
    axiosPrivate.patch(`https://royal-manufacturer.herokuapp.com/pendingToShift/${order._id}`)
  .then(function (response) {
    toast.success(`${order.toolsName} is successfully shift`)
    refetch()
  })
  .catch(function (error) {
    if(error?.response?.status){
      signOut(auth);
      localStorage.removeItem("accessToken")
      toast.error(error?.response?.data?.message)
      navigate('/login')
    }
  })
  }

  return (
    <section>
      <Helmet>
        <title>Dashboard - Manage Orders</title>
      </Helmet>
      <div className="btn-group flex justify-end my-2 mx-2">
        <button onClick={allFn} className={`btn btn-sm ${active === 'all' ? 'btn-primary': 'btn-secondary'}`}>All</button>
        <button onClick={unpaidFn} className={`btn btn-sm  ${active === 'unpaid' ? 'btn-primary': 'btn-secondary'}`}>Unpaid</button>
        <button onClick={paidFn} className={`btn btn-sm  ${active === 'paid' ? 'btn-primary': 'btn-secondary'}`}>Pending</button>
        <button onClick={shiftFn} className={`btn btn-sm ${active === 'shift' ? 'btn-primary': "btn-secondary"}`}>Shift</button>
      </div>

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
            {orders.map((order, i) => (
              <tr key={order._id}>
                <th>{order?.toolsName}</th>
                <td>{order?.price}</td>
                <td>{order?.quantity}</td>
                <td>{order?.name}</td>
                <td>{order?.email}</td>
                <td>{order?.address}</td>
                <td>
                  {order?.status === 'unpaid' && <label
                    onClick={() => setDeleteOrder(order)}
                    className="btn btn-xs btn-error"
                    htmlFor="delete-order"
                  >
                    Remove
                  </label>}
                  {order?.status === 'paid' && <label onClick={() => pendingFn(order)} className='btn btn-primary btn-xs'>Pending</label>}
                  {order?.status === 'shift' && <label className='btn btn-secondary btn-xs'>Shift</label>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && (
        <ManageOrdersDeleteModal
          deleteOrder={deleteOrder}
          setDeleteOrder={setDeleteOrder}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default ManageOrders;
