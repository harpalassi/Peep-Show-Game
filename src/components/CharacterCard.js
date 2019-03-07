import React from "react";

function CharacterCard(props) {
  return (
    <div>
      <div className="col-sm-3">
        <div className="character">
          <img
            alt={props.name}
            src={props.image}
            onClick={() => props.onClick(props.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
