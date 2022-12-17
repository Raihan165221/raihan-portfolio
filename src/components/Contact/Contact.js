import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-section'>
            <div className='contact-heading'>
                <h1>Contact Us</h1>
                <p>Here you will find my contact details. You can knock me, I will respond as soon as possible.</p>
            </div>
            <div className='contact-info'>
                <div className='contact-detail'>
                    <h1><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></h1>
                    <h3>Call Me On</h3>
                    <p>01642494973</p>
                </div>
                <div className='contact-detail'>
                    <h1><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></h1>
                    <h3>Email Me At</h3>
                    <p>raihan165221@gmail.com</p>
                </div>
                <div className='contact-detail'>
                    <h1><FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon></h1>
                    <h3>Visit Office</h3>
                    <p>Mirpur-10, Dhaka</p>
                </div>
            </div>
            <div className='input-field'>
                <div className='inline-field'>
                    <input type="text" placeholder='Your Name*' required />
                    <input type="email" placeholder='Your Email*' required />
                </div>
                <div className='block-field'>
                    <input type="text" placeholder='Your Subject*' required />
                    <textarea placeholder='Your Message...' name="" id="" required></textarea>
                </div>
            </div>
            <div className='send-btn'>
                <button>SEND MESSAGE...</button>
            </div>
        </div>
    );
};

export default Contact;