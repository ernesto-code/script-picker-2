import React from 'react';
import './header.css';

function Header(props) {
    return (
        <div className='header'>
            <div className='header-text-wrapper'>
                <h1>Script picker</h1>
                <span className='version'>(1.x.x)</span>
            </div>
        </div>
    );
}

export default Header;