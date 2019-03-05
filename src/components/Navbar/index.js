import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
  state = {
    label: "Click an image to begin!",
    score: 0,
    topScore: 0
  };

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li className="title">PEEP SHOW</li>
          <li>{this.state.label}</li>
          <li>
            Score: {this.state.score}  |  Top Score: {this.state.topScore}
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
