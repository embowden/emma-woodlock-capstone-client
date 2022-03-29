// import React from "react";
import React, { useEffect } from "react";
import "./animation.scss";
import Rocket from "../Widgets/Rocket/Rocket";
import RocketLaunch from "../Widgets/Rocket/RocketLaunch";
import Astronaut from "../Widgets/Astronaut/Astronaut";
import FloatingAstronaut from "../Widgets/Astronaut/FloatingAstronaut";

const Animation = ({ characters, gameMode, gameWon, finished }) => {
  // console.log("finished", finished);
  // console.log("gameWon", gameWon);

  //FUNCTION TO CALCULATE STEP
  const calculate = (speed) => {
    let totalChars = speed * 5;
    let step = 340 / totalChars;
    return step;
  };

  return (
    <section className="animation">
      <div className="animation__container">
        <article className="animation__animations">
          {gameWon || (!gameWon && finished) ? (
            <div
              className="animation__rocket"
              style={{
                transition: "all 5s ease-in-out 5s",
                transform: "translateY(-400px)",
              }}
            >
              <RocketLaunch />
            </div>
          ) : (
            <div className="animation__rocket">
              <Rocket />
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
              <Astronaut />
            </div>
          ) : (
            <div className="animation__floating">
              <FloatingAstronaut />
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default Animation;
