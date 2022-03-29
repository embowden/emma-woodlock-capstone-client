import React from "react";
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

  return (
    <>
      <section className="game">
        <Preview text={text} userInput={userInput} />
        {!finished ? (
          <textarea
            value={value}
            onChange={onChange}
            placeholder="Start typing..."
            readOnly={readOnly}
          ></textarea>
        ) : (
          <Links mode={"discover"} ids={ids} />
        )}
        {showButton ? (
          <button className="game__disabled">
            Start typing to begin the game!
          </button>
        ) : null}
        {restartButton ? <button onClick={onClick}>Restart!</button> : null}
      </section>
    </>
  );
};

export default Game;
