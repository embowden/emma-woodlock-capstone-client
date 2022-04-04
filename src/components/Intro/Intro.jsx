import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RocketIntro from "../Widgets/Rocket/RocketIntro";
import helmet from "../../assets/images/helmet.svg";
import "./intro.scss";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import successNoise from "../../assets/audio/click-noise.wav";
import failNoise from "../../assets/audio/error.wav";
import gameNoise from "../../assets/audio/game-button.wav";

const Intro = ({ setUser }) => {
  const [username, setUsername] = useState("");

  //FUNCTION TO REDIRECT USER
  const history = useHistory();
  const routeChange = () => {
    gameSound.play();
    let path = "/discover";
    history.push(path);
  };

  //HANDLE NAME INPUT CHANGE
  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  //HANDLE SUBMIT AND VALIDATION
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      failSound.play();
      errorNameMissing();
    } else if (username.length < 2) {
      failSound.play();
      errorNameTooShort();
    } else {
      sucessSound.play();
      localStorage.setItem("username", username);
      setUser(username);
      routeChange();
    }
  };

  //SET MUSIC
  let sucessSound = new Audio(successNoise);
  let failSound = new Audio(failNoise);
  let gameSound = new Audio(gameNoise);

  //ALERT FOR VALIDATION
  const errorNameMissing = () => {
    Swal.fire({
      icon: "error",
      title: "WHO ARE YOU?",
      text: "Please provide your name!",
      confirmButtonText: "Oops...my bad!",
      confirmButtonColor: "#000000",
      allowOutsideClick: false,
    });
  };

  const errorNameTooShort = () => {
    Swal.fire({
      icon: "error",
      title: "THAT'S NOT A NAME!",
      text: "Your name must be at least 2 letters long please!",
      confirmButtonText: "I guess so!",
      confirmButtonColor: "#000000",
      allowOutsideClick: false,
    });
  };

  //COLLECT LOCAL STORAGE
  let playerName = localStorage.getItem("username");

  //SET NUMBER OF VISITS IN LOCAL & SESSION STORAGE
  let visits = Number(localStorage.getItem("visitCount"));
  let current = Boolean(sessionStorage.getItem("session"));
  if (!current) {
    visits++;
  }
  localStorage.setItem("visitCount", visits);
  sessionStorage.setItem("session", true);

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
        {!playerName ? (
          <form onSubmit={handleSubmit} action="" className="intro__form">
            <input
              onChange={handleChange}
              value={username}
              className="intro__input"
              type="text"
              placeholder="Please type your name"
            />
            <button type="submit" className="intro__enter">
              SUBMIT AND PLAY!
            </button>
          </form>
        ) : (
          <div className="intro__returning">
            <p className="intro__welcome">Welcome back {playerName}!</p>
            <button onClick={routeChange} className="intro__enter">
              PLAY THE GAME!
            </button>
          </div>
        )}
        <p className="intro__disclaimer">
          Please set your screen size to 1280 * 720px to enjoy this game!
        </p>
      </section>
    </section>
  );
};

export default Intro;
