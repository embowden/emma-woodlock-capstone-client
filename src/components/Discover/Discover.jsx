import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Animation from "../Animation/Animation";
import Metrics from "../Metrics/Metrics";
import Game from "../Game/Game";
import Play from "../Play/Play";
// import "./discover.scss";

export default class Discover extends Component {
  state = {
    started: false,
    words: "",
    inputValue: "",
    isValidInput: false,
    activeWord: "",
    typed: "",
    lastTyped: true,
    correctlyTyped: "",
    time: 60,
    cpm: 0,
    accuracy: 0,
  };

  render() {
    return (
      <>
        <Header />
        <Animation />
        <Metrics
          time={this.state.time}
          wpm={this.state.wpm}
          accuracy={this.state.accuracy}
        />
        <Game />
        <Play />
      </>
    );
  }
}
