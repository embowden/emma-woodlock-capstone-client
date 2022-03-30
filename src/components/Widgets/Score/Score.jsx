import React from "react";
import "animate.css";
import "./score.scss";
import arrow from "../../../assets/images/arrow.png";

const Score = () => {
  return (
    <article className="score">
      <div className="score__text">
        <p className="score__out">check out your</p>
        <p className="score__this">final score!</p>
      </div>
      <img src={arrow} alt="" className="score__arrow" />
    </article>
  );
};

export default Score;
