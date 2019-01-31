import React from 'react';
import Stack from './Stack';
import about from './images/about.svg';
import projects from './images/projects.svg';
import contact from './images/contact.svg';

export default function Gallery() {
    return (
      <div className='container'>
        <Stack name='About me' logo={about} />
        <Stack name='Projects' logo={projects} />
        <Stack name='Contact' logo={contact} />
      </div>
    )
  }
  