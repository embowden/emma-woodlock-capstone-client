import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to="/">LOGO</NavLink>
      <NavLink to="/the-code">THE CODE</NavLink>
      <NavLink to="/resources">RESOURCES</NavLink>
      <NavLink to="/user-details">PROFILE</NavLink>
    </nav>
  );
};

export default Nav;
