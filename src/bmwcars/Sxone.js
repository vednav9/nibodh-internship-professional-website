import React from "react";
import SX1banner from '../Car/SX1/SX1banner.jpg';
import bmwX1 from '../Car/SX1/bmwX1.PNG';
import e1 from '../Car/SX1/e1.jpg';
import e2 from '../Car/SX1/e2.jpg';
import e3 from '../Car/SX1/e3.jpg';
import e4 from '../Car/SX1/e4.jpg';
import e5 from '../Car/SX1/e5.jpg';
import e6 from '../Car/SX1/e6.jpg';
import i1 from '../Car/SX1/i1.jpg';
import i2 from '../Car/SX1/i2.jpg';
import i3 from '../Car/SX1/i3.jpg';
import i4 from '../Car/SX1/i4.jpg';
import dataimg from '../Car/SX1/dataimg.jpg';
import './SX1.css';

function Sxone() {
    return(
        <div className="Sxone">
            <div className='SX1-banner-text'>
                BMW X1
            </div>
            <img src={SX1banner} alt="SX1-banner-img" className='SX1-banner-img' />

            <div className="SX1-car-text">
                The Right Model for Everyone
            </div>
            <div className="SX1-car-img">
                <img src={bmwX1} alt="bmw3" className="SX1-car-img" />
            </div>

            <div className="SX1-show-text">
                Design
            </div>
            <div className="SX1-show-text-1">
                Exterior
            </div>
            <div className="SX1-show-img-1">
                <img src={e1} alt="e1" className="SX1-show-e1" />
                <img src={e2} alt="e1" className="SX1-show-e2" />
                <img src={e3} alt="e1" className="SX1-show-e3" />
                <img src={e4} alt="e1" className="SX1-show-e4" />
                <img src={e5} alt="e1" className="SX1-show-e5" />
                <img src={e6} alt="e1" className="SX1-show-e6" />
            </div>
            <div className="SX1-show-text-2">
                Interior
            </div>
            <div className="SX1-show-img-2">
                <img src={i1} alt="i1" className="SX1-show-i1" />
                <img src={i2} alt="i1" className="SX1-show-i2" />
                <img src={i3} alt="i3" className="SX1-show-i3" />
                <img src={i4} alt="i3" className="SX1-show-i4" />
            </div>

            <div className="SX1-data-text">
                TECHNICAL DATA OF THE BMW Z4 Roster.
            </div>
            <div className="SX1-data-text1">
                BMW Z4 Roster
            </div>

            <div className="SX1-Section">
                <div className="SX1-data-img">
                    <img src={dataimg} alt="dataimg" className="SX1-data-img" />
                </div>

                <table className="SX1-tdata">
                    <tr>
                        <td className="SX1-table">Engine power in kW at 1/min:</td>
                        <td className="SX1-table"><strong>141/5000</strong></td>
                    </tr>
                    <tr>
                        <td className="SX1-table">Acceleration 0-100 km/h in s:</td>
                        <td className="SX1-table"><strong>7.7</strong></td>
                    </tr>
                    <tr>
                        <td className="SX1-table">Fuel consumption in Km/I:</td>
                        <td className="SX1-table"><strong>14.82</strong></td>
                    </tr>
                    <tr>
                        <td className="SX1-table">Co2 emission in g/km:</td>
                        <td className="SX1-table"><strong>155</strong></td>
                    </tr>
                </table>
                <button className="SX1-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Sxone;