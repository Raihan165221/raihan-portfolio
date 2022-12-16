import React from 'react';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const services = [
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmN_gvYf7Zn7O8CUHG3xvbftY-upWR4kX9w&usqp=CAU',
            name: 'Web Design',
            title: 'There are many variations of passages of but the majority have suffered alteration in some form.'
        },
        {
            id: 2,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8Xmkinv5z1mNkw7KdRZgmmP5SJj-1FKjpQ&usqp=CAU',
            name: 'Web Design',
            name: 'PSD to HTML',
            title: 'I will convert your PSD to HTML5 with Latest Bootstrap. It will fully responsive and Pixel perfect.'
        },
        {
            id: 3,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlCh5U6SMc5E_78tH2DMuKB02sg9_5kT1og&usqp=CAU',
            name: 'Graphic Design',
            title: 'I can design logo, banner, thumbnail for your project. I am very experienced and expert in this fiend.'
        },
        {
            id: 4,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUgso4xRGLnXNZTrveeDk4iUo7Tge-Ufn6g&usqp=CAU',
            name: 'PSD To WordPress',
            title: 'I can create any kinds of WordPress website with any theme based on client requirements. ​'
        },
        {
            id: 5,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmbD_bnKhWxGV6D2gFkkZ2pGPo4_i9-pjKA&usqp=CAU',
            name: 'Responsive Design',
            title: 'I can design responsive webpages. It will be fresh, SEO optimized and hand coded.'
        },
        {
            id: 6,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgTgTsSgAuou1W4fKtm6ftUphwtmSWer6Csw&usqp=CAU',
            name: 'Bugs fixing',
            title: 'I am expert in fixing bugs. if your website have also problem such like that you may knock me.'
        }
    ]
    return (
        <div className='services-section'>
            <div className='service-title'>
                <h1>My Services</h1>
                <p>I am working as a web developer since 2021. At this time, I completed lots of successful projects. Here are some of my services.</p>
            </div>
            <div className='services-container'>
                {
                    services.map(service => <Service key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;