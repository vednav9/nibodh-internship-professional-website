import React from "react";
import S31banner from '../Car/S31/S31banner.jpg';
import bmw3 from '../Car/bmw3.PNG';
import e1 from '../Car/S31/e1.jpg';
import e2 from '../Car/S31/e2.jpg';
import e3 from '../Car/S31/e3.jpg';
import e4 from '../Car/S31/e4.jpg';
import e5 from '../Car/S31/e5.jpg';
import e6 from '../Car/S31/e6.jpg';
import i1 from '../Car/S31/i1.jpg';
import i2 from '../Car/S31/i2.jpg';
import i3 from '../Car/S31/i3.jpg';
import i4 from '../Car/S31/i4.jpg';
import i5 from '../Car/S31/i5.jpg';
import i6 from '../Car/S31/i6.jpg';
import i7 from '../Car/S31/i7.jpg';
import i8 from '../Car/S31/i8.jpg';
import dataimg from '../Car/S31/dataimg.jpg';
import './S31.css';

function Sthreeone() {
    return(
        <div className="Sthreeone">
            <div className='S31-banner-text'>
                BMW 3 Series<br/>Sedan
            </div>
            <img src={S31banner} alt="S31-banner-img" className='S31-banner-img' />

            <div className="S31-car-text">
                The Right Model for Everyone
            </div>
            <div className="S31-car-img">
                <img src={bmw3} alt="bmw3" className="S31-car-img" />
            </div>

            <div className="S31-show-text">
                Design
            </div>
            <div className="S31-show-text-1">
                Exterior
            </div>
            <div className="S31-show-img-1">
                <img src={e1} alt="e1" className="S31-show-e1" />
                <img src={e2} alt="e1" className="S31-show-e2" />
                <img src={e3} alt="e1" className="S31-show-e3" />
                <img src={e4} alt="e1" className="S31-show-e4" />
                <img src={e5} alt="e1" className="S31-show-e5" />
                <img src={e6} alt="e1" className="S31-show-e6" />
            </div>
            <div className="S31-show-text-2">
                Interior
            </div>
            <div className="S31-show-img-2">
                <img src={i1} alt="i1" className="S31-show-i1" />
                <img src={i2} alt="i1" className="S31-show-i2" />
                <img src={i3} alt="i1" className="S31-show-i3" />
                <img src={i4} alt="i1" className="S31-show-i4" />
                <img src={i5} alt="i1" className="S31-show-i5" />
                <img src={i6} alt="i1" className="S31-show-i6" />
                <img src={i7} alt="i1" className="S31-show-i7" />
                <img src={i8} alt="i1" className="S31-show-i8" />
            </div>

            <div className="S31-data-text">
                TECHNICAL DATA OF THE BMW 3 SERIES Sedan.
            </div>
            <div className="S31-data-text1">
                BMW 3 Series Sedan
            </div>

            <div className="S31-Section">
                <div className="S31-data-img">
                    <img src={dataimg} alt="dataimg" className="S31-data-img" />
                </div>

                <table className="S31-tdata">
                    <tr>
                        <td className="S31-table">Engine power in kW at 1/min:</td>
                        <td className="S31-table"><strong>190/5000</strong></td>
                    </tr>
                    <tr>
                        <td className="S31-table">Acceleration 0-100 km/h in s:</td>
                        <td className="S31-table"><strong>5.8</strong></td>
                    </tr>
                    <tr>
                        <td className="S31-table">Fuel consumption in Km/I:</td>
                        <td className="S31-table"><strong>16.13</strong></td>
                    </tr>
                    <tr>
                        <td className="S31-table">Co2 emission in g/km:</td>
                        <td className="S31-table"><strong>144</strong></td>
                    </tr>
                </table>
                <button className="S31-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Sthreeone;