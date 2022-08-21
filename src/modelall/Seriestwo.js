import React from "react";
import './Series2.css';
import { Link } from 'react-router-dom';
import series2banner from '../Car/series2banner.jpg';
import bmw2 from '../Car/bmw2.PNG';

function Seriestwo() {
    return(
        <div className="Seriestwo">
            <div className='s2-banner-text'>
                Series - 2
            </div>
            <img src={series2banner} alt="s2-banner-img" className='s2-banner-img' />

            <Link to="/Stwoone">
                <div className='bmw-2'>
                    <img src={bmw2} alt='bmw-2-img' className='bmw-2-img' />
                    <div className='bmw2text'>
                        BMW 2 Series Gran Coupe
                    </div>
                    <div className="bmw-2-fuel">
                        Petrol | Disel
                    </div>
                    <div className="bmw-2-price">
                        Starting from $ 52,115.7
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Seriestwo;