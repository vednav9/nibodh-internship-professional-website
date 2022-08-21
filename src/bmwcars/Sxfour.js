import React from "react";
import SX4banner from '../Car/SX4/SX4banner.jpg';
import bmwX4 from '../Car/SX4/bmwX4.PNG';
import e1 from '../Car/SX4/e1.jpg';
import e2 from '../Car/SX4/e2.jpg';
import e3 from '../Car/SX4/e3.jpg';
import e4 from '../Car/SX4/e4.jpg';
import i1 from '../Car/SX4/i1.jpg';
import i2 from '../Car/SX4/i2.jpg';
import dataimg from '../Car/SX4/dataimg.jpg';
import './SX4.css';

function Sxfour() {
    return(
        <div className="Sxfour">
            <div className='SX4-banner-text'>
                BMW X5
            </div>
            <img src={SX4banner} alt="SX4-banner-img" className='SX4-banner-img' />

            <div className="SX4-car-text">
                The Right Model for Everyone
            </div>
            <div className="SX4-car-img">
                <img src={bmwX4} alt="bmw3" className="SX4-car-img" />
            </div>

            <div className="SX4-show-text">
                Design
            </div>
            <div className="SX4-show-text-1">
                Exterior
            </div>
            <div className="SX4-show-img-1">
                <img src={e1} alt="e1" className="SX4-show-e1" />
                <img src={e2} alt="e1" className="SX4-show-e2" />
                <img src={e3} alt="e1" className="SX4-show-e3" />
                <img src={e4} alt="e1" className="SX4-show-e4" />
            </div>
            <div className="SX4-show-text-2">
                Interior
            </div>
            <div className="SX4-show-img-2">
                <img src={i1} alt="i1" className="SX4-show-i1" />
                <img src={i2} alt="i1" className="SX4-show-i2" />
            </div>

            <div className="SX4-data-text">
                TECHNICAL DATA OF THE BMW Z4 Roster.
            </div>
            <div className="SX4-data-text1">
                BMW Z4 Roster
            </div>

            <div className="SX4-Section">
                <div className="SX4-data-img">
                    <img src={dataimg} alt="dataimg" className="SX4-data-img" />
                </div>

                <table className="SX4-tdata">
                    <tr>
                        <td className="SX4-table">Engine power in kW at 1/min:</td>
                        <td className="SX4-table"><strong>250/5500</strong></td>
                    </tr>
                    <tr>
                        <td className="SX4-table">Acceleration 0-100 km/h in s:</td>
                        <td className="SX4-table"><strong>5.5</strong></td>
                    </tr>
                    <tr>
                        <td className="SX4-table">Fuel consumption in Km/I:</td>
                        <td className="SX4-table"><strong>11.24</strong></td>
                    </tr>
                    <tr>
                        <td className="SX4-table">Co2 emission in g/km:</td>
                        <td className="SX4-table"><strong>211</strong></td>
                    </tr>
                </table>
                <button className="SX4-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Sxfour;