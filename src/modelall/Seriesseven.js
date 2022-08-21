import React from "react";
import './Series7.css';
import { Link } from 'react-router-dom';
import series7banner from '../Car/series7banner.jpg';
import bmw7 from '../Car/bmw7.PNG';

function Seriesseven() {
    return(
        <div className="Seriesseven">
            <div className='s7-banner-text'>
                Series - 7
            </div>
            <img src={series7banner} alt="s7-banner-img" className='s7-banner-img' />

            <Link to="/Ssevenone">
                <div className='bmw-7'>
                    <img src={bmw7} alt='bmw-7-img' className='bmw-7-img' />
                    <div className='bmw-7-text'>
                        BMW 7 Series Sedan
                    </div>
                    <div className="bmw-7-fuel">
                        Petrol | Disel
                    </div>
                    <div className="bmw-7-price">
                        Starting from $ 1,78,198.02
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Seriesseven;