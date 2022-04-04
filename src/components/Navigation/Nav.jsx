import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import helmet from "../../assets/images/helmet.svg";
import successNoise from "../../assets/audio/click-noise.wav";
import "./nav.scss";

const Nav = ({ user }) => {
  //COLLECT LOCAL STORAGE
  // let playerName = localStorage.getItem("username");

  // const [user, setUser] = useState("");

  useEffect(() => {
    console.log(user);
  }, user);

  //SET MUSIC
  let sucessSound = new Audio(successNoise);
  const handleSound = () => {
    sucessSound.play();
  };

  return (
    <nav className="nav">
      <NavLink onClick={handleSound} className="nav__logo" to="/">
        {"<space"}
        <img className="nav__image" src={helmet} alt="" />
        {"bar/>"}
      </NavLink>
      <NavLink
        onClick={handleSound}
        to="/the-code"
        className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
      >
        THE CODE
      </NavLink>
      <NavLink
        onClick={handleSound}
        to="/resources"
        className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
      >
        RESOURCES
      </NavLink>

      <NavLink
        onClick={handleSound}
        to="/user-details"
        className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
      >
        {user ? user : "Profile"}
      </NavLink>
    </nav>
  );
};

export default Nav;
