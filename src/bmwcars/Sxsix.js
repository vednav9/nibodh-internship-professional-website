import React from "react";
import SX6banner from '../Car/SX6/SX6banner.jpg';
import bmwX6 from '../Car/SX6/bmwX6.PNG';
import e1 from '../Car/SX6/e1.jpg';
import e2 from '../Car/SX6/e2.jpg';
import e3 from '../Car/SX6/e3.jpg';
import e4 from '../Car/SX6/e4.jpg';
import e5 from '../Car/SX6/e5.jpg';
import e6 from '../Car/SX6/e6.jpg';
import e7 from '../Car/SX6/e7.jpg';
import i1 from '../Car/SX6/i1.jpg';
import i2 from '../Car/SX6/i2.jpg';
import i3 from '../Car/SX6/i3.jpg';
import i4 from '../Car/SX6/i4.jpg';
import i5 from '../Car/SX6/i5.jpg';
import i6 from '../Car/SX6/i6.jpg';
import dataimg from '../Car/SX6/dataimg.jpg';
import './SX6.css';

function Sxsix() {
    return(
        <div className="Sxsix">
            <div className='SX6-banner-text'>
                BMW X7
            </div>
            <img src={SX6banner} alt="SX6-banner-img" className='SX6-banner-img' />

            <div className="SX6-car-text">
                The Right Model for Everyone
            </div>
            <div className="SX6-car-img">
                <img src={bmwX6} alt="bmw3" className="SX6-car-img" />
            </div>

            <div className="SX6-show-text">
                Design
            </div>
            <div className="SX6-show-text-1">
                Exterior
            </div>
            <div className="SX6-show-img-1">
                <img src={e1} alt="e1" className="SX6-show-e1" />
                <img src={e2} alt="e1" className="SX6-show-e2" />
                <img src={e3} alt="e1" className="SX6-show-e3" />
                <img src={e4} alt="e1" className="SX6-show-e4" />
                <img src={e5} alt="e1" className="SX6-show-e5" />
                <img src={e6} alt="e1" className="SX6-show-e6" />
                <img src={e7} alt="e1" className="SX6-show-e7" />
            </div>
            <div className="SX6-show-text-2">
                Interior
            </div>
            <div className="SX6-show-img-2">
                <img src={i1} alt="i1" className="SX6-show-i1" />
                <img src={i2} alt="i1" className="SX6-show-i2" />
                <img src={i3} alt="i1" className="SX6-show-i3" />
                <img src={i4} alt="i1" className="SX6-show-i4" />
                <img src={i5} alt="i1" className="SX6-show-i5" />
                <img src={i6} alt="i1" className="SX6-show-i6" />
            </div>

            <div className="SX6-data-text">
                TECHNICAL DATA OF THE BMW Z4 Roster.
            </div>
            <div className="SX6-data-text1">
                BMW Z4 Roster
            </div>

            <div className="SX6-Section">
                <div className="SX6-data-img">
                    <img src={dataimg} alt="dataimg" className="SX6-data-img" />
                </div>

                <table className="SX6-tdata">
                    <tr>
                        <td className="SX6-table">Engine power in kW at 1/min:</td>
                        <td className="SX6-table"><strong>195/4000</strong></td>
                    </tr>
                    <tr>
                        <td className="SX6-table">Acceleration 0-100 km/h in s:</td>
                        <td className="SX6-table"><strong>7.0</strong></td>
                    </tr>
                    <tr>
                        <td className="SX6-table">Fuel consumption in Km/I:</td>
                        <td className="SX6-table"><strong>13.38</strong></td>
                    </tr>
                    <tr>
                        <td className="SX6-table">Co2 emission in g/km:</td>
                        <td className="SX6-table"><strong>190</strong></td>
                    </tr>
                </table>
                <button className="SX6-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Sxsix;