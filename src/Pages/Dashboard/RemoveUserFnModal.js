import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase_init";
import useAdmin from "../../hook/useAdmin";
import axiosPrivate from "../../Shared/axiosPrivate";
import { signOut } from "firebase/auth";

const RemoveUserFnModal = ({removeUser, setRemoveUser, refetch}) => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const removeAdminFn = () => {
    const email = removeUser.email;
    axiosPrivate
      .delete(`http://localhost:5000/removeUser/${email}`)
      .then(function (response) {
        if(response?.data?.deletedCount){
            refetch();
            toast.success("You are remove a user.");
            setRemoveUser("");
        }
        if(user?.email === removeUser.email){
            toast(`You can only login by this email and password. ${admin && 'It will be a normal user.'}`);
            localStorage.removeItem('accessToken')
            signOut(auth)
            navigate('/login')
        }
      })
  };
  return (
    <div>
      <input type="checkbox" id="remove-user" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure to remove{" "}
            <span className="text-primary">{removeUser.email}</span> from
            user.
          </h3>
          <div className="modal-action">
            <label for="remove-user" className="btn">
              No
            </label>
            <label
              onClick={removeAdminFn}
              for="remove-user"
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

export default RemoveUserFnModal;
