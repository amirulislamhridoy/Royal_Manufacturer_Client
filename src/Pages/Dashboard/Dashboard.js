import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import useAdmin from '../../hook/useAdmin'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase_init'
import CustomLink from "./CustomLink";

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
            className="btn btn-primary btn-sm my-2 drawer-button lg:hidden"
          >
            Open side drawer
          </label>
            <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52 lg:bg-inherit bg-base-100 text-base-content">
            <li><CustomLink to='/dashboard'>My Profile</CustomLink></li>
            {!admin && <>
              <li><CustomLink to='/dashboard/myOrders'>My Orders</CustomLink></li>
              <li><CustomLink to='/dashboard/addReview'>Add Review</CustomLink></li>
            </>}
            {admin && <>
              <li><CustomLink to='/dashboard/addProduct'>Add Product</CustomLink></li>
              <li><CustomLink to='/dashboard/makeAdmin'>Make Admin</CustomLink></li>
              <li><CustomLink to='/dashboard/manageOrders'>Manage Orders</CustomLink></li>
            </>}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
