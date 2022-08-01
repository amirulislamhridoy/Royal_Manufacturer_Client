import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../icons/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const btn = (
    <>
      <li>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/myPortFolio">My PortFolio</Link>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <nav className={`navbar sticky top-0 z-10`}>
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost">
          <img className="w-10" src={icon} alt="" />
          <span>
            <b>Royal</b> <br /> Manufacturer
          </span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{btn}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <FontAwesomeIcon className="h-5 w-5" icon={faBars} />
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 mr-4 p-2 shadow-xl bg-base-100 w-48"
          >
            {btn}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
