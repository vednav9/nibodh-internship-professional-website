import React from "react";
import SM3banner from '../Car/SM3/SM3banner.jpg';
import bmwM3 from '../Car/SM3/bmwM3.PNG';
import e1 from '../Car/SM3/e1.jpg';
import e2 from '../Car/SM3/e2.jpg';
import e3 from '../Car/SM3/e3.jpg';
import e4 from '../Car/SM3/e4.jpg';
import e5 from '../Car/SM3/e5.jpg';
import e6 from '../Car/SM3/e6.jpg';
import i1 from '../Car/SM3/i1.jpg';
import i2 from '../Car/SM3/i2.jpg';
import i3 from '../Car/SM3/i3.jpg';
import i4 from '../Car/SM3/i4.jpg';
import dataimg from '../Car/SM3/dataimg.jpg';
import './SM3.css';

function Smthree() {
    return(
        <div className="Smthree">
            <div className='SM3-banner-text'>
                BMW M5 Competition
            </div>
            <img src={SM3banner} alt="SM3-banner-img" className='SM3-banner-img' />

            <div className="SM3-car-text">
                The Right Model for Everyone
            </div>
            <div className="SM3-car-img">
                <img src={bmwM3} alt="bmw3" className="SM3-car-img" />
            </div>

            <div className="SM3-show-text">
                Design
            </div>
            <div className="SM3-show-text-1">
                Exterior
            </div>
            <div className="SM3-show-img-1">
                <img src={e1} alt="e1" className="SM3-show-e1" />
                <img src={e2} alt="e1" className="SM3-show-e2" />
                <img src={e3} alt="e1" className="SM3-show-e3" />
                <img src={e4} alt="e1" className="SM3-show-e4" />
                <img src={e5} alt="e1" className="SM3-show-e5" />
                <img src={e6} alt="e1" className="SM3-show-e6" />
            </div>
            <div className="SM3-show-text-2">
                Interior
            </div>
            <div className="SM3-show-img-2">
                <img src={i1} alt="i1" className="SM3-show-i1" />
                <img src={i2} alt="i1" className="SM3-show-i2" />
                <img src={i3} alt="i3" className="SM3-show-i3" />
                <img src={i4} alt="i3" className="SM3-show-i4" />
            </div>

            <div className="SM3-data-text">
                TECHNICAL DATA OF THE BMW Z4 Roster.
            </div>
            <div className="SM3-data-text1">
                BMW Z4 Roster
            </div>

            <div className="SM3-Section">
                <div className="SM3-data-img">
                    <img src={dataimg} alt="dataimg" className="SM3-data-img" />
                </div>

                <table className="SM3-tdata">
                    <tr>
                        <td className="SM3-table">Engine power in kW at 1/min:</td>
                        <td className="SM3-table"><strong>460/6000</strong></td>
                    </tr>
                    <tr>
                        <td className="SM3-table">Acceleration 0-100 km/h in s:</td>
                        <td className="SM3-table"><strong>3.3</strong></td>
                    </tr>
                    <tr>
                        <td className="SM3-table">Fuel consumption in Km/I:</td>
                        <td className="SM3-table"><strong>11</strong></td>
                    </tr>
                    <tr>
                        <td className="SM3-table">Maximum torque in Nm at 1/min:</td>
                        <td className="SM3-table"><strong>650/5500</strong></td>
                    </tr>
                </table>
                <button className="SM3-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Smthree;