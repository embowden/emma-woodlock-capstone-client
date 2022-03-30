import React from "react";
import "animate.css";
import "./select-speed.scss";
import arrow from "../../../assets/images/arrow.png";

const SelectSpeed = () => {
  return (
    <article className="speed">
      <img src={arrow} alt="" className="speed__arrow" />
      <p className="speed__select">Pick your speed</p>
    </article>
  );
};

export default SelectSpeed;
