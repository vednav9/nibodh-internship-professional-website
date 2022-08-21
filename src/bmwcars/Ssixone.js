import React from "react";
import S61banner from '../Car/S61/S61banner.jpg';
import bmw61 from '../Car/S61/bmw61.PNG';
import e1 from '../Car/S61/e1.jpg';
import e2 from '../Car/S61/e2.jpg';
import e3 from '../Car/S61/e3.jpg';
import e4 from '../Car/S61/e4.jpg';
import i1 from '../Car/S61/i1.jpg';
import i2 from '../Car/S61/i2.jpg';
import dataimg from '../Car/S61/dataimg.jpg';
import './S61.css';

function Ssixone() {
    return(
        <div className="Ssixone">
            <div className='S61-banner-text'>
                BMW 6 Series Gran <br/>Turismo
            </div>
            <img src={S61banner} alt="S61-banner-img" className='S61-banner-img' />

            <div className="S61-car-text">
                The Right Model for Everyone
            </div>
            <div className="S61-car-img">
                <img src={bmw61} alt="bmw3" className="S61-car-img" />
            </div>

            <div className="S61-show-text">
                Design
            </div>
            <div className="S61-show-text-1">
                Exterior
            </div>
            <div className="S61-show-img-1">
                <img src={e1} alt="e1" className="S61-show-e1" />
                <img src={e2} alt="e1" className="S61-show-e2" />
                <img src={e3} alt="e1" className="S61-show-e3" />
                <img src={e4} alt="e1" className="S61-show-e4" />
            </div>
            <div className="S61-show-text-2">
                Interior
            </div>
            <div className="S61-show-img-2">
                <img src={i1} alt="i1" className="S61-show-i1" />
                <img src={i2} alt="i1" className="S61-show-i2" />
            </div>

            <div className="S61-data-text">
                TECHNICAL DATA OF THE BMW 6 Series Gran Tursimo.
            </div>
            <div className="S61-data-text1">
                BMW 6 Series Gran Tursimo
            </div>

            <div className="S61-Section">
                <div className="S61-data-img">
                    <img src={dataimg} alt="dataimg" className="S61-data-img" />
                </div>

                <table className="S61-tdata">
                    <tr>
                        <td className="S61-table">Engine power in kW at 1/min:</td>
                        <td className="S61-table"><strong>195/4000</strong></td>
                    </tr>
                    <tr>
                        <td className="S61-table">Acceleration 0-100 km/h in s:</td>
                        <td className="S61-table"><strong>5.7</strong></td>
                    </tr>
                    <tr>
                        <td className="S61-table">Fuel consumption in Km/I:</td>
                        <td className="S61-table"><strong>17.42</strong></td>
                    </tr>
                    <tr>
                        <td className="S61-table">Co2 emission in g/km:</td>
                        <td className="S61-table"><strong>150.0</strong></td>
                    </tr>
                </table>
                <button className="S61-Buy">Buy</button>
            </div>
        </div>
    );
}

export default Ssixone;