import { NavLink } from "react-router-dom";
import React from "react";
import "animate.css";
// import Modal from "../Widgets/Modal/Modal";
import "./header.scss";
import arrow from "../../assets/images/arrow.png";

const Header = ({ match }) => {
  return (
    <>
      {/* <Modal /> */}
      <header className="header">
        <section className="header__container">
          <div className="header__arrow">
            <img className="header__arrow-left" src={arrow} alt="" />
            <img className="header__arrow-right" src={arrow} alt="" />
          </div>
          <h1 className="header__select">select your mode</h1>
          <p
            className={
              match.path === "/discover"
                ? "header__text-discover"
                : "header__text-develop"
            }
          >
            hover over a mode to learn more
          </p>
          <article className="header__modes">
            <NavLink
              to="/discover"
              className={(isActive) =>
                "header__link-discover" + (!isActive ? "" : "--active")
              }
            >
              discover
            </NavLink>
            <NavLink
              to="/develop"
              className={(isActive) =>
                "header__link-develop" + (!isActive ? "" : "--active")
              }
            >
              developer
            </NavLink>
          </article>
        </section>
      </header>
    </>
  );
};

export default Header;
