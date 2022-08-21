import React from "react";
import SM4banner from '../Car/SM4/SM4banner.jpg';
import bmwM4 from '../Car/SM4/bmwM4.PNG';
import e1 from '../Car/SM4/e1.jpg';
import e2 from '../Car/SM4/e2.jpg';
import e3 from '../Car/SM4/e3.jpg';
import e4 from '../Car/SM4/e4.jpg';
import e5 from '../Car/SM4/e5.jpg';
import i1 from '../Car/SM4/i1.jpg';
import i2 from '../Car/SM4/i2.jpg';
import i3 from '../Car/SM4/i3.jpg';
import dataimg from '../Car/SM4/SM4banner.jpg';
import './SM4.css';

function Smfour() {
    return(
        <div className="Smfour">
            <div className='SM4-banner-text'>
                BMW Z4 M40i
            </div>
            <img src={SM4banner} alt="SM4-banner-img" className='SM4-banner-img' />

            <div className="SM4-car-text">
                The Right Model for Everyone
            </div>
            <div className="SM4-car-img">
                <img src={bmwM4} alt="bmw3" className="SM4-car-img" />
            </div>

            <div className="SM4-show-text">
                Design
            </div>
            <div className="SM4-show-text-1">
                Exterior
            </div>
            <div className="SM4-show-img-1">
                <img src={e1} alt="e1" className="SM4-show-e1" />
                <img src={e2} alt="e1" className="SM4-show-e2" />
                <img src={e3} alt="e1" className="SM4-show-e3" />
                <img src={e4} alt="e1" className="SM4-show-e4" />
                <img src={e5} alt="e1" className="SM4-show-e5" />
            </div>
            <div className="SM4-show-text-2">
                Interior
            </div>
            <div className="SM4-show-img-2">
                <img src={i1} alt="i1" className="SM4-show-i1" />
                <img src={i2} alt="i1" className="SM4-show-i2" />
                <img src={i3} alt="i3" className="SM4-show-i3" />
            </div>

            <div className="SM4-data-text">
                TECHNICAL DATA OF THE BMW Z4 Roster.
            </div>
            <div className="SM4-data-text1">
                BMW Z4 Roster
            </div>

            <div className="SM4-Section">
                <div className="SM4-data-img">
                    <img src={dataimg} alt="dataimg" className="SM4-data-img" />
                </div>

                <table className="SM4-tdata">
                    <tr>
                        <td className="SM4-table">Engine power in kW at 1/min:</td>
                        <td className="SM4-table"><strong>195/4000</strong></td>
                    </tr>
                    <tr>
                        <td className="SM4-table">Acceleration 0-100 km/h in s:</td>
                        <td className="SM4-table"><strong>5.7</strong></td>
                    </tr>
                    <tr>
                        <td className="SM4-table">Fuel consumption in Km/I:</td>
                        <td className="SM4-table"><strong>17.42</strong></td>
                    </tr>
                    <tr>
                        <td className="SM4-table">Co2 emission in g/km:</td>
                        <td className="SM4-table"><strong>150.0</strong></td>
                    </tr>
                </table>
                <button className="SM4-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Smfour;