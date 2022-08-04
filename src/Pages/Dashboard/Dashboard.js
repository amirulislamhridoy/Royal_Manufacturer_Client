import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";

const Dashboard = () => {
  return (
    <main>
      <Header />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-gray-300">
          <label
            for="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
            <Outlet />
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
            <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
            <li><Link to='/dashboard/addAReview'>Add A Review</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;