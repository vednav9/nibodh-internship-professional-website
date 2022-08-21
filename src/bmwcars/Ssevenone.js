import React from "react";
import S71banner from '../Car/S71/S71banner.jpg';
import bmw71 from '../Car/S71/bmw71.PNG';
import e1 from '../Car/S71/e1.jpg';
import e2 from '../Car/S71/e2.jpg';
import e3 from '../Car/S71/e3.jpg';
import e4 from '../Car/S71/e4.jpg';
import e5 from '../Car/S71/e5.jpg';
import e6 from '../Car/S71/e6.jpg';
import i1 from '../Car/S71/i1.jpg';
import i2 from '../Car/S71/i2.jpg';
import i3 from '../Car/S71/i3.jpg';
import dataimg from '../Car/S71/S71banner.jpg';
import './S71.css';

function Ssevenone() {
    return(
        <div className="Ssevenone">
            <div className='S71-banner-text'>
                BMW 7 Series <br/>Sedan
            </div>
            <img src={S71banner} alt="S71-banner-img" className='S71-banner-img' />

            <div className="S71-car-text">
                The Right Model for Everyone
            </div>
            <div className="S71-car-img">
                <img src={bmw71} alt="bmw3" className="S71-car-img" />
            </div>

            <div className="S71-show-text">
                Design
            </div>
            <div className="S71-show-text-1">
                Exterior
            </div>
            <div className="S71-show-img-1">
                <img src={e1} alt="e1" className="S71-show-e1" />
                <img src={e2} alt="e1" className="S71-show-e2" />
                <img src={e3} alt="e1" className="S71-show-e3" />
                <img src={e4} alt="e1" className="S71-show-e4" />
                <img src={e5} alt="e1" className="S71-show-e5" />
                <img src={e6} alt="e1" className="S71-show-e6" />
            </div>
            <div className="S71-show-text-2">
                Interior
            </div>
            <div className="S71-show-img-2">
                <img src={i1} alt="i1" className="S71-show-i1" />
                <img src={i2} alt="i1" className="S71-show-i2" />
                <img src={i3} alt="i3" className="S71-show-i3" />
            </div>

            <div className="S71-data-text">
                TECHNICAL DATA OF THE BMW 7 Series Sedan.
            </div>
            <div className="S71-data-text1">
                BMW 7 Series Sedan
            </div>

            <div className="S71-Section">
                <div className="S71-data-img">
                    <img src={dataimg} alt="dataimg" className="S71-data-img" />
                </div>

                <table className="S71-tdata">
                    <tr>
                        <td className="S71-table">Engine power in kW at 1/min:</td>
                        <td className="S71-table"><strong>195/4000</strong></td>
                    </tr>
                    <tr>
                        <td className="S71-table">Acceleration 0-100 km/h in s:</td>
                        <td className="S71-table"><strong>5.7</strong></td>
                    </tr>
                    <tr>
                        <td className="S71-table">Fuel consumption in Km/I:</td>
                        <td className="S71-table"><strong>17.42</strong></td>
                    </tr>
                    <tr>
                        <td className="S71-table">Co2 emission in g/km:</td>
                        <td className="S71-table"><strong>150.0</strong></td>
                    </tr>
                </table>
                <button className="S71-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Ssevenone;