import React from "react";
import SX5banner from '../Car/SX5/SX5banner.jpg';
import bmwX5 from '../Car/SX5/bmwX5.PNG';
import e1 from '../Car/SX5/e1.jpg';
import e2 from '../Car/SX5/e2.jpg';
import e3 from '../Car/SX5/e3.jpg';
import e4 from '../Car/SX5/e4.jpg';
import e5 from '../Car/SX5/e5.jpg';
import e6 from '../Car/SX5/e6.jpg';
import e7 from '../Car/SX5/e7.jpg';
import i1 from '../Car/SX5/i1.jpg';
import i2 from '../Car/SX5/i2.jpg';
import i3 from '../Car/SX5/i3.jpg';
import i4 from '../Car/SX5/i4.jpg';
import dataimg from '../Car/SX5/dataimg.jpg';
import './SX5.css';

function Sxfive() {
    return(
        <div className="Sxfive">
            <div className='SX5-banner-text'>
                BMW X6
            </div>
            <img src={SX5banner} alt="SX5-banner-img" className='SX5-banner-img' />

            <div className="SX5-car-text">
                The Right Model for Everyone
            </div>
            <div className="SX5-car-img">
                <img src={bmwX5} alt="bmw3" className="SX5-car-img" />
            </div>

            <div className="SX5-show-text">
                Design
            </div>
            <div className="SX5-show-text-1">
                Exterior
            </div>
            <div className="SX5-show-img-1">
                <img src={e1} alt="e1" className="SX5-show-e1" />
                <img src={e2} alt="e1" className="SX5-show-e2" />
                <img src={e3} alt="e1" className="SX5-show-e3" />
                <img src={e4} alt="e1" className="SX5-show-e4" />
                <img src={e5} alt="e1" className="SX5-show-e5" />
                <img src={e6} alt="e1" className="SX5-show-e6" />
                <img src={e7} alt="e1" className="SX5-show-e7" />
            </div>
            <div className="SX5-show-text-2">
                Interior
            </div>
            <div className="SX5-show-img-2">
                <img src={i1} alt="i1" className="SX5-show-i1" />
                <img src={i2} alt="i1" className="SX5-show-i2" />
                <img src={i3} alt="i1" className="SX5-show-i3" />
                <img src={i4} alt="i1" className="SX5-show-i4" />
            </div>

            <div className="SX5-data-text">
                TECHNICAL DATA OF THE BMW Z4 Roster.
            </div>
            <div className="SX5-data-text1">
                BMW Z4 Roster
            </div>

            <div className="SX5-Section">
                <div className="SX5-data-img">
                    <img src={dataimg} alt="dataimg" className="SX5-data-img" />
                </div>

                <table className="SX5-tdata">
                    <tr>
                        <td className="SX5-table">Engine power in kW at 1/min:</td>
                        <td className="SX5-table"><strong>250/5500</strong></td>
                    </tr>
                    <tr>
                        <td className="SX5-table">Acceleration 0-100 km/h in s:</td>
                        <td className="SX5-table"><strong>5.5</strong></td>
                    </tr>
                    <tr>
                        <td className="SX5-table">Fuel consumption in Km/I:</td>
                        <td className="SX5-table"><strong>11.24</strong></td>
                    </tr>
                    <tr>
                        <td className="SX5-table">Co2 emission in g/km:</td>
                        <td className="SX5-table"><strong>211</strong></td>
                    </tr>
                </table>
                <button className="SX5-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Sxfive;