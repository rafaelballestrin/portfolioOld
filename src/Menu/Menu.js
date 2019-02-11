import React from 'react';
import { Link } from 'react-router-dom'
import './Menu.css'
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import contact from '../images/contact.svg';

export default function Menu() {
  return (
    <div className='container'>
      <div className='menu'>
        <div className='menuItem'><Link to='/'>Home</Link></div>
        <div className='menuItem'><Link to='/aboutme'>About Me</Link></div>
        <div className='menuItem'><Link to='/projects'>Projects</Link></div>
        <div className='menuItem'><Link to='/contact'>Contact</Link></div>
      </div>
      <div className='icons'>
      <div className='iconsItem'><img src={linkedin} alt="LinkedIn Logo" /></div>
      <div className='iconsItem'><img src={github} alt="LinkedIn Logo" /></div>
      <div className='iconsItem'><img src={contact} alt="LinkedIn Logo" /></div>
      </div>
    </div>

  )
}
