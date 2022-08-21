import React from "react";
import './Seriesx.css';
import { Link } from 'react-router-dom';
import seriesxbanner from '../Car/seriesxbanner.jpg';
import bmwx1 from '../Car/bmwx1.PNG';
import bmwx3 from '../Car/bmwx3go1.PNG';
import bmwx4 from '../Car/bmwx4.PNG';
import bmwx5 from '../Car/bmwx5.PNG';
import bmwx6 from '../Car/bmwx6.PNG';
import bmwx7 from '../Car/bmwx7.PNG';

function Seriesx() {
    return(
        <div className="Seriesx">
            <div className='sx-banner-text'>
                Series - X
            </div>
            <img src={seriesxbanner} alt="sx-banner-img" className='sx-banner-img' />

            <Link to="/Sxone">
                <div className='sx-1'>
                    <img src={bmwx1} alt='sx-1-img' className='sx-1-img' />
                    <div className='sx-1-text'>
                        BMW X1
                    </div>
                    <div className="sx-1-fuel">
                        Petrol | Diesel
                    </div>
                    <div className="sx-1-price">
                        Starting from $ 52,115.7
                    </div>
                </div>
            </Link>

            <Link to="/Sxtwo">
                <div className='sx-2'>
                    <img src={bmwx3} alt='sx-2-img' className='sx-2-img' />
                    <div className='sx-2-text'>
                        The New BMW X3
                    </div>
                    <div className="sx-2-fuel">
                        Petrol | Diesel
                    </div>
                    <div className="sx-2-price">
                        Starting from $ 77,734.02
                    </div>
                </div>
            </Link>

            <Link to="/Sxthree">
                <div className='sx-3'>
                    <img src={bmwx4} alt='sx-x-img' className='sx-3-img' />
                    <div className='sx-3-text'>
                        The New BMW X4 Silver Shadow Edition
                    </div>
                    <div className="sx-3-fuel">
                        Petrol | Diesel
                    </div>
                    <div className="sx-3-price">
                        Starting from $ 90,292.02
                    </div>
                </div>
            </Link>

            <Link to="/Sxfour">
                <div className='sx-4'>
                    <img src={bmwx5} alt='sx-x-img' className='sx-4-img' />
                    <div className='sx-4-text'>
                        BMW X5
                    </div>
                    <div className="sx-4-fuel">
                        Petrol | Disel
                    </div>
                    <div className="sx-4-price">
                        Starting from $ 100,338.42
                    </div>
                </div>
            </Link>

            <Link to="/Sxfive">
                <div className='sx-5'>
                    <img src={bmwx6} alt='sx-x-img' className='sx-5-img' />
                    <div className='sx-5-text'>
                        BMW X6
                    </div>
                    <div className="sx-5-fuel">
                        Petrol
                    </div>
                    <div className="sx-5-price">
                        Starting from $ 131,231.1
                    </div>
                </div>
            </Link>

            <Link to="/Sxsix">
                <div className='sx-6'>
                    <img src={bmwx7} alt='sx-x-img' className='sx-6-img' />
                    <div className='sx-3-text'>
                        BMW X7
                    </div>
                    <div className="sx-6-fuel">
                        Petrol | Diesel
                    </div>
                    <div className="sx-6-price">
                        Starting from $ 148,058.82
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Seriesx;