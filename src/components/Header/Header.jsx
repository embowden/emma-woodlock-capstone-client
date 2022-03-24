import { NavLink } from "react-router-dom";
import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__header">select your mode</h1>
      <article className="header__modes">
        <NavLink to="/discover">discover</NavLink>
        <NavLink to="/develop">develop</NavLink>
      </article>
    </header>
  );
};

export default Header;