import React from "react";
import { useNavigate } from "react-router-dom";

const MyOrderRow = ({booking, setDeleteOrder}) => {
  const navigate = useNavigate()
    const {address, email, name, phone, price, quantity, toolsName, _id, status, transactionId} = booking
    
  return (
    <tr>
      <th>{toolsName}</th>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{address}</td>
      <td>
        {(price && (status === 'unpaid')) && <label  onClick={() => setDeleteOrder(booking)} htmlFor="delete-modal" className="btn btn-xs btn-error">Cancel</label>}
        
        {(price && status) && transactionId}
      </td>
      <td>
        {(price && (status === 'unpaid')) && <button onClick={() => navigate(`/dashboard/payment/${_id}`)} className='btn btn-xs btn-primary'>Pay</button>}
        {(price && (status === 'paid')) && <button className='btn btn-xs btn-secondary'>Pending</button>}
        {(price && (status === 'shift')) && <button className='btn btn-xs btn-ghost border-2 border-secondary'>Shift</button>}
      </td>
    </tr>
  );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
};

export default MyOrderRow;
