import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";
import Footer from './components/Footer'

class App extends Component {
  state = {
    characters,
    label: "Click an image to begin!",
    score: 0,
    topScore: 0,
    hasBeenClicked: []
  };

  handleClick = id => {
    const { hasBeenClicked, topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;

    if (hasBeenClicked.length === 12) {
      this.resetGame();
    } else if (hasBeenClicked.includes(id)) {
      this.resetGame();
    } else {
      hasBeenClicked.push(id);
      this.setState({ hasBeenClicked, score: newScore, topScore: newTopScore});
      console.log(this.state.hasBeenClicked);
      console.log("clicked #", id);
      this.shuffleCards();
    }
  };

  resetGame = () => {
    this.shuffleCards();
    this.setState({ hasBeenClicked: [], score: 0 });
  };

  // winGame = () => {
  //   this.shuffleCards();
  //   this.setState({ hasBeenClicked: [], score: 0 });
  // };

  shuffleCards = () => {
    const cast = this.state.characters;

    for (let i = cast.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cast[i], cast[j]] = [cast[j], cast[i]];
    }
    this.setState({ characters: cast });
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          label={this.state.label}
        />
        <Header />
        <CardContainer>
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              name={character.name}
              key={character.name}
              image={character.image}
              onClick={this.handleClick}
            />
          ))}
        </CardContainer>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
