// import React, { Component } from "react";
import React, { useEffect, useState, useRef } from "react";
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
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  useEffect(() => {
    getStateData();
  }, []);

  //CANT GET THIS BULLSHIT TO FKIN WORK
  //WILL NOT STOP BLOODY TICKING

  useEffect(() => {
    let interval = null;
    if (started) {
      interval = setInterval(() => {
        setSecs((secs) => secs + 1);
      }, 1000);
    } else if (secs == 10) {
      alert("is this fkin working?");
    } else if (!started && secs !== 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [started, secs]);

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
    setStarted(false);
    setFinished(false);
    setWpm(0);
    setAccuracy(0);
    getStateData();
  };

  //EVENT HANDLER FOR USER INPUT CHANGE
  //START COUNTING SECONDS WHEN USER STARTS
  const onUserInputChange = (event) => {
    const value = event.target.value;
    // setTime();
    setStarted(true);
    // toggleStarted();
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

  //START TIME COUNTER
  const oldTime = () => {
    if (!started) {
      this.setState({ started: true });
      this.interval = setInterval(() => {
        this.setState((prevProps) => {
          if (this.state.secs === 60) {
            clearInterval(this.interval);
            return { finished: true, secs: prevProps.secs };
          } else if (this.state.secs >= 0) {
            return {
              secs: prevProps.secs + 1,
              wpm: this.calculateWPM(),
              accuracy: this.calculateAccuracy(),
            };
          }
        });
      }, 1000);
    }
  };

  //   const setTime = () => {
  //     if (!started) {
  //       setStarted(true);
  //       const interval = setInterval(() => {
  //         setSecs(() => {
  //           if (secs === 60) {
  //             clearInterval(interval);
  //             return prevTime;
  //           } else if (secs >= 0) {
  //             console.log(prevTime + 1);
  //             return prevTime + 1;
  //           }
  //         });
  //       }, 1000);
  //     }
  //   };

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

  return (
    <>
      <Header />
      <Animation />
      <Metrics secs={secs} wpm={wpm} accuracy={accuracy} />
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
