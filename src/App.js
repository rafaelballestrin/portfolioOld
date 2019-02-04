import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from './Gallery';
import Details from './Details';
import HomeContent from './HomeContent.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Page">
          <div className="App">
            <Route exact path='/' component={Gallery} />
            <Route exact path='/' component={HomeContent} />
            <Route exact path='/:galleryId' component={Details} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
