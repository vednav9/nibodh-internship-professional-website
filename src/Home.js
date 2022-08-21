import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import bannerimg from './Car/bannerimage.jpg';
import homebmwi from './Car/homebmwi.png';
import homeabout from './Car/homeabout.jpg';
import serviceandrepairbanner from './Car/serviceandrepairbanner.jpg';
import homepolicies from './Car/homepolicies.jpg';

function Home() {
    return (
        <div className='Home'>
            <div className='home-banner'>
                <div className='home-banner-text'>
                    <div className='home-banner-text1'>
                        Welcome to BMW Showroom
                    </div>
                    <div className='home-banner-text2'>
                        Bayerische Motoren Werke.
                    </div>
                </div>
                <img className='home-banner-photo' src={bannerimg} alt='home-banner-img' />
            </div>
            <Link to="/seriesi">
                <div className='home-series-i'>
                    <div className='home-bmwi-text'>BMW I Series</div>
                    <img src={homebmwi} alt='homebmwi' className='homebmwi' />
                </div>
            </Link>
            <Link to="/home-about">
                <div className='home-about'>
                    <div className='home-about-text'>Who are we?</div>
                    <img src={homeabout} alt='bmwimg' className='home-about-img' />
                </div>
            </Link>
            <Link to="/services">
                <div className='home-policies'>
                    <div className='home-policies-text'>Our Policies</div>
                    <img src={homepolicies} alt='servicesandrepair' className='home-policies-img' />
                </div>
            </Link>
            <Link to="/ServicesandRepair">
                <div className='home-sandr'>
                    <div className='home-sandr-text'>Contact Us</div>
                    <img src={serviceandrepairbanner} alt='servicesandrepair' className='home-sandr-img' />
                </div>
            </Link>
        </div>
    );
}

export default Home;