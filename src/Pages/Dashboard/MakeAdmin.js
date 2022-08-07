import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet";
import MakeAdminRow from "./MakeAdminRow";
import Loading from '../../Shared/Loading'

const MakeAdmin = () => {

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
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, i) => <MakeAdminRow user={user} refetch={refetch} key={user._id} i={i} />)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;
