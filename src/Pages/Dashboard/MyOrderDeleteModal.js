import React from "react";
import { toast } from 'react-toastify';

const MyOrderDeleteModal = ({ deleteOrder, setDeleteOrder, refetch }) => {
  function deleteFn() {
    fetch(`http://localhost:5000/delete/${deleteOrder._id}`, {
      method: "DELETE",
    }).then(res => res.json())
    .then(data => {
        refetch()
        setDeleteOrder(null)
        toast('Delete is success.')
    })
  }
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure to cancel{" "}
            <span className="text-primary">{deleteOrder?.toolsName}</span>{" "}
            booking ?
          </h3>
          <div className="modal-action">
            <label for="delete-modal" className="btn">
              No
            </label>
            <label onClick={deleteFn} for="delete-modal" className="btn btn-error">
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderDeleteModal;
