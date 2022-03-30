import { NavLink } from "react-router-dom";
import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <section className="header__container">
        <h1 className="header__select">select your mode</h1>
        <p className="header__text">hover over a mode to learn more</p>
        <article className="header__modes">
          <NavLink
            to="/discover"
            // className={(isActive) => "header__link" + (!isActive ? "" : "--active")}
            className="header__link"
          >
            discover
          </NavLink>
          <NavLink
            to="/develop"
            // className={(isActive) => "header__link" + (!isActive ? "" : "--active")}
            className="header__link"
          >
            develop
          </NavLink>
        </article>
      </section>
    </header>
  );
};

export default Header;
