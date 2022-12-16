import React from 'react';
import './Claint.css';
const Claint = ({ claint }) => {
    const { name, img, said, rating } = claint;
    return (
        <div className='single-claint'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{said}</p>
            <span>Rating: {rating}</span>
        </div>
    );
};

export default Claint;