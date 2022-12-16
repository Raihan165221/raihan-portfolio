import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Claints from '../Claints/Claints';
import HireUs from '../HireUs/HireUs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <HireUs />
            <Claints />
        </div>
    );
};

export default Home;