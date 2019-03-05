import React, { Component } from "react";
import "./style.css";
import characters from '../../characters.json'
import CharacterCard from '../CharacterCard'


class CardContainer extends Component {

    state = {
       characters
    }

    render() {
    return (
        <div className="container">
          <div className="row align-items-center">
        
        {this.state.characters.map(character =>
            <CharacterCard 
            id={character.id}
            name={character.name}
            key={character.name}
            image={character.image}/>)}
        </div>
        </div>
    )
}

}
export default CardContainer;
