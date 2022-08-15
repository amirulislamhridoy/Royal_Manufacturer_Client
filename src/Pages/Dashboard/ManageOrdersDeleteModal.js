import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase_init";
import { signOut } from "firebase/auth";
import axiosPrivate from '../../Shared/axiosPrivate'

const ManageOrdersDeleteModal = ({deleteOrder, setDeleteOrder, refetch}) => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const DeleteOrderFn = () => {
    axiosPrivate
      .delete(`http://localhost:5000/removeOrder/${deleteOrder._id}`)
      .then(function (response) {
        if(response?.data?.deletedCount){
            refetch();
            toast.success("You are remove a order.");
            setDeleteOrder("");
        }
      })
      .catch(err => {
        console.log(err)
        if(err.response.status === 403 || err.response.status === 401){
          toast.error(err.response.statusText)
          localStorage.removeItem('accessToken')
          signOut(auth)
          navigate('/login')
        }
      })
  };
  return (
    <div>
      <input type="checkbox" id="delete-order" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure to remove{" "}
            <span className="text-primary">{deleteOrder.toolsName}</span> of <span className="text-primary">{deleteOrder.email}</span> user from booking or order list.
          </h3>
          <div className="modal-action">
            <label htmlFor="delete-order" className="btn">
              No
            </label>
            <label
              onClick={DeleteOrderFn}
              htmlFor="delete-order"
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

export default ManageOrdersDeleteModal;
