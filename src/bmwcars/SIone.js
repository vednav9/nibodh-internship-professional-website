import React from "react";
import SI1banner from '../Car/SI1/SI1banner.jpg';
import bmwI1 from '../Car/SI1/bmwI1.PNG';
import e1 from '../Car/SI1/e1.jpg';
import e2 from '../Car/SI1/e2.jpg';
import i1 from '../Car/SI1/i1.jpg';
import i2 from '../Car/SI1/i2.jpg';
import dataimg from '../Car/SI1/dataimg.jpg';
import './SI1.css';

function SIone() {
    return(
        <div className="SIone">
            <div className='SI1-banner-text'>
                BMW iX
            </div>
            <img src={SI1banner} alt="SI1-banner-img" className='SI1-banner-img' />

            <div className="SI1-car-text">
                The Right Model for Everyone
            </div>
            <div className="SI1-car-img">
                <img src={bmwI1} alt="bmw3" className="SI1-car-img" />
            </div>

            <div className="SI1-show-text">
                Design
            </div>
            <div className="SI1-show-text-1">
                Exterior
            </div>
            <div className="SI1-show-img-1">
                <img src={e1} alt="e1" className="SI1-show-e1" />
                <img src={e2} alt="e1" className="SI1-show-e2" />
            </div>
            <div className="SI1-show-text-2">
                Interior
            </div>
            <div className="SI1-show-img-2">
                <img src={i1} alt="i1" className="SI1-show-i1" />
                <img src={i2} alt="i1" className="SI1-show-i2" />
            </div>

            <div className="SI1-data-text">
                TECHNICAL DATA OF THE BMW Z4 Roster.
            </div>
            <div className="SI1-data-text1">
                BMW iX
            </div>

            <div className="SI1-Section">
                <div className="SI1-data-img">
                    <img src={dataimg} alt="dataimg" className="SI1-data-img" />
                </div>

                <table className="SI1-tdata">
                    <tr>
                        <td className="SI1-table">Power in kW:</td>
                        <td className="SI1-table"><strong>240</strong></td>
                    </tr>
                    <tr>
                        <td className="SI1-table">Driving Performance 0-100 km/h in s:</td>
                        <td className="SI1-table"><strong>6.1</strong></td>
                    </tr>
                    <tr>
                        <td className="SI1-table">Electric range in Km:</td>
                        <td className="SI1-table"><strong>372-425</strong></td>
                    </tr>
                    <tr>
                        <td className="SI1-table">Energy consumption kWh/100 km:</td>
                        <td className="SI1-table"><strong>22.5-19.4</strong></td>
                    </tr>
                </table>
                <button className="SI1-Buy">Buy</button>
            </div>
        </div>
    );
}

export default SIone;