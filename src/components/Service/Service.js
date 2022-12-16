import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    const { name, title, img } = service;
    return (
        <div className='single-service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{title}</p>
        </div>
    );
};

export default Service;