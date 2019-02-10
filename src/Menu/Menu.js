import React from 'react';
import { Link } from 'react-router-dom'
import './Menu.css'

import Stack from '../Stack';
import about from '../images/aboutMe.svg';
import projects from '../images/projects.svg';
import contact from '../images/contact.svg';

export default function Gallery() {
  return (
    <div>
      {/*
      <div className='menu'>
        <Stack id='aboutme' name='About me' logo={about} />
        <Stack id='projects' name='Projects' logo={projects} />
        <Stack id='contact' name='Contact' logo={contact} />
      </div>
      */}
      <div className='menu'>
      <div className='menuItem'><Link to='/'>Home</Link></div>
      <div className='menuItem'><Link to='/aboutme'>About Me</Link></div>
      <div className='menuItem'><Link to='/projects'>Projects</Link></div>
      <div className='menuItem'><Link to='/contact'>Contact</Link></div>
      </div>
    </div>
    
  )
}

// function getGallery() {
//   return [
//     {id: 'aboutme',  name: 'About Me', logo: about },
//     {id: 'projects', name: 'Projects', logo: projects},
//     {id: 'contact', name: 'Contact', logo: contact},
//   ]
// }
