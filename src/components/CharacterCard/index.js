import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
  

          <div className="col-3">
                <div className="character">

        <img alt={props.name} src={props.image} />
      </div>
      </div>
  );
}

export default CharacterCard;
