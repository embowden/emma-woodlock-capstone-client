import React, { useEffect, useState } from "react";
import { API_CODE } from "../../api/endpoints";
import axios from "axios";
import Header from "../Header/Header";
import Animation from "../Animation/Animation";
import Metrics from "../Metrics/Metrics";
import Game from "../Game/Game";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import "./develop.scss";
import tune from "../../assets/audio/dev-theme-tune.mp3";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import restartNoise from "../../assets/audio/restart.wav";

const Develop = ({ match }) => {
  const [id, setId] = useState([]);
  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [chars, setChars] = useState(0);
  const [secs, setSecs] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [gameMode, setGameMode] = useState(10);
  const [musicPlay, setMusicPlay] = useState(false);
  const [music, setMusic] = useState(new Audio(tune));

  // SET LOCAL STORAGE HIGH SCORE
  let score = localStorage.getItem("highScoreDev");
  if (score === null) {
    score = 0;
  } else if (finished && wpm > score) {
    score = Math.round(wpm);
  }
  console.log(score);
  localStorage.setItem("highScoreDev", score);

  // SET LOCAL STORAGE BEST TIME
  let best = localStorage.getItem("highSpeedDev");
  if (best === null) {
    best = 0;
  } else if (finished && secs > best) {
    best = Math.round(secs);
  }
  console.log(best);
  localStorage.setItem("highSpeedDev", best);

  // SET LOCAL STORAGE GAMES WON
  let gamesWon = localStorage.getItem("gamesWonDev");
  const localGamesWon = () => {
    if (gamesWon === null) {
      gamesWon = 1;
    } else gamesWon++;
    console.log(gamesWon);
    localStorage.setItem("gamesWonDev", gamesWon);
  };

  // SET LOCAL STORAGE GAMES LOST
  let gamesLost = localStorage.getItem("gamesLostDev");
  const localGamesLost = () => {
    if (gamesLost === null) {
      gamesLost = 1;
    } else gamesLost++;
    console.log(gamesLost);
    localStorage.setItem("gamesLostDev", gamesLost);
  };

  // SET LOCAL STORAGE TOTAL GAMES PLAYED
  let totalGames = localStorage.getItem("totalGamesDev");
  if (totalGames === null) {
    totalGames = 0;
  } else
    totalGames =
      (gamesWon !== null ? parseInt(gamesWon) : 0) +
      (gamesLost !== null ? parseInt(gamesLost) : 0);
  console.log(totalGames);
  localStorage.setItem("totalGamesDev", totalGames);

  //USE EFFECT TO COLLECT INITIAL DATA
  useEffect(() => {
    getStateData();
  }, []);

  //USE EFFECT TO START TIMER
  useEffect(() => {
    let interval = null;
    if (started) {
      setWpm(calculateWPM());
      setAccuracy(calculateAccuracy());
      interval = setInterval(() => {
        setSecs((secs) => secs + 1);
      }, 1000);
      // console.log(started);
      if (secs === 60) {
        localGamesLost();
        clearInterval(interval);
        setTimeout(() => {
          failMessage();
        }, 9000);
      }
    }
    return () => {
      clearInterval(interval);
    };
  }, [started, secs]);

  //USE EFFECT TO UPDATE STATE WHEN TIMER STOPS
  useEffect(() => {
    if (secs === 60) {
      setStarted(false);
      setFinished(true);
    }
  }, [secs]);

  //USE EFFECTS TO UPDATE GAME MODE
  useEffect(() => {
    console.log(gameMode);
  }, [gameMode]);

  useEffect(() => {
    if (
      (gameMode === 10) & (chars === 50) ||
      (gameMode === 20) & (chars === 100) ||
      (gameMode === 30) & (chars === 150) ||
      (gameMode === 40) & (chars === 200)
    ) {
      winningReset();
      localGamesWon();
      setTimeout(() => {
        winMessage();
      }, 9000);
    }
  }, [gameMode, chars]);

  //USE EFFECT FOR MUSIC
  useEffect(() => {
    if (musicPlay) {
      music.play();
    } else if (!musicPlay) {
      music.pause();
    }
    return () => {
      music.pause();
      console.log("in cleanup");
    };
  }, [musicPlay]);

  //SOUND EFFECTS
  const handleMusic = () => {
    setMusicPlay(!musicPlay);
  };

  //FUNCTION TO SET STATES IF WON BEFORE TIMER
  const winningReset = () => {
    setStarted(false);
    setFinished(true);
    setGameWon(true);
  };

  //GET INITIAL RANDOM SUMMARY
  const getStateData = async () => {
    try {
      const response = await axios.post(API_CODE, {
        id: id,
      });
      setText(response.data.code);
      setId([response.data.id]);
      console.log(id, "id");
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  //GET ANOTHER RANDOM SUMMARY AND CONCATENATE
  const getMoreStateData = async () => {
    try {
      const response = await axios.post(API_CODE, {
        id: id,
      });
      id.push(response.data.id);
      setText(text + " " + response.data.code);
      setId(id);
      console.log(id);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  //RESTART SOUND EFFECT
  let restartSound = new Audio(restartNoise);
  //EVENT HANDLER FOR RESTART BUTTON
  const onRestart = () => {
    restartSound.play();
    setId([]);
    setText("");
    setUserInput("");
    setChars(0);
    setSecs(0);
    setGameWon(false);
    setStarted(false);
    setFinished(false);
    setWpm(0);
    setAccuracy(0);
    setGameMode(10);
    getStateData();
  };

  //EVENT HANDLER FOR USER INPUT CHANGE
  //START COUNTING SECONDS WHEN USER STARTS
  const onUserInputChange = (event) => {
    const value = event.target.value;
    setStarted(true);
    getAnotherSummary(value);
    setUserInput(value);
    setChars(countCorrectChars(value));
  };

  //CALCULATE WPM
  const calculateWPM = () => {
    let value = 0;
    if (chars !== 0 && secs !== 0) {
      value = chars / 5 / (secs / 60);
      return value;
    }
    value = 0;
    return value;
  };

  //CALCULATE ACCURACY
  const calculateAccuracy = () => {
    let acc = 0;
    if (chars !== 0 && userInput.length !== 0) {
      acc = (chars / userInput.length) * 100;
      return acc;
    }
    acc = 0;
    return acc;
  };

  //GRAB ANOTHER SUMMARY FROM SERVER
  const getAnotherSummary = (userInput) => {
    if (userInput.length === text.length) {
      getMoreStateData();
    }
  };

  //COUNT CORRECT CHARACTERS TYPED (W/O WHITE SPACES)
  const countCorrectChars = (userInput) => {
    const data = text.replace(" ", "");
    return userInput
      .replace(" ", "")
      .split("")
      .filter((char, index) => char === data[index]).length;
  };

  // EVENT HANDLER TO GET GAME MODE INFORMATION
  const onUserSelect = (event) => {
    setGameMode(parseInt(event.target.value));
  };

  // GAME WIN OR FAIL ALERTS
  const failMessage = () => {
    Swal.fire({
      color: "#000000",
      title: "Oh no! You ran out of oxygen and the rocket left without you!",
      html: '<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_if8bcea1.json"  background="transparent"  speed="1"  style="width: 150px; height: 150px; margin-left: 150px;"  loop  autoplay></lottie-player>',
      imageAlt: "Custom image",
      confirmButtonText: "Oops!",
      confirmButtonColor: "#000000",
      allowOutsideClick: false,
    });
  };

  const winMessage = () => {
    Swal.fire({
      color: "#000000",
      title: "Congratulations!! You made it to the rocket in time!!",
      html: '<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_iwlmrnb5.json" background="transparent"  speed="1"  style="width: 150px; height: 150px; margin-left: 150px;"  loop  autoplay></lottie-player>',
      imageAlt: "Custom image",
      confirmButtonText: "Awesome!",
      confirmButtonColor: "#000000",
      allowOutsideClick: false,
    });
  };

  return (
    <>
      <Header match={match} userInput={userInput} />
      <div className="dev__toggle">
        <Toggle
          id="music-status"
          defaultChecked={musicPlay}
          onChange={handleMusic}
          className="custom-classname"
        />
        <label className="dev__label" htmlFor="music-status">
          MUSIC
        </label>
      </div>
      <Animation
        characters={chars}
        gameMode={gameMode}
        gameWon={gameWon}
        finished={finished}
        match={match}
      />
      <Metrics
        match={match}
        gameMode={gameMode}
        secs={secs}
        wpm={wpm}
        accuracy={accuracy}
        onUserSelect={onUserSelect}
        characters={chars}
        finished={finished}
        userInput={userInput}
      />
      <Game
        match={match}
        text={text}
        userInput={userInput}
        value={userInput}
        onChange={onUserInputChange}
        readOnly={finished}
        onClick={onRestart}
        ids={id}
        finished={finished}
        started={started}
      />
    </>
  );
};

export default Develop;
