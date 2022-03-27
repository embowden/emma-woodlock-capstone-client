import React from "react";
import "./metrics.scss";

const Metrics = ({ secs, chars, userInput, handleWPM }) => {
  let wpm = () => {
    if (chars !== 0 && secs !== 0) {
      return chars / 5 / (secs / 60);
    }
    return 0;
  };

  let accuracy = () => {
    if (chars !== 0 && userInput.length !== 0) {
      return (accuracy = (chars / userInput.length) * 100);
    }
    return 0;
  };

  return (
    <section className="metrics">
      <form className="metrics__form" action="">
        <p>{secs} seconds</p>
        <p>{Math.round(wpm())} WPM</p>
        <p>{Math.round(accuracy())}%</p>
        <select name="">
          <option value="40">40WPM</option>
          <option value="60">60WPM</option>
          <option value="80">80WPM</option>
          <option value="100">100WPM</option>
        </select>
      </form>
    </section>
  );

  return null;
};

export default Metrics;
