import React from 'react';
import './Routes.css';

const Main = () => {
    return (
        <div className='content-main'>
        <div className='content-div'>
            <p><h2>Welcome to Flight Ticker System!</h2></p>
            <p>This system consisted of Flight Board and Ticker.</p>
            <p><h3>Flight Board</h3>
            For control maintance dept.<br/>
            Show all flight about selected stations, Inbound flight and Outbound flight.<br/>
            Administrator can manage worker for each flight.<br/>
            and leave message and mark daily check flight.<br/>
            Everything is maid by standart javascript so can be normally loaded on portable device.<br/>
            </p>
        </div>
        </div>
    );
};

export default Main;