import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Claints from '../Claints/Claints';
import Contact from '../Contact/Contact';
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
            <Contact />
        </div>
    );
};

export default Home;