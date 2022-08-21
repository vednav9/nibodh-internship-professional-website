import React from "react";
import S21banner from '../Car/S21banner.jpg';
import bmw2 from '../Car/bmw2.PNG';
import e1 from '../Car/S21/e1.jpg';
import e2 from '../Car/S21/e2.jpg';
import e3 from '../Car/S21/e3.jpg';
import e4 from '../Car/S21/e4.jpg';
import i1 from '../Car/S21/i1.jpg';
import i2 from '../Car/S21/i2.jpg';
import i3 from '../Car/S21/i3.jpg';
import i4 from '../Car/S21/i4.jpg';
import i5 from '../Car/S21/i5.jpg';
import dataimg from '../Car/S21/data-img.jpg';
import './S21.css';

function Stwoone() {
    return(
        <div className="Stwoone">
            <div className='S21-banner-text'>
                BMW 2 Series<br/>Gran Coupe
            </div>
            <img src={S21banner} alt="S21-banner-img" className='S21-banner-img' />

            <div className="S21-car-text">
                The Right Model for Everyone
            </div>
            <div className="S21-car-img">
                <img src={bmw2} alt="bmw2" className="S21-car-img" />
            </div>

            <div className="S21-show-text">
                Design
            </div>
            <div className="S21-show-text-1">
                Exterior
            </div>
            <div className="S21-show-img-1">
                <img src={e1} alt="e1" className="S21-show-e1" />
                <img src={e2} alt="e1" className="S21-show-e2" />
                <img src={e3} alt="e1" className="S21-show-e3" />
                <img src={e4} alt="e1" className="S21-show-e4" />
            </div>
            <div className="S21-show-text-2">
                Interior
            </div>
            <div className="S21-show-img-2">
                <img src={i1} alt="i1" className="S21-show-i1" />
                <img src={i2} alt="i1" className="S21-show-i2" />
                <img src={i3} alt="i1" className="S21-show-i3" />
                <img src={i4} alt="i1" className="S21-show-i4" />
                <img src={i5} alt="i1" className="S21-show-i5" />
            </div>

            <div className="S21-data-text">
                TECHNICAL DATA OF THE BMW 2 SERIES GRAN COUPÉ.
            </div>
            <div className="S21-data-text1">
                BMW 2 Series Gran Coupe
            </div>

            <div className="S21-Section">
                <div className="S21-data-img">
                    <img src={dataimg} alt="dataimg" className="S21-data-img" />
                </div>

                <table className="S21-tdata">
                    <tr>
                        <td className="S21-table">Engine power in kW at 1/min:</td>
                        <td className="S21-table"><strong>141/5000</strong></td>
                    </tr>
                    <tr>
                        <td className="S21-table">Acceleration 0-100 km/h in s:</td>
                        <td className="S21-table"><strong>7.1</strong></td>
                    </tr>
                    <tr>
                        <td className="S21-table">Fuel consumption in Km/I:</td>
                        <td className="S21-table"><strong>14.82</strong></td>
                    </tr>
                    <tr>
                        <td className="S21-table">Co2 emission in g/km:</td>
                        <td className="S21-table"><strong>158.0</strong></td>
                    </tr>
                </table>
                <button className="S21-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Stwoone;