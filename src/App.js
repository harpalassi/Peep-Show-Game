import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar'
import Instructions from './components/Instructions'
import CardContainer from './components/CardContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
      <Navbar />
      <Instructions />
      <CardContainer />
      </Wrapper>
    );
  }
}

export default App;
