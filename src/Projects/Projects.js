import React from 'react'
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu'

export default function Projects() {
    return (
        <div className="HomeContent">
            <Menu />
            <h3>Projects</h3>
            <h4>Projects text here!</h4>
            <Link to='/'>Back to Home</Link>
        </div>

    )
}