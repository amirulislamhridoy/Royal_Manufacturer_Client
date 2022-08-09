import axiosPrivate from "../../Shared/axiosPrivate";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase_init";

const MakeAdminRow = ({ user, i, refetch, setRemoveAdmin, setRemoveUser }) => {
  const navigate =useNavigate()
  const { email, role } = user;

  function adminFn() {
    axiosPrivate.patch(`http://localhost:5000/admin/${email}`)
      .then(function (response) {
        if(response?.data?.modifiedCount){
            toast.success('You are making a admin.')
            refetch()
        }
      })
      .catch(function (err) {
        if(err.response.status === 403 || err.response.status === 401){
          toast.error(err.response.statusText)
          localStorage.removeItem('accessToken')
          signOut(auth)
          navigate('/login')
        }
      });
  }
  
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{email}</td>
      <td>
        {role === "admin" || (
          <button
            onClick={adminFn}
            className="btn btn-xs btn-ghost border-2 border-gray-300"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <label onClick={() => setRemoveUser(user)} className='btn btn-xs btn-error' htmlFor="remove-user">Remove</label>
      </td>
      <td>
        {role === 'admin' && <label onClick={() => setRemoveAdmin(user)} className='btn btn-xs btn-error' htmlFor="remove-admin">Remove From Admin</label>}
      </td>
    </tr>
  );
};

export default MakeAdminRow;
