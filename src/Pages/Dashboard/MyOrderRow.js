import React from "react";
import { useNavigate } from "react-router-dom";

const MyOrderRow = ({booking, setDeleteOrder}) => {
  const navigate = useNavigate()
    const {address, email, name, phone, price, quantity, toolsName, _id, paid, transactionId} = booking
    
  return (
    <tr>
      <td>{toolsName}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{address}</td>
      <td>
        {(price && !paid) && <label  onClick={() => setDeleteOrder(booking)} for="delete-modal" class="btn btn-xs btn-error">Cancel</label>}
        
        {(price && paid) && transactionId}
      </td>
      <td>
        {(price && !paid) && <button onClick={() => navigate(`/payment/${_id}`)} className='btn btn-xs btn-primary'>Pay</button>}
        {(price && paid) && <button className='btn btn-xs btn-ghost'>Paid</button>}
      </td>
    </tr>
  );
};

export default MyOrderRow;
