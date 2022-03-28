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
        {!started ? (
          <button disabled>Start typing to begin the game!</button>
        ) : (
          <button onClick={onClick}>Restart!</button>
        )}
      </section>
    </>
  );
};

export default Game;
