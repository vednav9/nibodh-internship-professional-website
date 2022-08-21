import React from "react";
import SI2banner from '../Car/SI2/SI2banner.jpg';
import bmwI2 from '../Car/SI2/bmwI2.PNG';
import e1 from '../Car/SI2/e1.jpg';
import e2 from '../Car/SI2/e2.jpg';
import e3 from '../Car/SI2/e3.jpg';
import e4 from '../Car/SI2/e4.jpg';
import e5 from '../Car/SI2/e5.jpg';
import e6 from '../Car/SI2/e6.jpg';
import i1 from '../Car/SI2/i1.jpg';
import i2 from '../Car/SI2/i2.jpg';
import i3 from '../Car/SI2/i3.jpg';
import i4 from '../Car/SI2/i4.jpg';
import i5 from '../Car/SI2/i5.jpg';
import dataimg from '../Car/SI2/bmwI2.PNG';
import './SI2.css';

function SItwo() {
    return(
        <div className="SIone">
            <div className='SI2-banner-text'>
                BMW i4
            </div>
            <img src={SI2banner} alt="SI2-banner-img" className='SI2-banner-img' />

            <div className="SI2-car-text">
                The Right Model for Everyone
            </div>
            <div className="SI2-car-img">
                <img src={bmwI2} alt="bmw3" className="SI2-car-img" />
            </div>

            <div className="SI2-show-text">
                Design
            </div>
            <div className="SI2-show-text-1">
                Exterior
            </div>
            <div className="SI2-show-img-1">
                <img src={e4} alt="e1" className="SI2-show-e4" />
                <img src={e5} alt="e1" className="SI2-show-e5" />
                <img src={e6} alt="e1" className="SI2-show-e6" />
                <img src={e1} alt="e1" className="SI2-show-e1" />
                <img src={e2} alt="e1" className="SI2-show-e2" />
                <img src={e3} alt="e1" className="SI2-show-e3" />
            </div>
            <div className="SI2-show-text-2">
                Interior
            </div>
            <div className="SI2-show-img-2">
                <img src={i1} alt="i1" className="SI2-show-i1" />
                <img src={i2} alt="i1" className="SI2-show-i2" />
                <img src={i3} alt="i1" className="SI2-show-i3" />
                <img src={i4} alt="i1" className="SI2-show-i4" />
                <img src={i5} alt="i1" className="SI2-show-i5" />
            </div>

            <div className="SI2-data-text">
                TECHNICAL DATA OF THE BMW i4.
            </div>
            <div className="SI2-data-text1">
                BMW i4
            </div>

            <div className="SI2-Section">
                <div className="SI2-data-img">
                    <img src={dataimg} alt="dataimg" className="SI2-data-img" />
                </div>

                <table className="SI2-tdata">
                    <tr>
                        <td className="SI2-table">Power in kW:</td>
                        <td className="SI2-table"><strong>240</strong></td>
                    </tr>
                    <tr>
                        <td className="SI2-table">Driving Performance 0-100 km/h in s:</td>
                        <td className="SI2-table"><strong>6.1</strong></td>
                    </tr>
                    <tr>
                        <td className="SI2-table">Electric range in Km:</td>
                        <td className="SI2-table"><strong>372-425</strong></td>
                    </tr>
                    <tr>
                        <td className="SI2-table">Energy consumption kWh/100 km:</td>
                        <td className="SI2-table"><strong>22.5-19.4</strong></td>
                    </tr>
                </table>
                <button className="SI2-Buy">Buy</button>
            </div>
        </div>
    );
}

export default SItwo;