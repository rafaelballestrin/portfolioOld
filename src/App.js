import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from './Gallery';
import Details from './Details';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <h1>Hello, my name is Rafael. I'm a Front End Developer living in London, UK.</h1>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/details' component={Details} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
