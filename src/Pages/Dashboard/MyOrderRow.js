import React from "react";

const MyOrderRow = (props) => {
    const {address, email, name, phone, price, quantity, toolsName, _id, paid, transactionId} = props.booking
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
        {(price && !paid) && <button className='btn btn-xs btn-error'>Cancel</button>}
        {(price && paid) && transactionId}
      </td>
      <td>
        {(price && !paid) && <button className='btn btn-xs btn-primary'>Pay</button>}
        {(price && paid) && <button className='btn btn-xs btn-ghost'>Paid</button>}
      </td>
    </tr>
  );
};

export default MyOrderRow;
