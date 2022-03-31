import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Animation from "../Animation/Animation";
import Metrics from "../Metrics/Metrics";
import Game from "../Game/Game";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
// import "./develop.scss";

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
  const [gameMode, setGameMode] = useState(40);

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
      (gameMode === 20) & (chars === 100) ||
      (gameMode === 30) & (chars === 150) ||
      (gameMode === 40) & (chars === 200) ||
      (gameMode === 50) & (chars === 250)
    ) {
      winningReset();
      setTimeout(() => {
        winMessage();
      }, 9000);
    }
  }, [gameMode, chars]);

  //FUNCTION TO SET STATES IF WON BEFORE TIMER
  const winningReset = () => {
    setStarted(false);
    setFinished(true);
    setGameWon(true);
  };

  //GET INITIAL RANDOM SUMMARY
  const getStateData = async () => {
    try {
      const response = await axios.post("http://localhost:8080/mdn/code", {
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
      const response = await axios.post("http://localhost:8080/mdn/code", {
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

  //EVENT HANDLER FOR RESTART BUTTON
  const onRestart = () => {
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
    setGameMode(40);
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
      <Animation
        characters={chars}
        gameMode={gameMode}
        gameWon={gameWon}
        finished={finished}
        match={match}
      />
      <Metrics
        match={match}
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
