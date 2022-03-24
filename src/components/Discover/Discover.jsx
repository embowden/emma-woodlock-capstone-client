import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Animation from "../Animation/Animation";
import Metrics from "../Metrics/Metrics";
import Game from "../Game/Game";
import Play from "../Play/Play";
import "./discover.scss";
//IMPORTS FOR GAME
import Preview from "../Preview/Preview";

const initialState = {
  text: "Test",
  userInput: "",
  chars: 0,
  secs: 0,
  started: false,
  finished: false,
};

export default class Discover extends Component {
  state = initialState;

  componentDidMount() {
    console.log("mounted!");
    this.getStateData();
  }

  componentDidUpdate() {}

  //GET RANDOM SUMMARY
  getStateData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/mdn/summary");
      this.setState({ text: response.data });
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  //GET ANOTHER SUMMARY AND CONCATENATE
  getMoreStateData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/mdn/summary");
      this.setState({ text: this.state.text + " " + response.data });
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  //EVENT HANDLER FOR RESTART BUTTON
  onRestart = () => {
    this.setState(initialState);
    this.updateStateData();
  };

  //EVENT HANDLER FOR USER INPUT CHANGE
  //START COUNTING SECONDS WHEN USER STARTS
  onUserInputChange = (event) => {
    const value = event.target.value;
    this.setTime();
    this.getAnotherSummary(value);
    // this.onFinish(value);
    this.setState({ userInput: value, chars: this.countCorrectChars(value) });
  };

  //START TIME COUNTER
  setTime = () => {
    if (!this.state.started) {
      this.setState({ started: true });
      this.interval = setInterval(() => {
        this.setState((prevProps) => {
          return { secs: prevProps.secs + 1 };
        });
      }, 1000);
    }
  };

  getAnotherSummary = (userInput) => {
    if (userInput.length === this.state.text.length) {
      this.getMoreStateData();
    }
  };

  //CHECK IF USER HAS FINISHED TYPING
  // onFinish = () => {
  //   if (this.state.secs === 60) {
  //     clearInterval(this.interval);
  //     this.setState({ finished: true });
  //     alert("finished typing!");
  //   }
  // };

  //COUNT CORRECT CHARACTERS TYPED (W/O WHITE SPACES)
  countCorrectChars = (userInput) => {
    const text = this.state.text.replace(" ", "");
    return userInput
      .replace(" ", "")
      .split("")
      .filter((char, index) => char === text[index]).length;
  };

  render() {
    // this.onFinish();
    return (
      <>
        <Header />
        <Animation />
        <Metrics secs={this.state.secs} chars={this.state.chars} />
        <section className="game">
          <Preview text={this.state.text} userInput={this.state.userInput} />
          <textarea
            value={this.state.userInput}
            onChange={this.onUserInputChange}
            placeholder="Start typing..."
            readOnly={this.state.finished}
          ></textarea>
          <button onClick={this.onRestart}>Restart</button>
        </section>
        {/* <Game />
        <Play /> */}
      </>
    );
  }
}
