import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Animation from "../Animation/Animation";
import Metrics from "../Metrics/Metrics";
import Game from "../Game/Game";
import Play from "../Play/Play";
// import "./discover.scss";

export default class Discover extends Component {
  render() {
    return (
      <>
        <Header />
        <Animation />
        <Metrics />
        <Game />
        <Play />
      </>
    );
  }
}
