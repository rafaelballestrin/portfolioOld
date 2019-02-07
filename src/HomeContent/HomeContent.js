import React from 'react';
import Menu from '../Menu/Menu';
import ComputerImg from '../images/computerDev.svg';

export default function HomeContent() {
    return (
        <div className='HomeContent'>
            <Menu />
            <div className='wrap'>
                <div className='left'>
                    <h3>Home Content</h3>
                    <h4>I'm a Front-end Developer living in London!</h4>
                </div>
                <div className='right'>
                    <img src={ComputerImg} alt='' />
                </div>
            </div>
        </div>
    )
}