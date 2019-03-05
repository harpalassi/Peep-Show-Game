import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar'
import Header from './components/Header'
import CardContainer from './components/CardContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
      <Navbar />
      <Header />
      <CardContainer />
      </Wrapper>
    );
  }
}

export default App;
