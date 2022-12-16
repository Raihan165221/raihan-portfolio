import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-text">
                <h3 className='banner-heading'>Welcome</h3>
                <h1 className='banner-title'>I'M A Professional Web Designer.</h1>
                <p className='banner-description'>I am an experienced and expert web developer with having 1 year of experience.</p>
                <button className='resume-btn'>DOWNLOAD RESUME</button><br />
                <div className='animation-area'>
                    <button className='animation-btn'>|</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;