import React from "react";
import SelectSpeed from "../Widgets/SelectSpeed/SelectSpeed";
import Score from "../Widgets/Score/Score";
import "./metrics.scss";

const Metrics = ({
  secs,
  wpm,
  accuracy,
  onUserSelect,
  match,
  finished,
  userInput,
  gameMode,
}) => {
  console.log("game speed: ", gameMode);
  return (
    <section className="metrics">
      {finished ? <Score /> : null}
      <form
        className={
          match.path === "/discover"
            ? "metrics__form-discover"
            : "metrics__form-develop"
        }
        action=""
      >
        <p>{secs} seconds</p>
        <p>{Math.round(wpm)} WPM</p>
        <p>{Math.round(accuracy)}%</p>
        <select
          defaultValue={`${gameMode.toString()}`}
          value={`${gameMode.toString()}`}
          className={
            match.path === "/discover"
              ? "metrics__options-discover"
              : "metrics__options-develop"
          }
          name=""
          onChange={onUserSelect}
        >
          {match.path === "/discover" ? (
            <>
              <option value="40">40WPM</option>
              <option value="60">60WPM</option>
              <option value="80">80WPM</option>
              <option value="100">100WPM</option>
            </>
          ) : (
            <>
              <option value="10">10WPM</option>
              <option value="20">20WPM</option>
              <option value="30">30WPM</option>
              <option value="40">40WPM</option>
            </>
          )}
        </select>
      </form>
      {userInput.length > 0 ? null : <SelectSpeed />}
    </section>
  );
};

export default Metrics;
