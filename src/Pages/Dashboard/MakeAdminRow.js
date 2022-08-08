import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const MakeAdminRow = ({ user, i, refetch, setRemoveAdmin, setRemoveUser }) => {
  const { email, role } = user;

  function adminFn() {
    axios.patch(`http://localhost:5000/admin/${email}`)
      .then(function (response) {
        if(response?.data?.modifiedCount){
            toast.success('You are making a admin.')
            refetch()
        }
      })
      .catch(function (error) {
        console.log(error);
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
        <label onClick={() => setRemoveUser(user)} className='btn btn-xs btn-error' for="remove-user">Remove</label>
      </td>
      <td>
        {role === 'admin' && <label onClick={() => setRemoveAdmin(user)} className='btn btn-xs btn-error' for="remove-admin">Remove From Admin</label>}
      </td>
    </tr>
  );
};

export default MakeAdminRow;
