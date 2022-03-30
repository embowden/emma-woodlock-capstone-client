import React from "react";
import "animate.css";
import "./type-text.scss";
import arrow from "../../../assets/images/arrow.png";

const TypeText = () => {
  return (
    <article className="type">
      <div className="type__text">
        <p className="type__out">Type out</p>
        <p className="type__this">this text</p>
      </div>
      <img src={arrow} alt="" className="type__arrow" />
    </article>
  );
};

export default TypeText;
