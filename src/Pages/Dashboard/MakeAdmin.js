import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import MakeAdminRow from "./MakeAdminRow";
import RemoveAdminFnModal from "./RemoveAdminFnModal";
import RemoveUserFnModal from "./RemoveUserFnModal";
import axios from 'axios'
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import auth from "../../firebase_init";
import { useNavigate } from "react-router-dom";

const MakeAdmin = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [refetch, setRefetch] = useState(false)
  const [removeAdmin, setRemoveAdmin] = useState({})
  const [removeUser, setRemoveUser] = useState({})
 
  useEffect(() => {
    axios.get('https://royal-manufacturer.herokuapp.com/user', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => {
      setUsers(res.data)
    }).catch(err => {
        if(err.response.status === 401 || err.response.status === 403){
            toast.error(err.response.statusText)
            localStorage.removeItem('accessToken')
            signOut(auth)
            navigate('/login')
        }
    })
  }, [refetch])
  
  return (
    <section>
      <Helmet>
        <title>Dashboard - Make Admin</title>
      </Helmet>

      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Make Admin</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, i) => <MakeAdminRow user={user} setRefetch={setRefetch} refetch={refetch} setRemoveAdmin={setRemoveAdmin} setRemoveUser={setRemoveUser} key={user._id} i={i} />)}
            </tbody>
          </table>
        </div>
      </div>
      {removeAdmin && <RemoveAdminFnModal removeAdmin={removeAdmin} setRemoveAdmin={setRemoveAdmin} setRefetch={setRefetch} refetch={refetch}/>}
      {removeUser && <RemoveUserFnModal removeUser={removeUser} setRemoveUser={setRemoveUser} setRefetch={setRefetch} refetch={refetch}/>}
    </section>
  );
};

export default MakeAdmin;
