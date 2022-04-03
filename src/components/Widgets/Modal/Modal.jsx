import React from "react";
import "./modal.scss";

const Modal = ({ close, type }) => {
  const discoverMode = (
    <>
      <h1 className="modal__title">DISCOVER MODE</h1>
      <p className="modal__instructions">INSTRUCTIONS</p>
      <p className="modal__text">
        Want to improve your typing speed, but also learn some new methods at
        the same time? Then, this is the mode for you! In discover mode, you
        will type out sentences from our bible, MDN!
        <br />
        <br />
        Select your speed, then proceed to type as quickly and accurately as
        possible to reach the rocket! The game will start as soon as you begin
        typing, you will have 60 seconds to complete the mission!
        <br />
        <br />
        Once the game is over, links will be provided for you to go and
        'discover' what you typed!
        <br />
        <br />
        To play again, hit the restart button!
      </p>
    </>
  );

  const developMode = (
    <>
      <h1 className="modal__title">DEVELOPER MODE</h1>
      <p className="modal__instructions">INSTRUCTIONS</p>
      <p className="modal__text">
        Struggling to find those pesky special characters? Play the game in
        Develop Mode to practice typing special characters and improve your
        coding skills!
        <br />
        <br />
        Select your speed (these are much lower than Discover Mode!), then
        proceed to type as quickly and accurately as possible to reach the
        rocket! The game will start as soon as you begin typing, you will have
        60 seconds to complete the mission!
        <br />
        <br />
        Once the game is over, just like Discover Mode, links will be provided
        for you to visit!
        <br />
        <br />
        To play again, hit the restart button!
      </p>
    </>
  );

  return (
    <aside className="modal" onClick={close}>
      <section className="modal__container border-gradient border-gradient-purple">
        {type == "discover" ? discoverMode : developMode}
      </section>
    </aside>
  );
};

export default Modal;
