import React from "react";
import './Series6.css';
import { Link } from 'react-router-dom';
import series6banner from '../Car/series6banner.png';
import bmw6 from '../Car/bmw6.PNG';

function Seriessix() {
    return(
        <div className="Seriessix">
            <div className='s6-banner-text'>
                Series - 6
            </div>
            <img src={series6banner} alt="s6-banner-img" className='s6-banner-img' />

            <Link to="/Ssixone">
                <div className='bmw-6'>
                    <img src={bmw6} alt='bmw-6-img' className='bmw-6-img' />
                    <div className='bmw-6-text'>
                        BMW 6 Series Gran Turismo
                    </div>
                    <div className="bmw-6-fuel">
                        Petrol | Disel
                    </div>
                    <div className="bmw-6-price">
                        Starting from $ 87,780.42
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Seriessix;