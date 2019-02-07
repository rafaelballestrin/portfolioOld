import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from './Details';
import HomeContent from './HomeContent/HomeContent.js';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='Page'>
          <div className='App'>
            <Route exact path='/' component={HomeContent} />
            <Route exact path='/galleryId' component={Details} />
            <Route exact path='/aboutme' component={AboutMe} />
            <Route exact path='/projects' component={Projects} />     
            <Route exact path='/contact' component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
