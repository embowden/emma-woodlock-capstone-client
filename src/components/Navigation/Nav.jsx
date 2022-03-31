import React from "react";
import { NavLink } from "react-router-dom";
import helmet from "../../assets/images/helmet.svg";
import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink className="nav__logo" to="/">
        {"<space"}
        <img className="nav__image" src={helmet} alt="" />
        {"bar/>"}
      </NavLink>
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
