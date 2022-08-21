import React from 'react';
import './Warranty.css';
import Warrantybanner from './Car/Warrantybanner.jpg';

function Warranty() {
    return (
        <div className='Warranty'>
            <div className='Warranty-banner-text'>
                Warranty Policy
            </div>
            <img src={Warrantybanner} alt='WarrantyBanner' className='Warranty-banner' />
            <div className='warranty-h1'>
                Standard Warranty
            </div>
            <div className='warranty-h2'>
                Combustion Engine Model
            </div>
            <div className='warranty-p2'>
                Your new vehicle is covered by a 24-month contractual warranty, provided by the BMW authorised Dealer. The warranty period will commence from the date of first use of the vehicle, first official registration, vehicle invoice or the date of vehicle handover (whichever comes first) also known as warranty start date, with no mileage limitation.
                The warranty is restricted to the repair or replacement of any part of the vehicle found to be defective in materials or workmanship at the discretion of a BMW authorised Dealer. If a component is replaced on the basis of warranty due to a functional fault for which BMW is responsible, then this part is covered by the warranty for the residual running period.
            </div>
            <div className='warranty-h3'>
                Battery Electric Model
            </div>
            <div className='warranty-p3'>
                Your new vehicle is covered by a 24-month contractual warranty, provided by the BMW authorised Dealer. The warranty period will commence from the date of first use of the vehicle, first official registration, vehicle invoice or the date of vehicle handover (whichever comes first) also known as warranty start date, with no mileage limitation.
                The warranty is restricted to the repair or replacement of any part of the vehicle found to be defective in materials or workmanship at the discretion of a BMW authorised Dealer. If a component is replaced on the basis of warranty due to a functional fault for which BMW is responsible, then this part is covered by the warranty for the residual running period.
                Warranty for High voltage battery cells of BEV (battery electric vehicle) is valid for 8 year and 1,60,000 Kms, whichever comes first.
            </div>
            <div className='warranty-h4'>
                Guanteed Quality
            </div>
            <div className='warranty-p4'>
                Under the terms of the warranty, you are required to maintain, operate and use the vehicle in accordance with the manufacturer's instructions and within the specified operating limitations. For detailed information, please refer to the BMW Owner Manual and BMW Service Booklet. We recommend strongly that, at all times, your vehicle is serviced only at Authorised BMW Dealer outlets. BMW Authorised Dealers have the approved equipment’s, spare parts, operational fluids and highly trained specialist personnel required and specified by the manufacturer to maintain your vehicle's quality, performance and safety in the most professional manner. 
            </div>
            <div className='warranty-h5'>
                Paint Warranty
            </div>
            <div className='warranty-p5'>
                The painted surface of each new vehicle sold by itself or an authorised BMW dealer is also provided with a three year warranty cover from the warranty start date of such vehicle. This excludes any damage to the painted surface by external or environmental influences.
            </div>
        </div>
    );
}

export default Warranty;