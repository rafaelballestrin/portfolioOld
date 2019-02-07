import React from 'react'
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div className="HomeContent">
            <h3>Contact</h3>
            <h4>Contact text here!</h4>
            <Link to='/'>Back to Home</Link>
        </div>

    )
}