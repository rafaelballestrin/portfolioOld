import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Details extends Component {
  
  constructor() {
    super();
    this.state = {
      welcomeMessage: 'page details'
    };
  }

  componentDidMount() {
    // let galleryId = this.props.match.params.galleryId;

  }

  render() {
    return (
      <div>
      <h1>Details page!</h1>
      <Link to='/'>Back to Home</Link> 
    </div>
    )
  }
}

