import React from "react";
import './Series3.css';
import { Link } from 'react-router-dom';
import series3banner from '../Car/series3banner.jpg';
import bmw3seriessedan from '../Car/bmw3seriessedan.PNG';
import bmw3seriesgran from '../Car/bmw3seriesgran.PNG';
import bmwm340i from '../Car/bmwm340i.PNG';

function Seriesthree() {
    return(
        <div className="Seriesthree">
            <div className='s3-banner-text'>
                Series - 3
            </div>
            <img src={series3banner} alt="s3-banner-img" className='s3-banner-img' />

            <Link to="/Sthreeone">
                <div className='s3-1'>
                    <img src={bmw3seriessedan} alt='s3-1-img' className='s3-1-img' />
                    <div className='s3-1-text'>
                        BMW 3 Series Sedan
                    </div>
                    <div className="s3-1-fuel">
                        Petrol | Disel
                    </div>
                    <div className="s3-1-price">
                        Starting from $ 58,897.02
                    </div>
                </div>
            </Link>

            <Link to="/Sthreetwo">
                <div className='s3-2'>
                    <img src={bmw3seriesgran} alt='s3-2-img' className='s3-2-img' />
                    <div className='s3-2-text'>
                        The new BMW 3 Series Gran
                    </div>
                    <div className="s3-2-fuel">
                        Petrol | Disel
                    </div>
                    <div className="s3-2-price">
                        Starting from $ 69,445.74
                    </div>
                </div>
            </Link>

            <Link to="/Sthreethree">
                <div className='s3-3'>
                    <img src={bmwm340i} alt='s3-3-img' className='s3-3-img' />
                    <div className='s3-3-text'>
                        BMW M340i xDrive 50 Jahre M Edition
                    </div>
                    <div className="s3-3-fuel">
                        Petrol
                    </div>
                    <div className="s3-3-price">
                        Starting from $ 86,524.62
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Seriesthree;