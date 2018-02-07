import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

const Menu = () => {
    return (
        <div className='menu'>
            <NavLink exact to='/' className='item' activename='active'>Welcom</NavLink>
            <NavLink to='/board' className='item' activename='active'>Flight Board</NavLink>
            <NavLink to='/ticker' className='item' activename='active'>Flight Ticker</NavLink>
            <NavLink to='/about' className='item' activename='active'>About</NavLink>
            <NavLink to='/login' className='item' activename='active'>Login</NavLink>
        </div>
    );
};

export default Menu;