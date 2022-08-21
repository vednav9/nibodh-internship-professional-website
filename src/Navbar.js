import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Car/BMW logo 5.png';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <ul className='navbar'>
                <li><Link to="/"><img src={logo} alt='logo' className='bmwlogo' /></Link></li>
                <li className='li' id='home'><Link to="/">Home</Link></li>
                <li className='li' id='models'><Link to="/models">Models</Link></li>
                <li className='li' id='services'><Link to="/services">Services</Link></li>
                <li className='li' id='about'><Link to="/about">About</Link></li>
                <li className='li' id='contact'><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;