import React, { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import icon from "../../icons/logoWithoutBg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import auth from "../../firebase_init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [bgColor, setBgColor] = useState(false)

  let from = location.state?.from?.pathname || "/";

  const [user, loading, error] = useAuthState(auth);
  
  const changeBackground = () => {
    if(window.scrollY > 100){
      setBgColor(true)
    }else{
      setBgColor(false)
    }
  }
  window.addEventListener('scroll', changeBackground);
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken")
    navigate(from)
  }

  const btn = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/myPortFolio">My PortFolio</NavLink>
        {user && <NavLink to="/dashboard">Dashboard</NavLink>}
        {user ? 
        <NavLink onClick={logOut} to="/login">Login Out</NavLink>
        :
        <NavLink to="/Login">Login</NavLink>}
      </li>
    </>
  );

  return (
    <nav className={`navbar sticky top-0 z-20 ${bgColor && 'bg-secondary'}`}>
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
