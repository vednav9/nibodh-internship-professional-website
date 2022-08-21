import React from "react";
import SM2banner from '../Car/SM2/SM2banner.jpg';
import bmwM2 from '../Car/SM2/bmwM2.PNG';
import e1 from '../Car/SM2/e1.jpg';
import e2 from '../Car/SM2/e2.jpg';
import e3 from '../Car/SM2/e3.jpg';
import e4 from '../Car/SM2/e4.jpg';
import e5 from '../Car/SM2/e5.jpg';
import e6 from '../Car/SM2/e6.jpg';
import i1 from '../Car/SM2/i1.jpg';
import i2 from '../Car/SM2/i2.jpg';
import i3 from '../Car/SM2/i3.jpg';
import i4 from '../Car/SM2/i4.jpg';
import dataimg from '../Car/SM2/dataimg.jpg';
import './SM2.css';

function Smtwo() {
    return(
        <div className="Smtwo">
            <div className='SM2-banner-text'>
                BMW M4 Competition Coupe<br />with M xDrive
            </div>
            <img src={SM2banner} alt="SM2-banner-img" className='SM2-banner-img' />

            <div className="SM2-car-text">
                The Right Model for Everyone
            </div>
            <div className="SM2-car-img">
                <img src={bmwM2} alt="bmw3" className="SM2-car-img" />
            </div>

            <div className="SM2-show-text">
                Design
            </div>
            <div className="SM2-show-text-1">
                Exterior
            </div>
            <div className="SM2-show-img-1">
                <img src={e1} alt="e1" className="SM2-show-e1" />
                <img src={e2} alt="e1" className="SM2-show-e2" />
                <img src={e3} alt="e1" className="SM2-show-e3" />
                <img src={e4} alt="e1" className="SM2-show-e4" />
                <img src={e5} alt="e1" className="SM2-show-e5" />
                <img src={e6} alt="e1" className="SM2-show-e6" />
            </div>
            <div className="SM2-show-text-2">
                Interior
            </div>
            <div className="SM2-show-img-2">
                <img src={i1} alt="i1" className="SM2-show-i1" />
                <img src={i2} alt="i1" className="SM2-show-i2" />
                <img src={i3} alt="i3" className="SM2-show-i3" />
                <img src={i4} alt="i3" className="SM2-show-i4" />
            </div>

            <div className="SM2-data-text">
                TECHNICAL DATA OF THE BMW Z4 Roster.
            </div>
            <div className="SM2-data-text1">
                BMW Z4 Roster
            </div>

            <div className="SM2-Section">
                <div className="SM2-data-img">
                    <img src={dataimg} alt="dataimg" className="SM2-data-img" />
                </div>

                <table className="SM2-tdata">
                    <tr>
                        <td className="SM2-table">Engine power in kW at 1/min:</td>
                        <td className="SM2-table"><strong>375/6250</strong></td>
                    </tr>
                    <tr>
                        <td className="SM2-table">Acceleration 0-100 km/h in s:</td>
                        <td className="SM2-table"><strong>3.5</strong></td>
                    </tr>
                    <tr>
                        <td className="SM2-table">Fuel consumption in Km/I:</td>
                        <td className="SM2-table"><strong>9.76</strong></td>
                    </tr>
                    <tr>
                        <td className="SM2-table">Maximum torque in Nm at 1/min:</td>
                        <td className="SM2-table"><strong>650/5500</strong></td>
                    </tr>
                </table>
                <button className="SM2-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Smtwo;