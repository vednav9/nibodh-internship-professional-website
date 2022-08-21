import React from "react";
import './SeriesM.css';
import { Link } from 'react-router-dom';
import seriesMbanner from '../Car/mbanner.jpg';
import bmwm1 from '../Car/bmwm1.PNG';
import bmwm2 from '../Car/bmwm2.PNG';
import bmwm3 from '../Car/bmwm3.PNG';
import bmwm4 from '../Car/bmwm4.PNG';
import bmwm5 from '../Car/bmwm5.jpg';
import bmwm6 from '../Car/bmwm6.PNG';

function Seriesm() {
    return(
        <div className="Seriesm">
            <div className='sm-banner-text'>
                Series - M
            </div>
            <img src={seriesMbanner} alt="sm-banner-img" className='sm-banner-img' />

            <Link to="/Sthreethree">
                <div className='sm-1'>
                    <img src={bmwm1} alt='sm-1-img' className='sm-1-img' />
                    <div className='sm-1-text'>
                        BMW M340i xDrive 50 Jahre M Edition
                    </div>
                    <div className="sm-1-fuel">
                        Petrol
                    </div>
                    <div className="sm-1-price">
                        Starting from $ 86,524.62
                    </div>
                </div>
            </Link>

            <Link to="/Smtwo">
                <div className='sm-2'>
                    <img src={bmwm2} alt='sm-2-img' className='sm-2-img' />
                    <div className='sm-2-text'>
                        BMW M4 Competition Coupe with M xDrive
                    </div>
                    <div className="sm-2-fuel">
                        Petrol
                    </div>
                    <div className="sm-2-price">
                        Starting from $ 180,709.62
                    </div>
                </div>
            </Link>

            <Link to="/Smthree">
                <div className='sm-3'>
                    <img src={bmwm3} alt='sm-x-img' className='sm-3-img' />
                    <div className='sm-3-text'>
                        BMW M5 Competition
                    </div>
                    <div className="sm-3-fuel">
                        Petrol
                    </div>
                    <div className="sm-3-price">
                        Starting from $ 217,881.3
                    </div>
                </div>
            </Link>

            <Link to="/Smfour">
                <div className='sm-4'>
                    <img src={bmwm4} alt='sm-x-img' className='sm-4-img' />
                    <div className='sm-4-text'>
                        BMW Z4 M40i
                    </div>
                    <div className="sm-4-fuel">
                        Petrol
                    </div>
                    <div className="sm-4-price">
                        Starting from $ 106,617.42
                    </div>
                </div>
            </Link>

            <Link to="/Smfive">
                <div className='sm-5'>
                    <img src={bmwm5} alt='sm-x-img' className='sm-5-img' />
                    <div className='sm-5-text'>
                        BMW M8 Coupe
                    </div>
                    <div className="sm-5-fuel">
                        Petrol
                    </div>
                    <div className="sm-5-price">
                        Starting from $ 280,043.4
                    </div>
                </div>
            </Link>

            <Link to="/Smsix">
                <div className='sm-6'>
                    <img src={bmwm6} alt='sm-x-img' className='sm-6-img' />
                    <div className='sm-6-text'>
                        The New BMW X5 M Competition
                    </div>
                    <div className="sm-6-fuel">
                        Petrol
                    </div>
                    <div className="sm-6-price">
                        Starting from $ 261,080.82
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Seriesm;