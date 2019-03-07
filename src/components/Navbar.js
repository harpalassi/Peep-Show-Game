import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="title">PEEP SHOW</li>
        <li>{props.label}</li>
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
