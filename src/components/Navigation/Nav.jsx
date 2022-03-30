import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to="/">LOGO</NavLink>
      <NavLink
        to="/the-code"
        className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
      >
        THE CODE
      </NavLink>
      <NavLink
        to="/resources"
        className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
      >
        RESOURCES
      </NavLink>
      <NavLink
        to="/user-details"
        className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
      >
        PROFILE
      </NavLink>
    </nav>
  );
};

export default Nav;
