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
    <nav className="navbar navbar-fixed-top">
    <div className="container">
     <ul className="navbar-nav">
     <span class="navbar-brand mb-0 h1">Peep Show Clicky Game</span>
        <li className="navbar-item">
        {this.state.label}</li>
        <li className="navbar-item">
        Score: {this.state.score} | Top Score: {this.state.topScore}</li>
    </ul>
    </div>
    </nav>
        
    )
}

}
export default Navbar;
