import React from "react";
import "./metrics.scss";

const Metrics = ({ secs, wpm, accuracy, onUserSelect }) => {
  return (
    <section className="metrics">
      <form className="metrics__form" action="">
        <p>{secs} seconds</p>
        <p>{Math.round(wpm)} WPM</p>
        <p>{Math.round(accuracy)}%</p>
        <select className="metrics__options" name="" onChange={onUserSelect}>
          <option value="40">40WPM</option>
          <option value="60">60WPM</option>
          <option value="80">80WPM</option>
          <option value="100">100WPM</option>
        </select>
      </form>
    </section>
  );
};

export default Metrics;
