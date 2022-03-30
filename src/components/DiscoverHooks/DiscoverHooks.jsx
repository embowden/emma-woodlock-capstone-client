// import React, { Component } from "react";
import React, { useEffect, useState } from "react";
import Darkmode from "darkmode-js";
import axios from "axios";
import Header from "../Header/Header";
import Animation from "../Animation/Animation";
import Metrics from "../Metrics/Metrics";
import Game from "../Game/Game";

const DiscoverHooks = () => {
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

  //LIGHT AND DARK MODE
  const options = {
    bottom: "480px", // default: '32px'
    // top: "500px",
    right: "5px", // default: '32px'
    // left: "0", // default: 'unset'
    time: "0.5s", // default: '0.3s'
    mixColor: "#fff", // default: '#fff'
    backgroundColor: "#fff", // default: '#fff'
    buttonColorDark: "#100f2c", // default: '#100f2c'
    buttonColorLight: "#fff", // default: '#fff'
    saveInCookies: false, // default: true,
    label: "🌓", // default: ''
    autoMatchOsTheme: true, // default: true
  };

  const darkmode = new Darkmode(options);
  darkmode.showWidget();

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
        alert(
          "Oh no! You ran out of oxygen! The spaceship has left without you!"
        );
      }
    }
    return () => {
      clearInterval(interval);
    };
  }, [started, secs]);

  //USE EFFECT TO UPDATE STATE WHEN TIMER STOPS
  useEffect(() => {
    // console.log("is this working");
    if (secs === 60) {
      setStarted(false);
      setFinished(true);
    }
  }, [secs]);

  //USE EFFECT TO UPDATE GAME MODE
  useEffect(() => {
    console.log(gameMode);
    // console.log(finished);
  }, [gameMode]);

  //USE EFFECT TO TRACK IF GAME IS WON
  useEffect(() => {
    if ((gameMode === 40) & (chars === 200)) {
      winningReset();
      alert("You got to the spaceship in time!");
    } else if ((gameMode === 60) & (chars === 300)) {
      winningReset();
      alert("You got to the spaceship in time!");
    } else if ((gameMode === 80) & (chars === 400)) {
      winningReset();
      alert("You got to the spaceship in time!");
    } else if ((gameMode === 100) & (chars === 500)) {
      winningReset();
      alert("You got to the spaceship in time!");
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
      const response = await axios.post("http://localhost:8080/mdn/summary", {
        id: id,
      });
      setText(response.data.summary);
      setId([response.data.id]);
      console.log(id, "id");
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  //GET ANOTHER RANDOM SUMMARY AND CONCATENATE
  const getMoreStateData = async () => {
    try {
      const response = await axios.post("http://localhost:8080/mdn/summary", {
        id: id,
      });
      id.push(response.data.id);
      setText(text + " " + response.data.summary);
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

  return (
    <>
      <Header />
      <Animation
        characters={chars}
        gameMode={gameMode}
        gameWon={gameWon}
        finished={finished}
      />
      <Metrics
        secs={secs}
        wpm={wpm}
        accuracy={accuracy}
        onUserSelect={onUserSelect}
        characters={chars}
      />
      <Game
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

export default DiscoverHooks;
