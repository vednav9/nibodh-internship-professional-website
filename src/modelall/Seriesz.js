import React from "react";
import './SeriesZ.css';
import { Link } from 'react-router-dom';
import seriesZbanner from '../Car/seriesZbanner.jpg';
import bmwZ1 from '../Car/bmwZ1.PNG';

function Seriesz() {
    return(
        <div className="Seriesz">
            <div className='sz-banner-text'>
                Series - Z
            </div>
            <img src={seriesZbanner} alt="sz-banner-img" className='sz-banner-img' />

            <Link to="/Szone">
                <div className='bmw-z'>
                    <img src={bmwZ1} alt='bmw-z-img' className='bmw-z-img' />
                    <div className='bmwztext'>
                        BMW Z4 Roster
                    </div>
                    <div className="bmw-z-fuel">
                        Petrol
                    </div>
                    <div className="bmw-z-price">
                        Starting from $ 90,292.02
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Seriesz;