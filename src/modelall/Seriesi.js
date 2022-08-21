import React from "react";
import './SeriesI.css';
import { Link } from 'react-router-dom';
import seriesIbanner from '../Car/seriesIbanner.jpg';
import bmi1 from '../Car/bmwi1.PNG';
import bmi2 from '../Car/bmwi2.PNG';

function Seriesi() {
    return(
        <div className="Seriesi">
            <div className='si-banner-text'>
                Series - I
            </div>
            <img src={seriesIbanner} alt="si-banner-img" className='si-banner-img' />

            <Link to="/SIone">
                <div className='si-1'>
                    <img src={bmi1} alt='si-1-img' className='si-1-img' />
                    <div className='si-1-text'>
                        BMW iX
                    </div>
                    <div className="si-1-fuel">
                        Full - Electric
                    </div>
                    <div className="si-1-price">
                        Starting from $ 145,547.22
                    </div>
                </div>
            </Link>

            <Link to="/SItwo">
                <div className='si-2'>
                    <img src={bmi2} alt='si-2-img' className='si-2-img' />
                    <div className='si-2-text'>
                        BMW i4
                    </div>
                    <div className="si-2-fuel">
                        Full - Electric
                    </div>
                    <div className="si-2-price">
                        Starting from $ 87,780.42
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Seriesi;