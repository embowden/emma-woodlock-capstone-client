import React from "react";
import "./metrics.scss";

const Metrics = () => {
  return (
    <section className="metrics">
      <form className="metrics__form" action="">
        <p>{`60 seconds`}</p>
        <p>{`100 WPM`}</p>
        <p>{`95%`}</p>
        <select name="">
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
