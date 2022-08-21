import React from "react";
import SX3banner from '../Car/SX3/SX3banner.jpg';
import bmwX3 from '../Car/SX3/bmwX3.PNG';
import e1 from '../Car/SX3/e1.jpg';
import e2 from '../Car/SX3/e2.jpg';
import e3 from '../Car/SX3/e3.jpg';
import e4 from '../Car/SX3/e4.jpg';
import i1 from '../Car/SX3/i1.jpg';
import i2 from '../Car/SX3/i2.jpg';
import dataimg from '../Car/SX3/dataimg.jpg';
import './SX3.css';

function Sxthree() {
    return(
        <div className="Sxthree">
            <div className='SX3-banner-text'>
                BMW X4 Silver Shadow<br />Edition
            </div>
            <img src={SX3banner} alt="SX3-banner-img" className='SX3-banner-img' />

            <div className="SX3-car-text">
                The Right Model for Everyone
            </div>
            <div className="SX3-car-img">
                <img src={bmwX3} alt="bmw3" className="SX3-car-img" />
            </div>

            <div className="SX3-show-text">
                Design
            </div>
            <div className="SX3-show-text-1">
                Exterior
            </div>
            <div className="SX3-show-img-1">
                <img src={e1} alt="e1" className="SX3-show-e1" />
                <img src={e2} alt="e1" className="SX3-show-e2" />
                <img src={e3} alt="e1" className="SX3-show-e3" />
                <img src={e4} alt="e1" className="SX3-show-e4" />
            </div>
            <div className="SX3-show-text-2">
                Interior
            </div>
            <div className="SX3-show-img-2">
                <img src={i1} alt="i1" className="SX3-show-i1" />
                <img src={i2} alt="i1" className="SX3-show-i2" />
            </div>

            <div className="SX3-data-text">
                TECHNICAL DATA OF THE BMW Z4 Roster.
            </div>
            <div className="SX3-data-text1">
                BMW Z4 Roster
            </div>

            <div className="SX3-Section">
                <div className="SX3-data-img">
                    <img src={dataimg} alt="dataimg" className="SX3-data-img" />
                </div>

                <table className="SX3-tdata">
                    <tr>
                        <td className="SX3-table">Engine power in kW at 1/min:</td>
                        <td className="SX3-table"><strong>185/5200</strong></td>
                    </tr>
                    <tr>
                        <td className="SX3-table">Acceleration 0-100 km/h in s:</td>
                        <td className="SX3-table"><strong>6.6</strong></td>
                    </tr>
                    <tr>
                        <td className="SX3-table">Fuel consumption in Km/I:</td>
                        <td className="SX3-table"><strong>13.17</strong></td>
                    </tr>
                    <tr>
                        <td className="SX3-table">Co2 emission in g/km:</td>
                        <td className="SX3-table"><strong>170</strong></td>
                    </tr>
                </table>
                <button className="SX3-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Sxthree;