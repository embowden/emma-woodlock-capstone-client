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
import gameNoise from "../../assets/audio/game-button.wav";

const User = () => {
  //COLLECT USER NAME
  let playerName = localStorage.getItem("username");
  //COLLECT LOCAL STORAGE DISCOVERY
  let scoreDisc = localStorage.getItem("highScoreDisc");
  let speedDisc = localStorage.getItem("highSpeedDisc");
  let gamesWonDisc = localStorage.getItem("gamesWonDisc");
  let gamesLostDisc = localStorage.getItem("gamesLostDisc");
  let totalGamesDisc = localStorage.getItem("totalGamesDisc");
  //COLLECT LOCAL STORAGE DEVELOPER
  let scoreDev = localStorage.getItem("highScoreDev");
  let speedDev = localStorage.getItem("highSpeedDev");
  let gamesWonDev = localStorage.getItem("gamesWonDev");
  let gamesLostDev = localStorage.getItem("gamesLostDev");
  let totalGamesDev = localStorage.getItem("totalGamesDev");
  //COLLECT LOCAL STORAGE TOTAL VISITS
  let visitCount = localStorage.getItem("visitCount");

  //GAME NOISE ON CLICK EVENT
  let gameSound = new Audio(gameNoise);
  const handleSound = () => {
    gameSound.play();
  };

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
            <div className="user__spacer"></div>
            <p className="user__discover">DISCOVER</p>
            <p className="user__develop">DEVELOPER</p>
          </div>
          <div className="user__score">
            <img src={highScore} alt="" className="user__icon" />
            <h4 className="user__subtitle">High Score</h4>
            <p className="user__value">{scoreDisc} WPM</p>
            <p className="user__value">{scoreDev} WPM</p>
          </div>
          <div className="user__score">
            <img src={bestTime} alt="" className="user__icon" />
            <h4 className="user__subtitle">Best Time</h4>
            <p className="user__value">{speedDisc} Secs</p>
            <p className="user__value">{speedDev} Secs</p>
          </div>
          <div className="user__score">
            <img src={totalGames} alt="" className="user__icon" />
            <h4 className="user__subtitle">Total Games</h4>
            <p className="user__value">{totalGamesDisc}</p>
            <p className="user__value">{totalGamesDev}</p>
          </div>
          <div className="user__score">
            <img src={gamesWon} alt="" className="user__icon" />
            <h4 className="user__subtitle">Games Won</h4>
            <p className="user__value">
              {gamesWonDisc !== null ? gamesWonDisc : 0}
            </p>
            <p className="user__value">
              {gamesWonDev !== null ? gamesWonDev : 0}
            </p>
          </div>
          <div className="user__score">
            <img src={gamesLost} alt="" className="user__icon" />
            <h4 className="user__subtitle">Games Lost</h4>
            <p className="user__value">
              {gamesLostDisc !== null ? gamesLostDisc : 0}
            </p>
            <p className="user__value">
              {gamesLostDev !== null ? gamesLostDev : 0}
            </p>
          </div>
          <div className="user__score--special">
            <img src={totalDays} alt="" className="user__icon" />
            <h4 className="user__subtitle">Site Visits</h4>
            <p className="user__value">{visitCount}</p>
          </div>
        </article>
        <Link onClick={handleSound} to="/discover" className="user__return">
          BACK TO THE GAME
        </Link>
      </section>
    </section>
  );
};

export default User;
