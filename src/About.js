import React from 'react';
import './About.css';
import aboutbanner from "./Car/aboutbanner1.jpg";

function About() {
    return (
        <div className='About'>
            <div className='about-banner-text'>
                About Us
            </div>

            <img src={aboutbanner} alt='aboutbanner' className='about-banner' />

            <div className='about-h1'>
                THE BMW GROUP
            </div>
            <div className='about-p1'>
                With its four brands BMW, MINI, Rolls-Royce and BMW Motorrad, the BMW Group is the world’s leading premium manufacturer of automobiles and motorcycles and also provides premium financial and mobility services. The BMW Group production network comprises 31 production and assembly facilities in 15 countries; the company has a global sales network in more than 140 countries.
            </div>
            <div className='about-p1'>
                In 2020, the BMW Group sold over 2.3 million passenger vehicles and more than 169,000 motorcycles worldwide. The profit before tax in the financial year 2019 was € 7.118 billion on revenues amounting to € 104.210 billion. As of 31 December 2019, the BMW Group had a workforce of 126,016 employees.
            </div>
            <div className='about-p1'>
                The success of the BMW Group has always been based on long-term thinking and responsible action. The company has therefore established ecological and social sustainability throughout the value chain, comprehensive product responsibility and a clear commitment to conserving resources as an integral part of its strategy.
            </div>
        </div>
    );
}

export default About;