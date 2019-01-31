import React, { Component } from 'react';
import front from './images/front.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Hello, my name is Rafael. I'm a Front End Developer living in London, UK.</h1>
          <img src={front} alt ='front end' />
        </div>
      </div>
    );
  }
}

export default App;
