import React from "react";
import "./modal.scss";

const Modal = ({ close, type }) => {
  const discoverMode = (
    <>
      <h1 className="modal__title">DISCOVER MODE</h1>
      <p className="modal__instructions">INSTRUCTIONS</p>
      <p className="modal__text">
        Want to improve your typing speed, and also learn some new methods at
        the same time? Then, this is the mode for you! In Discover Mode, you
        will type out sentences from our bible, MDN!
        <br />
        <br />
        Select your typing speed, then proceed to type as quickly and accurately
        as possible to reach the rocket! Once your astronaut reaches the rocket,
        you win the game! If you don't get him to the rocket before the 60
        seconds is up, he will drift off into space!
        <br />
        <br />
        The game will start as soon as you begin typing! Whenever you finish
        typing a sentence, a new one will appear for you to continue typing!
        <br />
        <br />
        Once the game is over, links will be provided for you to go and
        'discover' what you typed!
        <br />
        <br />
        To play again, hit the restart button! Check out your profile for your
        high score and stats!
        <br />
        <br />
        To learn more about touch typing, visit the resources tab!
      </p>
    </>
  );

  const developMode = (
    <>
      <h1 className="modal__title">DEVELOPER MODE</h1>
      <p className="modal__instructions">INSTRUCTIONS</p>
      <p className="modal__text">
        Struggling to find those pesky special characters? Constantly looking
        down at your keyboard? Play the game in Develop Mode to practice typing
        special characters and improve your coding skills!
        <br />
        <br />
        Select your speed (these are much lower than Discover Mode!), then
        proceed to type as quickly and accurately as possible to reach the
        rocket! The game will start as soon as you begin typing, you will have
        60 seconds to complete the mission, or drift off away into space!
        <br />
        <br />
        Once the game is over, just like Discover Mode, links will be provided
        for you to visit!
        <br />
        <br />
        To play again, hit the restart button! Check out your profile for your
        high score and stats!
        <br />
        <br />
        To learn more about touch typing, visit the resources tab!
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
