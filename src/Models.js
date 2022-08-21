import React from 'react';
import './Models.css';
import { Link } from 'react-router-dom';
import bannermodel from './Car/modelsbanner2.jpg';
import series2 from './Car/bmw2.PNG';
import series3 from './Car/bmw3.PNG';
import series5 from './Car/bmw5.PNG';
import series6 from './Car/bmw6.PNG';
import series7 from './Car/bmw7.PNG';
import seriesX from './Car/bmwX.PNG';
import seriesM from './Car/bmwM.PNG';
import seriesI from './Car/bmwI.PNG';
import seriesZ from './Car/bmwZ.PNG';

function Models() {
    return (
        <div className='Models'>
            <img src={bannermodel} alt='models-banner' className='models-banner' />

            <div className='models-heading'>Our Models</div>

            <div className='models-series-container'>
                <Link to="/seriestwo">
                    <div className='models-series-2'>
                        <img src={series2} alt='models-series-2-img' className='models-series-2-img' />
                        <div className='models-series-2-text'>
                            Series-2
                        </div>
                    </div>
                </Link>

                <Link to="/seriesthree">
                    <div className='models-series-3'>
                        <img src={series3} alt='models-series-3-img' className='models-series-3-img' />
                        <div className='models-series-3-text'>
                            Series-3
                        </div>
                    </div>
                </Link>

                <Link to="/seriesfive">
                    <div className='models-series-5'>
                        <img src={series5} alt='models-series-5-img' className='models-series-5-img' />
                        <div className='models-series-5-text'>
                            Series-5
                        </div>
                    </div>
                </Link>

                <Link to="/seriessix">
                    <div className='models-series-6'>
                        <img src={series6} alt='models-series-6-img' className='models-series-6-img' />
                        <div className='models-series-6-text'>
                            Series-6
                        </div>
                    </div>
                </Link>

                <Link to="/seriesseven">
                    <div className='models-series-7'>
                        <img src={series7} alt='models-series-7-img' className='models-series-7-img' />
                        <div className='models-series-7-text'>
                            Series-7
                        </div>
                    </div>
                </Link>

                <Link to="/seriesx">
                    <div className='models-series-X'>
                        <img src={seriesX} alt='models-series-X-img' className='models-series-X-img' />
                        <div className='models-series-X-text'>
                            Series-X
                        </div>
                    </div>
                </Link>

                <Link to="/seriesm">
                    <div className='models-series-M'>
                        <img src={seriesM} alt='models-series-M-img' className='models-series-M-img' />
                        <div className='models-series-M-text'>
                            Series-M
                        </div>
                    </div>
                </Link>

                <Link to="/seriesi">
                    <div className='models-series-I'>
                        <img src={seriesI} alt='models-series-I-img' className='models-series-I-img' />
                        <div className='models-series-I-text'>
                            Series-I
                        </div>
                    </div>
                </Link>

                <Link to="/seriesz">
                    <div className='models-series-Z'>
                        <img src={seriesZ} alt='models-series-Z-img' className='models-series-Z-img' />
                        <div className='models-series-Z-text'>
                            Series-Z
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Models;