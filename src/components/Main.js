import React from 'react';
import './main.css';

function Main(props) {
    return (
        <div className='main'>
            <div className="main-wrapper">
            <div className='left-side'>
                <div className="top-elements">
                    <h2 style={{color:'#2f2f2f'}}>Scripts available</h2>
                    <div className="badge">13</div>
                </div>
                <div className="listitems">
                    <ul>
                        <li className="listitem"><span className="listitem-content">Color contrast</span></li>
                        <li className="listitem"><span className="listitem-content">Focus</span></li>
                    </ul>
                </div>                
            </div>
            <div className='right-side'>
                <div className="script-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                <div className="controls">
                    <button className="button">Copy JS code</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Main;