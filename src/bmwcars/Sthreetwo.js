import React from "react";
import S32banner from '../Car/S32/S32banner.jpg';
import bmw32 from '../Car/S32/bmw32.PNG';
import e1 from '../Car/S32/e1.jpg';
import e2 from '../Car/S32/e2.jpg';
import e3 from '../Car/S32/e3.jpg';
import i1 from '../Car/S32/i1.jpg';
import i2 from '../Car/S32/i2.jpg';
import i3 from '../Car/S32/i3.jpg';
import i4 from '../Car/S32/i4.jpg';
import i5 from '../Car/S32/i5.jpg';
import i6 from '../Car/S32/i6.jpg';
import i7 from '../Car/S32/i7.jpg';
import i8 from '../Car/S32/i8.jpg';
import dataimg from '../Car/S32/dataimg.jpg';
import './S32.css';

function Sthreetwo() {
    return(
        <div className="Sthreetwo">
            <div className='S32-banner-text'>
                BMW 3 Series<br/>Gran
            </div>
            <img src={S32banner} alt="S32-banner-img" className='S32-banner-img' />

            <div className="S32-car-text">
                The Right Model for Everyone
            </div>
            <div className="S32-car-img">
                <img src={bmw32} alt="bmw3" className="S32-car-img" />
            </div>

            <div className="S32-show-text">
                Design
            </div>
            <div className="S32-show-text-1">
                Exterior
            </div>
            <div className="S32-show-img-1">
                <img src={e1} alt="e1" className="S32-show-e1" />
                <img src={e2} alt="e1" className="S32-show-e2" />
                <img src={e3} alt="e1" className="S32-show-e3" />
            </div>
            <div className="S32-show-text-2">
                Interior
            </div>
            <div className="S32-show-img-2">
                <img src={i1} alt="i1" className="S32-show-i1" />
                <img src={i2} alt="i1" className="S32-show-i2" />
                <img src={i4} alt="i1" className="S32-show-i4" />
                <img src={i5} alt="i1" className="S32-show-i5" />
                <img src={i6} alt="i1" className="S32-show-i6" />
                <img src={i7} alt="i1" className="S32-show-i7" />
                <img src={i3} alt="i1" className="S32-show-i3" />
                <img src={i8} alt="i1" className="S32-show-i8" />
            </div>

            <div className="S32-data-text">
                TECHNICAL DATA OF THE BMW 3 SERIES Sedan.
            </div>
            <div className="S32-data-text1">
                BMW 3 Series Sedan
            </div>

            <div className="S32-Section">
                <div className="S32-data-img">
                    <img src={dataimg} alt="dataimg" className="S32-data-img" />
                </div>

                <table className="S32-tdata">
                    <tr>
                        <td className="S32-table">Engine power in kW at 1/min:</td>
                        <td className="S32-table"><strong>190/5000</strong></td>
                    </tr>
                    <tr>
                        <td className="S32-table">Acceleration 0-100 km/h in s:</td>
                        <td className="S32-table"><strong>6.2</strong></td>
                    </tr>
                    <tr>
                        <td className="S32-table">Fuel consumption in Km/I:</td>
                        <td className="S32-table"><strong>15.30</strong></td>
                    </tr>
                    <tr>
                        <td className="S32-table">Co2 emission in g/km:</td>
                        <td className="S32-table"><strong>154.0</strong></td>
                    </tr>
                </table>
                <button className="S32-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Sthreetwo;