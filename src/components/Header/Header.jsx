import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "animate.css";
import Modal from "../Widgets/Modal/Modal";
import "./header.scss";
import arrow from "../../assets/images/arrow.png";

const Header = ({ match, userInput }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    console.log(showModal);
  }, [showModal, modalType]);

  const displayModal = (event) => {
    console.log(event.target.name);
    setModalType(event.target.name)
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <header className="header">
        {!showModal ? null : <Modal type={modalType} close={onClose} />}
        <section className="header__container">
          {userInput.length > 0 ? null : (
            <div className="header__arrow">
              <img className="header__arrow-left" src={arrow} alt="" />
              <img className="header__arrow-right" src={arrow} alt="" />
            </div>
          )}
          <h1 className="header__select">select your mode</h1>
          <p
            className={
              match.url === "/discover"
                ? "header__text-discover"
                : "header__text-develop"
            }
          >
            click the ? to see game instructions
          </p>
          <article className="header__modes">
            <button
              name="discover"
              className="header__modal-one"
              onClick={displayModal}
            >
              ?
            </button>
            <NavLink
              to="/discover"
              className={(isActive) =>
                "header__link-discover" + (!isActive ? "" : "--active")
              }
            >
              discover
            </NavLink>
            <button
              name="develop"
              className="header__modal-two"
              onClick={displayModal}
            >
              ?
            </button>
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
