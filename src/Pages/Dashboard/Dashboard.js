import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import useAdmin from '../../hook/useAdmin'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase_init'

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] =useAdmin(user)

  return (
    <main>
      <Header />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-gray-100">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
            <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52 lg:bg-inherit bg-base-100 text-base-content">
            <li><Link to='/dashboard'>My Profile</Link></li>
            {!admin && <>
              <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
              <li><Link to='/dashboard/addReview'>Add Review</Link></li>
            </>}
            {admin && <>
              <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
            </>}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
