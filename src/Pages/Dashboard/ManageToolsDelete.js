import React from "react";
import { toast } from "react-toastify";

const ManageToolsDelete = ({toolsDelete, setToolsDelete}) => {
    const {name, email, toolsName} = toolsDelete

    function DeleteFn(){
        fetch(`http://localhost:5000/toolsBooking/${toolsDelete._id}`, {
            method: 'DELETE',
        }).then(res => res.json())
        .then(data => {
            toast('You are delete a ' + toolsName)
            setToolsDelete(null)
        })
    }
  return (
    <div>
      <input type="checkbox" id="remove-from-booking" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure to remove{" "}
            <span className="text-primary">{toolsName}</span> from Tools booking list. His email is <span className="text-primary">{email}</span>
          </h3>
          <div className="modal-action">
            <label htmlFor="remove-from-booking" className="btn">
              No
            </label>
            <label
              onClick={DeleteFn}
              htmlFor="remove-from-booking"
              className="btn btn-error"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageToolsDelete;
