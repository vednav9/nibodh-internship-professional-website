import React from "react";
import './Series5.css';
import { Link } from 'react-router-dom';
import bmw5banner from '../Car/bmw5banner.jpg';
import bmw5 from '../Car/bmw5.PNG';

function Seriesfive() {
    return(
        <div className="Seriesfive">
            <div className='s5-banner-text'>
                Series - 5
            </div>
            <img src={bmw5banner} alt="s2-banner-img" className='s2-banner-img' />

            <Link to="/Sfiveone">
                <div className='bmw-5'>
                    <img src={bmw5} alt='bmw-5-img' className='bmw-5-img' />
                    <div className='bmw-5-text'>
                        BMW 5 Series Sedan
                    </div>
                    <div className="bmw-5-fuel">
                        Petrol | Disel
                    </div>
                    <div className="bmw-5-price">
                        Starting from $ 80,999.1
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Seriesfive;