import React, { useRef } from "react";
import Preview from "../Preview/Preview";
import Links from "../Links/Links";
import "./game.scss";

const Game = ({
  text,
  userInput,
  value,
  onChange,
  readOnly,
  onClick,
  ids,
  finished,
  started,
  match,
}) => {
  let showButton = true;
  if (started) {
    showButton = false;
  } else if (!started && finished) {
    showButton = false;
  }

  let restartButton = true;
  if (!started && finished) {
    restartButton = true;
  } else if (!started) {
    restartButton = false;
  }

  //MANAGE CONTAINER SIZE
  const prevContainer = useRef(null);
  const keyPress = () => {
    prevContainer.current.scrollIntoView(false);
  };

  return (
    <>
      <section className="game">
        <section className="game__container">
          <Preview text={text} userInput={userInput} cont={prevContainer} />
          {!finished ? (
            <textarea
              onKeyDown={keyPress}
              className={
                match.path === "/discover"
                  ? "game__textarea"
                  : "game__textarea-develop"
              }
              value={value}
              onChange={onChange}
              placeholder="Start typing..."
              readOnly={readOnly}
            ></textarea>
          ) : (
            <Links mode={"discover"} ids={ids} />
          )}
          {showButton ? (
            <button
              className={
                match.path === "/discover"
                  ? "game__disabled-discover"
                  : "game__disabled-develop"
              }
            >
              Start typing to begin the game!
            </button>
          ) : null}
          {restartButton ? (
            <button
              className={
                match.path === "/discover"
                  ? "game__button-discover"
                  : "game__button-develop"
              }
              onClick={onClick}
            >
              Restart!
            </button>
          ) : null}
        </section>
      </section>
    </>
  );
};

export default Game;
