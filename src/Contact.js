import React from 'react';
import './Contact.css';
import contactbanner from './Car/contact-banner-img3.jpg';

function Contact() {
    return (
        <div className='Contact'>
            <div className='contact-banner-text'>
                Contact Us
            </div>
            <img src={contactbanner} alt="contactbanner" className='contact-banner-img' />

            <div className='contact-h1'>
                CONTACT US
            </div>
            <div className='contact-p1'>
                To contact us, please send an email to contact.india@bmw.in or to reach our Customer Interaction Centre, dial toll free number 1800 102 2269 from Monday to Saturday 09:00 hours to 18:30 hours.
            </div>

            <div className='contact-h2'>
                Supplier Partnership Enquiry
            </div>
            <div className='contact-p2'>
                If you would like to contact Purchasing Department at BMW India for a business proposal and service profile submissions, please send an email to Contact.purchasing@bmw.in
            </div>

            <div className='contact-h3'>
                BMW INDIA PRIVATE LIMITED
            </div>
            <ul className='contact-p3'>
                <li>Corporate Identification Number: U35991HR1997PTC037496</li>
                <li>Registered office: 2nd Floor, Oberoi Centre,</li>
                <li>Building No.11, DLF Cyber City, Phase-II,</li>
                <li>Gurugram, Haryana 122 002, India</li>
                <li>Telephone: +91 124 4566 600</li>
                <li>Fax: +91 124 4566602</li>
                <li>Email: corporateaffairs@bmw.in</li>
                <li>Website <a href="https://www.bmw.in" className='contact-bmw-link'>https://www.bmw.in</a></li>
            </ul>

            <div className='contact-h4'>
                BMW INDIA FINANCIAL SERVICES PVT. LTD.
            </div>
            <ul className='contact-p4'>
                <li>Corporate Identification Number: U65921HR2009FTC039654</li>
                <li>Registered office: 1st Floor, Oberoi Centre,</li>
                <li>Building No.11, DLF Cyber City, Phase-II,</li>
                <li>Gurugram, Haryana 122 002, India</li>
                <li>Telephone: +91 124 4566 600</li>
                <li>Fax: +91 124 4566602</li>
                <li>Website <a href="https://www.bmw.in" className='contact-bmw-link'>https://www.bmw.in</a></li>
            </ul>

            <div className='contact-h5'>
                BMW INDIA LEASING PRIVATE LIMITED
            </div>
            <ul className='contact-p5'>
                <li>Corporate Identification Number: U65100HR2012FTC047889</li>
                <li>Registered office: 1st Floor, Oberoi Centre,</li>
                <li>Building No.11, DLF Cyber City, Phase-II,</li>
                <li>Gurugram, Haryana 122 002, India</li>
            </ul>
        </div>
    );
}

export default Contact;