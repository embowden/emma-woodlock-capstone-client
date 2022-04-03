import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RocketIntro from "../Widgets/Rocket/RocketIntro";
import helmet from "../../assets/images/helmet.svg";
import "./intro.scss";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Intro = () => {
  const [username, setUsername] = useState("");

  //FUNCTION TO REDIRECT USER
  const history = useHistory();
  const routeChange = () => {
    let path = "/discover";
    history.push(path);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      // alert("Please add your name");
      errorNameMissing();
    } else if (username.length < 2) {
      errorNameTooShort();
      // alert("Your name must be at least 2 characters long");
    } else {
      localStorage.setItem("username", username);
      routeChange();
    }
  };

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
      </section>
    </section>
  );
};

export default Intro;
