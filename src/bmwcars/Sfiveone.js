import React from "react";
import S51banner from '../Car/S51/S51banner.jpg';
import bmw51 from '../Car/S51/bmw51.PNG';
import e1 from '../Car/S51/e1.jpg';
import e2 from '../Car/S51/e2.jpg';
import e3 from '../Car/S51/e3.jpg';
import e4 from '../Car/S51/e4.jpg';
import i1 from '../Car/S51/i1.jpg';
import i2 from '../Car/S51/i2.jpg';
import i3 from '../Car/S51/i3.jpg';
import i4 from '../Car/S51/i4.jpg';
import i5 from '../Car/S51/i5.jpg';
import i6 from '../Car/S51/i6.jpg';
import dataimg from '../Car/S51/dataimg.jpg';
import './S51.css';

function Sfiveone() {
    return(
        <div className="Sfiveone">
            <div className='S51-banner-text'>
                BMW 5 Series <br/>Sedan
            </div>
            <img src={S51banner} alt="S51-banner-img" className='S51-banner-img' />

            <div className="S51-car-text">
                The Right Model for Everyone
            </div>
            <div className="S51-car-img">
                <img src={bmw51} alt="bmw3" className="S51-car-img" />
            </div>

            <div className="S51-show-text">
                Design
            </div>
            <div className="S51-show-text-1">
                Exterior
            </div>
            <div className="S51-show-img-1">
                <img src={e1} alt="e1" className="S51-show-e1" />
                <img src={e2} alt="e1" className="S51-show-e2" />
                <img src={e3} alt="e1" className="S51-show-e3" />
                <img src={e4} alt="e1" className="S51-show-e4" />
            </div>
            <div className="S51-show-text-2">
                Interior
            </div>
            <div className="S51-show-img-2">
                <img src={i1} alt="i1" className="S51-show-i1" />
                <img src={i2} alt="i1" className="S51-show-i2" />
                <img src={i3} alt="i1" className="S51-show-i3" />
                <img src={i4} alt="i1" className="S51-show-i4" />
                <img src={i5} alt="i1" className="S51-show-i5" />
                <img src={i6} alt="i1" className="S51-show-i6" />
            </div>

            <div className="S51-data-text">
                TECHNICAL DATA OF THE BMW 5 Series Sedan.
            </div>
            <div className="S51-data-text1">
                BMW 5 Series Sedan
            </div>

            <div className="S51-Section">
                <div className="S51-data-img">
                    <img src={dataimg} alt="dataimg" className="S51-data-img" />
                </div>

                <table className="S51-tdata">
                    <tr>
                        <td className="S51-table">Engine power in kW at 1/min:</td>
                        <td className="S51-table"><strong>195/4000</strong></td>
                    </tr>
                    <tr>
                        <td className="S51-table">Acceleration 0-100 km/h in s:</td>
                        <td className="S51-table"><strong>5.7</strong></td>
                    </tr>
                    <tr>
                        <td className="S51-table">Fuel consumption in Km/I:</td>
                        <td className="S51-table"><strong>17.42</strong></td>
                    </tr>
                    <tr>
                        <td className="S51-table">Co2 emission in g/km:</td>
                        <td className="S51-table"><strong>150.0</strong></td>
                    </tr>
                </table>
                <button className="S51-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Sfiveone;