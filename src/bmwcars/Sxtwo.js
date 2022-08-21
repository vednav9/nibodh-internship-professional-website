import React from "react";
import SX2banner from '../Car/SX2/SX2banner.jpg';
import bmwX2 from '../Car/SX2/bmwX2.PNG';
import e1 from '../Car/SX2/e1.jpg';
import e2 from '../Car/SX2/e2.jpg';
import i1 from '../Car/SX2/i1.jpg';
import i2 from '../Car/SX2/i2.jpg';
import i3 from '../Car/SX2/i3.jpg';
import i4 from '../Car/SX2/i4.jpg';
import dataimg from '../Car/SX2/dataimg.jpg';
import './SX2.css';

function Sxtwo() {
    return(
        <div className="Sxtwo">
            <div className='SX2-banner-text'>
                BMW X3
            </div>
            <img src={SX2banner} alt="SX2-banner-img" className='SX2-banner-img' />

            <div className="SX2-car-text">
                The Right Model for Everyone
            </div>
            <div className="SX2-car-img">
                <img src={bmwX2} alt="bmw3" className="SX2-car-img" />
            </div>

            <div className="SX2-show-text">
                Design
            </div>
            <div className="SX2-show-text-1">
                Exterior
            </div>
            <div className="SX2-show-img-1">
                <img src={e1} alt="e1" className="SX2-show-e1" />
                <img src={e2} alt="e1" className="SX2-show-e2" />
            </div>
            <div className="SX2-show-text-2">
                Interior
            </div>
            <div className="SX2-show-img-2">
                <img src={i1} alt="i1" className="SX2-show-i1" />
                <img src={i2} alt="i1" className="SX2-show-i2" />
                <img src={i3} alt="i3" className="SX2-show-i3" />
                <img src={i4} alt="i3" className="SX2-show-i4" />
            </div>

            <div className="SX2-data-text">
                TECHNICAL DATA OF THE BMW Z4 Roster.
            </div>
            <div className="SX2-data-text1">
                BMW Z4 Roster
            </div>

            <div className="SX2-Section">
                <div className="SX2-data-img">
                    <img src={dataimg} alt="dataimg" className="SX2-data-img" />
                </div>

                <table className="SX2-tdata">
                    <tr>
                        <td className="SX2-table">Engine power in kW at 1/min:</td>
                        <td className="SX2-table"><strong>185/5200</strong></td>
                    </tr>
                    <tr>
                        <td className="SX2-table">Acceleration 0-100 km/h in s:</td>
                        <td className="SX2-table"><strong>6.6</strong></td>
                    </tr>
                    <tr>
                        <td className="SX2-table">Fuel consumption in Km/I:</td>
                        <td className="SX2-table"><strong>13.17</strong></td>
                    </tr>
                    <tr>
                        <td className="SX2-table">Co2 emission in g/km:</td>
                        <td className="SX2-table"><strong>170</strong></td>
                    </tr>
                </table>
                <button className="SX2-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Sxtwo;