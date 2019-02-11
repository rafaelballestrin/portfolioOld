import React from 'react';
import './Footer.css'
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import contact from '../images/contact.svg';

export default function Footer() {
    return (
      <div>
        <div className='footer'>
        <div className='footer'><img src={linkedin} alt="LinkedIn Logo" /></div>
        <div className='footer'><img src={github} alt="LinkedIn Logo" /></div>
        <div className='footer'><img src={contact} alt="LinkedIn Logo" /></div>
        </div>
      </div>
      
    )
  }
  