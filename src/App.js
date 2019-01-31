import React, { Component } from 'react';
import front from './images/front.png';
import logo from './images/rbLogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div className='logo'>
            <img src={logo} alt='logo'></img>
          </div>
          <div>
            <h4>Home  Projects  Contact</h4>
          </div>
          <h1>Hello, my name is Rafael. I'm a Front End Developer living in London, UK.</h1>
          <div className='logo'><img src={front} alt='front end' /></div>
        </div>
      </div>
    );
  }
}

export default App;
