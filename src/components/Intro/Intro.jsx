import React from "react";
import { Link } from "react-router-dom";
import RocketIntro from "../Widgets/Rocket/RocketIntro";
import helmet from "../../assets/images/helmet.svg";
import "./intro.scss";

const Intro = () => {
  return (
    <section className="intro">
      <section className="intro__container">
        <h1 className="intro__title">
          {"<space"}
          <img className="intro__logo" src={helmet} alt="" />
          {"bar/>"}
        </h1>
        <p className="intro__subtitle">
          The retro-inspired touch typing game for WebDevs
        </p>
        <p className="intro__blurb">
          the game is simple! get yourself to your spaceship in 60 seconds by
          typing as fast and accurately as possible to boost your
          wpm-propelled-jetpack before your oxygen runs out, or watch the rocket
          leave without you whilst you drift into space, never to be seen again!
          think you've got what it takes?
        </p>
        <div className="intro__animation">
          <RocketIntro />
        </div>
        <Link to="/discover" className="intro__enter">
          GET STARTED
        </Link>
      </section>
    </section>
  );
};

export default Intro;
