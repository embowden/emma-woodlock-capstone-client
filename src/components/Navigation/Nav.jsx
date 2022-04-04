import React from "react";
import { NavLink } from "react-router-dom";
import helmet from "../../assets/images/helmet.svg";
import successNoise from "../../assets/audio/click-noise.wav";
import "./nav.scss";

const Nav = ({ username }) => {
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
        {username ? username : "Profile"}
      </NavLink>
    </nav>
  );
};

export default Nav;
