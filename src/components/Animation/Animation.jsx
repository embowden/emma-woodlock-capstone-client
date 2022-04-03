import React, { useEffect } from "react";
import "./animation.scss";
import Rocket from "../Widgets/Rocket/Rocket";
import RocketTwo from "../Widgets/Rocket/RocketTwo";
import RocketLaunch from "../Widgets/Rocket/RocketLaunch";
import RocketLaunchTwo from "../Widgets/Rocket/RocketLaunchTwo";
import Astronaut from "../Widgets/Astronaut/Astronaut";
import BlueAstronaut from "../Widgets/Astronaut/BlueAstronaut";
import FloatingAstronaut from "../Widgets/Astronaut/FloatingAstronaut";
import BlueFloatingAstronaut from "../Widgets/Astronaut/BlueFloatingAstronaut";
import takeoff from "../../assets/audio/takeoff.wav";
import win from "../../assets/audio/win.wav";
import lose from "../../assets/audio/lose.wav";

const Animation = ({ characters, gameMode, gameWon, finished, match }) => {
  //USE EFFECT FOR ANIMATION SOUNDS
  useEffect(() => {
    if (gameWon || (!gameWon && finished)) {
      setTimeout(() => {
        rocketBlast.play();
      }, 4000);
    }
  }, [gameWon, finished]);

  useEffect(() => {
    if (gameWon && finished) {
      youWon.play();
    } else if (!gameWon && finished) {
      youLost.play();
    }
  }, [gameWon, finished]);

  //FUNCTION TO CALCULATE STEP
  const calculate = (speed) => {
    let totalChars = speed * 5;
    let step = 340 / totalChars;
    return step;
  };

  //SOUND EFFECTS
  const rocketBlast = new Audio(takeoff);
  const youWon = new Audio(win);
  const youLost = new Audio(lose);

  //LOCAL STORAGE COLLECTION
  let scoreDisc = localStorage.getItem("highScoreDisc");
  let scoreDev = localStorage.getItem("highScoreDev");

  return (
    <section className="animation">
      {match.path === "/discover" ? (
        <p className="animation__highscore-disc">high score: {scoreDisc} wpm</p>
      ) : (
        <p className="animation__highscore-dev">high score: {scoreDev} wpm</p>
      )}
      <div
        className={
          match.path === "/discover"
            ? "animation__container-discover"
            : "animation__container-develop"
        }
      >
        <article className="animation__animations">
          {gameWon || (!gameWon && finished) ? (
            <div
              className="animation__rocket"
              style={{
                transition: "all 5s ease-in-out 5s",
                transform: "translateY(-400px)",
              }}
            >
              {match.path === "/discover" ? (
                <RocketLaunch />
              ) : (
                <RocketLaunchTwo />
              )}
            </div>
          ) : (
            <div className="animation__rocket">
              {match.path === "/discover" ? <Rocket /> : <RocketTwo />}
            </div>
          )}
          {(gameWon && finished) || (!gameWon && !finished) ? (
            <div
              style={
                !gameWon
                  ? {
                      marginLeft: `${characters * calculate(gameMode)}px`,
                      transition: "margin-left 1s",
                    }
                  : {
                      marginLeft: `${characters * calculate(gameMode)}px`,
                      transition: "all 4s linear",
                      transform: "scale(0) translateY(-200px)",
                    }
              }
              className="animation__astro"
            >
              {match.path === "/discover" ? <Astronaut /> : <BlueAstronaut />}
            </div>
          ) : (
            <div
              className="animation__floating"
              style={{
                marginLeft: `${characters * calculate(gameMode)}px`,
                transition: "all 10s ease-in-out 2s",
                transform: "translate(-650px, -650px)",
              }}
            >
              {match.path === "/discover" ? (
                <FloatingAstronaut />
              ) : (
                <BlueFloatingAstronaut />
              )}
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default Animation;
