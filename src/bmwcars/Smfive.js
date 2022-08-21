import React from "react";
import SM5banner from '../Car/SM5/SM5banner.jpg';
import bmwM5 from '../Car/SM5/bmwM5.jpg';
import e1 from '../Car/SM5/e1.jpg';
import e2 from '../Car/SM5/e2.jpg';
import e3 from '../Car/SM5/e3.jpg';
import e4 from '../Car/SM5/e4.jpg';
import i1 from '../Car/SM5/i1.jpg';
import i2 from '../Car/SM5/i2.jpg';
import dataimg from '../Car/SM5/dataimg.jpg';
import './SM5.css';

function Smfive() {
    return(
        <div className="Smfive">
            <div className='SM5-banner-text'>
                BMW M8 Coupe
            </div>
            <img src={SM5banner} alt="SM5-banner-img" className='SM5-banner-img' />

            <div className="SM5-car-text">
                The Right Model for Everyone
            </div>
            <div className="SM5-car-img">
                <img src={bmwM5} alt="bmw3" className="SM5-car-img" />
            </div>

            <div className="SM5-show-text">
                Design
            </div>
            <div className="SM5-show-text-1">
                Exterior
            </div>
            <div className="SM5-show-img-1">
                <img src={e1} alt="e1" className="SM5-show-e1" />
                <img src={e2} alt="e1" className="SM5-show-e2" />
                <img src={e3} alt="e1" className="SM5-show-e3" />
                <img src={e4} alt="e1" className="SM5-show-e4" />
            </div>
            <div className="SM5-show-text-2">
                Interior
            </div>
            <div className="SM5-show-img-2">
                <img src={i1} alt="i1" className="SM5-show-i1" />
                <img src={i2} alt="i1" className="SM5-show-i2" />
            </div>

            <div className="SM5-data-text">
                TECHNICAL DATA OF THE BMW Z4 Roster.
            </div>
            <div className="SM5-data-text1">
                BMW Z4 Roster
            </div>

            <div className="SM5-Section">
                <div className="SM5-data-img">
                    <img src={dataimg} alt="dataimg" className="SM5-data-img" />
                </div>

                <table className="SM5-tdata">
                    <tr>
                        <td className="SM5-table">Engine power in kW at 1/min:</td>
                        <td className="SM5-table"><strong>441/6000</strong></td>
                    </tr>
                    <tr>
                        <td className="SM5-table">Acceleration 0-100 km/h in s:</td>
                        <td className="SM5-table"><strong>3.3</strong></td>
                    </tr>
                    <tr>
                        <td className="SM5-table">Fuel consumption in Km/I:</td>
                        <td className="SM5-table"><strong>6.59</strong></td>
                    </tr>
                    <tr>
                        <td className="SM5-table">Maximum torque in Nm at 1/min:</td>
                        <td className="SM5-table"><strong>750/5600</strong></td>
                    </tr>
                </table>
                <button className="SM5-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Smfive;