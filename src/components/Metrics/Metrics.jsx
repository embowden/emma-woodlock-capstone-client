import React from "react";
import SelectSpeed from "../Widgets/SelectSpeed/SelectSpeed";
import Score from "../Widgets/Score/Score";
import "./metrics.scss";

const Metrics = ({ secs, wpm, accuracy, onUserSelect, match }) => {
  return (
    <section className="metrics">
      <Score />
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
          className={
            match.path === "/discover"
              ? "metrics__options-discover"
              : "metrics__options-develop"
          }
          name=""
          onChange={onUserSelect}
        >
          <option value="40">40WPM</option>
          <option value="60">60WPM</option>
          <option value="80">80WPM</option>
          <option value="100">100WPM</option>
        </select>
      </form>
      <SelectSpeed />
    </section>
  );
};

export default Metrics;
