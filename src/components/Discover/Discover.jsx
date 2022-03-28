import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Animation from "../Animation/Animation";
import Metrics from "../Metrics/Metrics";
// import Game from "../Game/Game";
// import Play from "../Play/Play";
import "./discover.scss";
//IMPORTS FOR GAME
import Preview from "../Preview/Preview";

const initialState = {
  id: [],
  text: "",
  userInput: "",
  chars: 0,
  secs: 0,
  started: false,
  finished: false,
  wpm: 0,
  accuracy: 0,
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
      const response = await axios.post("http://localhost:8080/mdn/summary", {
        id: this.state.id,
      });
      this.setState({
        text: response.data.summary,
        id: [response.data.id],
      });
      console.log(this.state.id, "id");
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  //GET ANOTHER SUMMARY AND CONCATENATE
  getMoreStateData = async () => {
    try {
      const response = await axios.post("http://localhost:8080/mdn/summary", {
        id: this.state.id,
      });
      this.state.id.push(response.data.id);
      this.setState({
        text: this.state.text + " " + response.data.summary,
        id: this.state.id,
      });
      console.log(this.state.id);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  //EVENT HANDLER FOR RESTART BUTTON
  onRestart = () => {
    this.setState(initialState);
    this.getStateData();
  };

  //EVENT HANDLER FOR USER INPUT CHANGE
  //START COUNTING SECONDS WHEN USER STARTS
  onUserInputChange = (event) => {
    const value = event.target.value;
    this.setTime();
    this.getAnotherSummary(value);
    this.setState({
      userInput: value,
      chars: this.countCorrectChars(value),
    });
  };

  //CALCULATE WPM
  calculateWPM = () => {
    let value = 0;
    if (this.state.chars !== 0 && this.state.secs !== 0) {
      value = this.state.chars / 5 / (this.state.secs / 60);
      return value;
    }
    value = 0;
    return value;
  };

  //CALCULATE ACCURACY
  calculateAccuracy = () => {
    let acc = 0;
    if (this.state.chars !== 0 && this.state.userInput.length !== 0) {
      acc = (this.state.chars / this.state.userInput.length) * 100;
      return acc;
    }
    acc = 0;
    return acc;
  };

  //START TIME COUNTER
  setTime = () => {
    if (!this.state.started) {
      this.setState({ started: true });
      this.interval = setInterval(() => {
        this.setState((prevProps) => {
          if (this.state.secs === 60) {
            clearInterval(this.interval);
            // alert(`Your WPM is ${this.state.wpm}, your accuracy is ${this.state.accuracy}%`)
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

  //GRAB ANOTHER SUMMARY FROM SERVER
  getAnotherSummary = (userInput) => {
    if (userInput.length === this.state.text.length) {
      this.getMoreStateData();
    }
  };

  //COUNT CORRECT CHARACTERS TYPED (W/O WHITE SPACES)
  countCorrectChars = (userInput) => {
    const text = this.state.text.replace(" ", "");
    return userInput
      .replace(" ", "")
      .split("")
      .filter((char, index) => char === text[index]).length;
  };

  render() {
    return (
      <>
        <Header />
        <Animation />
        <Metrics
          secs={this.state.secs}
          wpm={this.state.wpm}
          accuracy={this.state.accuracy}
        />
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
