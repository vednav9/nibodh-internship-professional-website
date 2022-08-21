import React from "react";
import S33banner from '../Car/S33/S33banner.jpg';
import bmw33 from '../Car/S33/bmw33.PNG';
import e1 from '../Car/S33/e1.jpg';
import e2 from '../Car/S33/e2.jpg';
import e3 from '../Car/S33/e3.jpg';
import e4 from '../Car/S33/e4.jpg';
import e5 from '../Car/S33/e5.jpg';
import i1 from '../Car/S33/i1.jpg';
import i2 from '../Car/S33/i2.jpg';
import i3 from '../Car/S33/i3.jpg';
import i4 from '../Car/S33/i4.jpg';
import dataimg from '../Car/S33/dataimg.jpg';
import './S33.css';

function Sthreethree() {
    return(
        <div className="Sthreethree">
            <div className='S33-banner-text'>
                BMW 3 M340i xDrive 50 <br/>Jahre M Edition
            </div>
            <img src={S33banner} alt="S33-banner-img" className='S33-banner-img' />

            <div className="S33-car-text">
                The Right Model for Everyone
            </div>
            <div className="S33-car-img">
                <img src={bmw33} alt="bmw3" className="S33-car-img" />
            </div>

            <div className="S33-show-text">
                Design
            </div>
            <div className="S33-show-text-1">
                Exterior
            </div>
            <div className="S33-show-img-1">
                <img src={e1} alt="e1" className="S33-show-e1" />
                <img src={e2} alt="e1" className="S33-show-e2" />
                <img src={e3} alt="e1" className="S33-show-e3" />
                <img src={e4} alt="e1" className="S33-show-e4" />
                <img src={e5} alt="e1" className="S33-show-e5" />
            </div>
            <div className="S33-show-text-2">
                Interior
            </div>
            <div className="S33-show-img-2">
                <img src={i1} alt="i1" className="S33-show-i1" />
                <img src={i2} alt="i1" className="S33-show-i2" />
                <img src={i3} alt="i1" className="S33-show-i3" />
                <img src={i4} alt="i1" className="S33-show-i4" />
            </div>

            <div className="S33-data-text">
                TECHNICAL DATA OF THE BMW 3 SERIES Sedan.
            </div>
            <div className="S33-data-text1">
                BMW 3 Series Sedan
            </div>

            <div className="S33-Section">
                <div className="S33-data-img">
                    <img src={dataimg} alt="dataimg" className="S33-data-img" />
                </div>

                <table className="S33-tdata">
                    <tr>
                        <td className="S33-table">Engine power in kW at 1/min:</td>
                        <td className="S33-table"><strong>285/5,800</strong></td>
                    </tr>
                    <tr>
                        <td className="S33-table">Acceleration 0-100 km/h in s:</td>
                        <td className="S33-table"><strong>4.4</strong></td>
                    </tr>
                    <tr>
                        <td className="S33-table">Fuel consumption in Km/I:</td>
                        <td className="S33-table"><strong>11.86</strong></td>
                    </tr>
                    <tr>
                        <td className="S33-table">Co2 emission in g/km:</td>
                        <td className="S33-table"><strong>190</strong></td>
                    </tr>
                </table>
                <button className="S33-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Sthreethree;