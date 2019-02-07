import React from 'react';
import Stack from '../Stack';
import about from '../images/about.svg';
import projects from '../images/projects.svg';
import contact from '../images/contact.svg';

export default function Gallery() {
  return (
    <div>
      <div className='container'>
        <Stack id='aboutme' name='About me' logo={about} />
        <Stack id='projects' name='Projects' logo={projects} />
        <Stack id='contact' name='Contact' logo={contact} />
      </div>
    </div>
  )
}

function getGallery() {
  return [
    {id: 'aboutme',  name: 'About Me', logo: about },
    {id: 'projects', name: 'Projects', logo: projects},
    {id: 'contact', name: 'Contact', logo: contact},
  ]
}
