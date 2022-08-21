import React from "react";
import SZ1banner from '../Car/SZ1/SZ1banner.jpg';
import bmwZ1 from '../Car/SZ1/bmwZ1.PNG';
import e1 from '../Car/SZ1/e1.jpg';
import e2 from '../Car/SZ1/e2.jpg';
import e3 from '../Car/SZ1/e3.jpg';
import e4 from '../Car/SZ1/e4.jpg';
import e5 from '../Car/SZ1/e5.jpg';
import i1 from '../Car/SZ1/i1.jpg';
import i2 from '../Car/SZ1/i2.jpg';
import i3 from '../Car/SZ1/i3.jpg';
import dataimg from '../Car/SZ1/SZ1banner.jpg';
import './SZ1.css';

function Szone() {
    return(
        <div className="Szone">
            <div className='SZ1-banner-text'>
                BMW Z4 Roster
            </div>
            <img src={SZ1banner} alt="SZ1-banner-img" className='SZ1-banner-img' />

            <div className="SZ1-car-text">
                The Right Model for Everyone
            </div>
            <div className="SZ1-car-img">
                <img src={bmwZ1} alt="bmw3" className="SZ1-car-img" />
            </div>

            <div className="SZ1-show-text">
                Design
            </div>
            <div className="SZ1-show-text-1">
                Exterior
            </div>
            <div className="SZ1-show-img-1">
                <img src={e1} alt="e1" className="SZ1-show-e1" />
                <img src={e2} alt="e1" className="SZ1-show-e2" />
                <img src={e3} alt="e1" className="SZ1-show-e3" />
                <img src={e4} alt="e1" className="SZ1-show-e4" />
                <img src={e5} alt="e1" className="SZ1-show-e5" />
            </div>
            <div className="SZ1-show-text-2">
                Interior
            </div>
            <div className="SZ1-show-img-2">
                <img src={i1} alt="i1" className="SZ1-show-i1" />
                <img src={i2} alt="i1" className="SZ1-show-i2" />
                <img src={i3} alt="i3" className="SZ1-show-i3" />
            </div>

            <div className="SZ1-data-text">
                TECHNICAL DATA OF THE BMW Z4 Roster.
            </div>
            <div className="SZ1-data-text1">
                BMW Z4 Roster
            </div>

            <div className="SZ1-Section">
                <div className="SZ1-data-img">
                    <img src={dataimg} alt="dataimg" className="SZ1-data-img" />
                </div>

                <table className="SZ1-tdata">
                    <tr>
                        <td className="SZ1-table">Engine power in kW at 1/min:</td>
                        <td className="SZ1-table"><strong>195/4000</strong></td>
                    </tr>
                    <tr>
                        <td className="SZ1-table">Acceleration 0-100 km/h in s:</td>
                        <td className="SZ1-table"><strong>5.7</strong></td>
                    </tr>
                    <tr>
                        <td className="SZ1-table">Fuel consumption in Km/I:</td>
                        <td className="SZ1-table"><strong>17.42</strong></td>
                    </tr>
                    <tr>
                        <td className="SZ1-table">Co2 emission in g/km:</td>
                        <td className="SZ1-table"><strong>150.0</strong></td>
                    </tr>
                </table>
                <button className="SZ1-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Szone;