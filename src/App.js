import React, { Component } from 'react';
import Stack from './Stack';
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
          <Stack name='About me' logo={about} />
          <Stack name='Projects' logo={projects} />
          <Stack name='Contact' logo={contact} />
        </div>
      </div>

    );
  }
}

export default App;
