import React from "react";
import "./user.scss";
import { Link } from "react-router-dom";
import UserPic from "../Widgets/UserPic/UserPic";
import bestTime from "../../assets/images/best-time.png";
import gamesLost from "../../assets/images/games-lost.png";
import gamesWon from "../../assets/images/games-won.png";
import highScore from "../../assets/images/high-score.svg";
import totalDays from "../../assets/images/total-days.png";
import totalGames from "../../assets/images/total-games.png";

const User = () => {
  //COLLECT LOCAL STORAGE
  let scoreDisc = localStorage.getItem("highScoreDisc");
  let speedDisc = localStorage.getItem("highSpeedDisc");
  let playerName = localStorage.getItem("username");

  return (
    <section className="user">
      <section className="user__container">
        <div className="user__animation">
          <UserPic />
        </div>
        <h1 className="user__title">
          {!playerName ? "( user )" : `( ${playerName} )`}
        </h1>
        <article className="user__stats">
          <div className="user__score">
            <img src={highScore} alt="" className="user__icon" />
            <h4 className="user__subtitle">High Score</h4>
            <p className="user__value">{scoreDisc} WPM</p>
          </div>
          <div className="user__score">
            <img src={bestTime} alt="" className="user__icon" />
            <h4 className="user__subtitle">Best Time</h4>
            <p className="user__value">{speedDisc} Seconds</p>
          </div>
          <div className="user__score">
            <img src={totalGames} alt="" className="user__icon" />
            <h4 className="user__subtitle">Total Games</h4>
            <p className="user__value">37</p>
          </div>
          <div className="user__score">
            <img src={gamesWon} alt="" className="user__icon" />
            <h4 className="user__subtitle">Games Won</h4>
            <p className="user__value">30</p>
          </div>
          <div className="user__score">
            <img src={gamesLost} alt="" className="user__icon" />
            <h4 className="user__subtitle">Games Lost</h4>
            <p className="user__value">7 WPM</p>
          </div>
          <div className="user__score">
            <img src={totalDays} alt="" className="user__icon" />
            <h4 className="user__subtitle">Days Played</h4>
            <p className="user__value">6</p>
          </div>
        </article>
        <Link to="/discover" className="user__return">
          BACK TO THE GAME
        </Link>
      </section>
    </section>
  );
};

export default User;
