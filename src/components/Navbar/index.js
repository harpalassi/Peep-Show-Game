import React, { Component } from "react";
import "./style.css";



class Navbar extends Component {

    state = {
        label: "Click a card to Begin!",
        score: 0,
        topScore: 0
    }

    render() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <ul className="navbar-nav">
     <li className="navbar-item mx-auto">
        Peep Show Clicky Game</li>
        <li className="navbar-item">
        {this.state.label}</li>
        <li className="navbar-item">
        Score: {this.state.score} | Top Score: {this.state.topScore}</li>
    </ul>
    </nav>
        
    )
}

}
export default Navbar;
