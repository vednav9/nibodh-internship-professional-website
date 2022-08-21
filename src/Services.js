import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import servicesbanner from './Car/servicesbanner3.jpg';

function Services() {
    return (
        <div className='Services'>
            <h1 className='services-banner-text'>Services</h1>
            <img src={servicesbanner} alt='servicesbanner' className='services-banner' />
            <div className='services-text'>Our two Services</div>
            <Link to="/Warranty">
                <div className='services-warranty'>
                    <div className='services-warranty-text'>Warranty</div>
                </div>
            </Link>
            <Link to="/ServiceandRepair">
                <div className='services-sandr'>
                    <div className='services-sandr-text'>Service and Repair</div>
                </div>
            </Link>
        </div>
    );
}

export default Services;