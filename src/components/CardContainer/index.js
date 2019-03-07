import React from "react";
import "./style.css";



function CardContainer(props) {
   
    return (
        <div className="cards">
        <div className="container mt-3">
          <div className="row justify-content-center">
                {props.children}
        </div>
        <div className="w-100 d-none d-md-block"></div>
        </div>
        </div>
    )
}

export default CardContainer;
