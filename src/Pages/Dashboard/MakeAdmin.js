import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import MakeAdminRow from "./MakeAdminRow";
import Loading from '../../Shared/Loading'
import RemoveAdminFnModal from "./RemoveAdminFnModal";
import RemoveUserFnModal from "./RemoveUserFnModal";

const MakeAdmin = () => {
  const [removeAdmin, setRemoveAdmin] =useState({})
  const [removeUser, setRemoveUser] = useState({})
  const { isLoading, error, data : users, refetch } = useQuery(['repoData'], () =>
    fetch('http://localhost:5000/user').then(res =>
      res.json()
    )
  )
  if(isLoading){<Loading />}
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
              {users?.map((user, i) => <MakeAdminRow user={user} refetch={refetch} setRemoveAdmin={setRemoveAdmin} setRemoveUser={setRemoveUser} key={user._id} i={i} />)}
            </tbody>
          </table>
        </div>
      </div>
      {removeAdmin && <RemoveAdminFnModal removeAdmin={removeAdmin} setRemoveAdmin={setRemoveAdmin} refetch={refetch}/>}
      {removeUser && <RemoveUserFnModal removeUser={removeUser} setRemoveUser={setRemoveUser} refetch={refetch}/>}
    </section>
  );
};

export default MakeAdmin;
