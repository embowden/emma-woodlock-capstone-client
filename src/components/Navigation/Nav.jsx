import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import helmet from "../../assets/images/helmet.svg";
import "./nav.scss";

const Nav = () => {
  //COLLECT LOCAL STORAGE
  let playerName = localStorage.getItem("username");

  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(playerName);
  }, [user]);

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
      {!playerName ? (
        <NavLink
          to="/user-details"
          className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
        >
          PROFILE
        </NavLink>
      ) : (
        <NavLink
          to="/user-details"
          className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
        >
          {user}
        </NavLink>
      )}
    </nav>
  );
};

export default Nav;
