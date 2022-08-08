import axiosPrivate from '../../Shared/axiosPrivate'
import React from "react";
import {useNavigate} from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase_init";
import useAdmin from "../../hook/useAdmin";

const RemoveAdminFnModal = ({removeAdmin, setRemoveAdmin, refetch}) => {
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
                }else{
                    refetch()
                }
                toast.success('You are remove a admin.')
                setRemoveAdmin('')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    
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
            <label for="remove-admin" className="btn">
              No
            </label>
            <label onClick={removeAdminFn} for="remove-admin" className="btn btn-error">
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
    );
};

export default RemoveAdminFnModal;