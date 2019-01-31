import React, { Component } from 'react';
import front from './images/front.png';
import about from './images/about.svg';
import projects from './images/projects.svg';
import contact from './images/contact.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Hello, my name is Rafael. I'm a Front End Developer living in London, UK.</h1>
        </div>
        <div className='container'>
          <div className='item'><img src={about} alt='about' /></div>
          <div className='item'><img src={projects} alt='projects' /></div>
          <div className='item'><img src={contact} alt='contact' /></div>
        </div>
      </div>
    );
  }
}

export default App;
