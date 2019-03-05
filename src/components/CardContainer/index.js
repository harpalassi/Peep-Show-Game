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
        
        {this.state.characters.map(character =>
            <CharacterCard 
            id={character.id}
            name={character.name}
            key={character.name}
            image={character.image}/>)}
        </div>
    )
}

}
export default CardContainer;
