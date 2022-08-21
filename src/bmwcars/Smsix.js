import React from "react";
import SM6banner from '../Car/SM6/SM6banner.jpg';
import bmwM6 from '../Car/SM6/bmwM6.PNG';
import e1 from '../Car/SM6/e1.jpg';
import e2 from '../Car/SM6/e2.jpg';
import e3 from '../Car/SM6/e3.jpg';
import e4 from '../Car/SM6/e4.jpg';
import e5 from '../Car/SM6/e5.jpg';
import i1 from '../Car/SM6/i1.jpg';
import i2 from '../Car/SM6/i2.jpg';
import i3 from '../Car/SM6/i3.jpg';
import i4 from '../Car/SM6/i4.jpg';
import dataimg from '../Car/SM6/dataimg.jpg';
import './SM6.css';

function Smsix() {
    return(
        <div className="Smsix">
            <div className='SM6-banner-text'>
                BMW X5 M Competition
            </div>
            <img src={SM6banner} alt="SM6-banner-img" className='SM6-banner-img' />

            <div className="SM6-car-text">
                The Right Model for Everyone
            </div>
            <div className="SM6-car-img">
                <img src={bmwM6} alt="bmw3" className="SM6-car-img" />
            </div>

            <div className="SM6-show-text">
                Design
            </div>
            <div className="SM6-show-text-1">
                Exterior
            </div>
            <div className="SM6-show-img-1">
                <img src={e1} alt="e1" className="SM6-show-e1" />
                <img src={e2} alt="e1" className="SM6-show-e2" />
                <img src={e3} alt="e1" className="SM6-show-e3" />
                <img src={e4} alt="e1" className="SM6-show-e4" />
                <img src={e5} alt="e1" className="SM6-show-e5" />
            </div>
            <div className="SM6-show-text-2">
                Interior
            </div>
            <div className="SM6-show-img-2">
                <img src={i1} alt="i1" className="SM6-show-i1" />
                <img src={i2} alt="i1" className="SM6-show-i2" />
                <img src={i3} alt="i3" className="SM6-show-i3" />
                <img src={i4} alt="i3" className="SM6-show-i4" />
            </div>

            <div className="SM6-data-text">
                TECHNICAL DATA OF THE BMW Z4 Roster.
            </div>
            <div className="SM6-data-text1">
                BMW Z4 Roster
            </div>

            <div className="SM6-Section">
                <div className="SM6-data-img">
                    <img src={dataimg} alt="dataimg" className="SM6-data-img" />
                </div>

                <table className="SM6-tdata">
                    <tr>
                        <td className="SM6-table">Engine power in kW at 1/min:</td>
                        <td className="SM6-table"><strong>460/6000</strong></td>
                    </tr>
                    <tr>
                        <td className="SM6-table">Acceleration 0-100 km/h in s:</td>
                        <td className="SM6-table"><strong>3.8</strong></td>
                    </tr>
                    <tr>
                        <td className="SM6-table">Fuel consumption in Km/I:</td>
                        <td className="SM6-table"><strong>8.29</strong></td>
                    </tr>
                    <tr>
                        <td className="SM6-table">Co2 emissions in g/km:</td>
                        <td className="SM6-table"><strong>286</strong></td>
                    </tr>
                </table>
                <button className="SM6-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Smsix;