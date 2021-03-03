import React from 'react';
import {FaBehance} from 'react-icons/fa';
import './header.scss';

export const Header = ()=>{
    return <header className="header">
        <div className="header-inner-container">
        <span className="logo">
            <FaBehance size="24px" />
        </span>
    <nav>
        <ul>
            <li> <a href="#"> Home </a></li>
            <li> <a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Find us</a></li>
        </ul>
    </nav>
        </div>
</header>
};



