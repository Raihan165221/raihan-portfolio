import React from 'react';
import raihanImg from '../../images/raihan.jpg';
import './About.css';
const About = () => {
    return (
        <div className='about-section'>
            <div className="about-container">
                <div className='about-img-area'>
                    <img src={raihanImg} alt="" />
                </div>
                <div className='about-details'>
                    <h1 className='about-heading'>About Me</h1>
                    <h3>Hello! <span className='my-name'>I'M Md. Raihan Uddin.</span></h3>
                    <p>I am a Professional Web Developer, I am from Bangladesh. Learning new things is my hobby. I love to make new thins.</p>
                    <p>I am a pixel-perfect web designer and also an experienced and expert in the web development section and working since 2021. Full and fresh hand code is my power. Client satisfaction is my first priority.</p>
                    <p>My design is simple & fresh, SEO optimized. I work flexibly with clients to fulfill their design & development needs. Use my work in your Business, Portfolio, Agency, Photography, E-Commerce & much more.</p>
                </div>
            </div>
        </div>
    );
};

export default About;