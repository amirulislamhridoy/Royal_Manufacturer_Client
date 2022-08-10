import React from "react";
import {useNavigate} from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase_init";
import useAdmin from "../../hook/useAdmin";
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../Shared/axiosPrivate'

const RemoveAdminFnModal = ({removeAdmin, setRemoveAdmin, refetch, setRefetch}) => {
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);
    const [admin] =useAdmin(user)
    
    const removeAdminFn = () =>{
        const email = removeAdmin.email
        axiosPrivate.patch(`http://localhost:5000/makeAdminFn?email=${email}`)
          .then(function (response) {
            if(response?.data?.modifiedCount){
                if(!admin){
                    navigate('/dashboard')
                }
                setRefetch(!refetch)
                toast.error('You are remove a admin.')
                setRemoveAdmin('')
            }
          })
          .catch(err => {
            if(err.response.status === 403 || err.response.status === 401){
              toast.error(err.response.statusText)
              localStorage.removeItem('accessToken')
              signOut(auth)
              navigate('/login')
            }
          })
    
      }
    return (
        <div>
      <input type="checkbox" id="remove-admin" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure to remove {" "}
            <span className="text-primary">{removeAdmin.email}</span>{" "}
            from admin.
          </h3>
          <div className="modal-action">
            <label htmlFor="remove-admin" className="btn">
              No
            </label>
            <label onClick={removeAdminFn} htmlFor="remove-admin" className="btn btn-error">
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
    );
};

export default RemoveAdminFnModal;