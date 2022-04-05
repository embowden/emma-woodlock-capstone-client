import React from "react";
import { Link } from "react-router-dom";
import "./code.scss";
import CodeSign from "../Widgets/CodeSign/CodeSign";
import react from "../../assets/logos/react.svg";
import reactRouter from "../../assets/logos/react-router.svg";
import htmlLogo from "../../assets/logos/html-5.svg";
import sassLogo from "../../assets/logos/sass.svg";
import nodeLogo from "../../assets/logos/nodejs.svg";
import javascript from "../../assets/logos/javascript.svg";
import axios from "../../assets/logos/axios.svg";
import expressjs from "../../assets/logos/expressjs.svg";
import nodemon from "../../assets/logos/nodemon.svg";
import heroku from "../../assets/logos/heroku-icon.svg";
import css from "../../assets/logos/css-3.svg";
import gameNoise from "../../assets/audio/game-button.wav";

const Code = () => {
  //GAME NOISE ON CLICK EVENT
  let gameSound = new Audio(gameNoise);
  const handleSound = () => {
    gameSound.play();
  };

  return (
    <section className="code">
      <section className="code__container">
        <div className="code__animation">
          <CodeSign />
        </div>
        <h1 className="code__title">{"[ the, code ]"}</h1>
        <article className="code__why">
          <h5 className="code__why-title">Why touch typing?</h5>
          <p className="code__why-blurb">
            As Web Developers, we spend A LOT of time typing. Typing can be both
            psychologically and physically exhausting when done for long periods
            of time. Accordingly, I wanted to make something fun and informative
            to encourage my peers (and you!) to learn to touch type properly
            whilst enjoying themselves, in order to reduce mental and physical
            fatigue.
          </p>
        </article>
        <article className="code__stats">
          <h5 className="code__stats-title">Project Stats</h5>
          <div className="code__stats-table">
            <ul className="code__stats-labels">
              <li className="code__stats-underline">Build time</li>
              <li className="code__stats-underline">Lines of Code</li>
              <li className="code__stats-underline">Animations</li>
              <li className="code__stats-underline">Images</li>
              <li className="code__stats-underline">Sound Effects</li>
              <li className="code__stats-underline">Fonts</li>
              <li className="code__stats-underline">Components</li>
              <li className="code__stats-underline">Hooks</li>
              <li className="code__stats-underline">useEffects</li>
              <li className="code__stats-underline">
                Biscuits eaten &nbsp; &nbsp; &nbsp;
              </li>
              {/* <li className="code__stats-underline">Dedicated To</li> */}
            </ul>
            <ul className="code__stats-answers">
              <li className="code__stats-underline">2 weeks</li>
              <li className="code__stats-underline">3,816</li>
              <li className="code__stats-underline">15</li>
              <li className="code__stats-underline">31</li>
              <li className="code__stats-underline">11</li>
              <li className="code__stats-underline">4</li>
              <li className="code__stats-underline">30</li>
              <li className="code__stats-underline">6</li>
              <li className="code__stats-underline">16</li>
              <li className="code__stats-underline">too many </li>
              {/* <li className="code__stats-underline">JDT </li> */}
            </ul>
          </div>
        </article>
        <article className="code__visit">
          <h5 className="code__visit-title">visit / fork the code</h5>
          <p className="code__visit-blurb">
            I really hope you have enjoyed playing {"<spacebar/>"}! Please feel
            free to checkout the code for this project, or fork it to create
            your own version! The links for this project are below:
            <div className="code__visit-links">
              <a
                className="code__visit-link"
                href="https://github.com/embowden/emma-woodlock-capstone-client"
              >
                client side
              </a>
              ||
              <a
                className="code__visit-link"
                href="https://github.com/embowden/emma-woodlock-capstone-server"
              >
                server side
              </a>
            </div>
          </p>
        </article>
        <article className="code__techstack">
          <h5 className="code__techstack-title">TechStack</h5>
          <div className="code__logos">
            <img className="code__indiv" src={javascript} alt="" />
            <img className="code__indiv" src={react} alt="" />
            <img className="code__indiv" src={reactRouter} alt="" />
            <img className="code__indiv" src={htmlLogo} alt="" />
            <img className="code__indiv" src={css} alt="" />
            <img className="code__indiv" src={sassLogo} alt="" />
            <img className="code__indiv" src={nodeLogo} alt="" />
            <img className="code__indiv" src={axios} alt="" />
            <img className="code__indiv special" src={expressjs} alt="" />
            <img className="code__indiv" src={nodemon} alt="" />
            <img className="code__indiv" src={heroku} alt="" />
          </div>
        </article>
        <article className="code__credits">
          <h5 className="code__credits-header">
            Special thanks and credits to the below for resources:
          </h5>
          <div className="code__credit-links">
            <a
              className="code__link"
              target="_blank"
              href="https://developer.mozilla.org/en-US/"
            >
              MDN - Typing Data
            </a>
            <a
              className="code__link"
              target="_blank"
              href="https://soundcloud.com/dj_yukitaka/8bit_music"
            >
              Discover Mode Music
            </a>
            <a
              className="code__link"
              target="_blank"
              href="https://www.freepik.com/vectors/alien-planet"
            >
              Discover Mode Background Image
            </a>
            <a
              className="code__link"
              target="_blank"
              href="https://soundcloud.com/retrogamemusic/select-stage-nes"
            >
              Develop Mode Music
            </a>
            <a
              className="code__link"
              target="_blank"
              href="https://www.freepik.com/vectors/meteor-shower"
            >
              Develop Mode Background Image
            </a>
            <a className="code__link" target="_blank" href="https://mixkit.co">
              Sound Effects - Mixkit
            </a>
            <a
              className="code__link"
              target="_blank"
              href="https://lottiefiles.com"
            >
              Animations - Lottie Files
            </a>
            <a
              className="code__link"
              href="https://www.youtube.com/watch?v=2VGUGpZFY5s"
            >
              Youtube React Tutorial for Touch Typing
            </a>
            <a
              className="code__link"
              target="_blank"
              href="https://sweetalert2.github.io/"
            >
              Notifications - SweetAlert
            </a>
            <a
              className="code__link"
              target="_blank"
              href="https://animate.style/"
            >
              Text animations - Animate
            </a>
            <a
              className="code__link"
              target="_blank"
              href="https://www.flaticon.com/"
            >
              SVGs and Icons - FlatIcon
            </a>
            <a
              className="code__link"
              target="_blank"
              href="https://brainstation.io/course/online/remote-web-development-bootcamp"
            >
              BrainStation London - for everything!
            </a>
          </div>
        </article>
        <Link onClick={handleSound} to="/discover" className="code__return">
          BACK TO THE GAME
        </Link>
      </section>
    </section>
  );
};

export default Code;
