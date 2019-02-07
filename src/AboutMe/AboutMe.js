import React from 'react'
import { Link } from 'react-router-dom';

export default function AboutMe() {
    return (
        <div className="HomeContent">
            <h3>About Me</h3>
            <h4>About Me text here!</h4>
            <Link to='/'>Back to Home</Link>
        </div>

    )
}


