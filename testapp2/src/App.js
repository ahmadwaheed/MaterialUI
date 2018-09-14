import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gridd from './gridding';
import Price from './pricing';
import Photo from './photo';
import Badges from './badges';
import Progress from './progress';
import Tables from './tables';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Gridd />
        <br></br><br></br><br></br>
        <Price />
        <br></br><br></br><br></br>
        <Photo />
        <br></br><br></br><br></br>
        <Badges />
        <br></br><br></br><br></br>
        <Tables />
        <br></br><br></br><br></br>
        <Progress />
        <br></br><br></br><br></br>
      </div>
    );
  }
}

export default App;
