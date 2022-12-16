import React from 'react';
import Claint from '../Claint/Claint';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Claints.css';
const Claints = () => {
    const claints = [
        {
            id: 1,
            img: "https://img.freepik.com/free-photo/portrait-joyful-young-man-white-shirt_171337-17467.jpg?size=626&ext=jpg&uid=R73666718&ga=GA1.2.679012492.1669006221&semt=sph",
            name: "John Smith",
            said: "Excellent Worker, complete the project as requested within deadline, I would hire again.",
            rating: 5
        },
        {
            id: 2,
            img: "https://img.freepik.com/free-photo/smiling-man-white-shirt-typing-text-message-scrolling-feed-social-network-using-smartphone-gray_171337-634.jpg?size=626&ext=jpg&uid=R73666718&ga=GA1.2.679012492.1669006221&semt=sph",
            name: "Abir Ahmed",
            said: "Raihan has awesome. He has completed my website very quickly and he is right guy. I always like to work with him.",
            rating: 4.4
        },
        {
            id: 3,
            img: "https://img.freepik.com/free-photo/excited-stylish-curly-haired-girl-sunglasses-pointing-right-showing-way_176420-20193.jpg?size=626&ext=jpg&uid=R73666718&ga=GA1.2.679012492.1669006221&semt=sph",
            name: "Nadiya sultana",
            said: 'Very good.I really satistied his work quality and i always recomand him.',
            rating: 4.8
        },
        {
            id: 4,
            img: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&uid=R73666718&ga=GA1.2.679012492.1669006221&semt=sph",
            name: "Rafayet Safi",
            said: "Excellent Work! WIll contact you soon.",
            rating: 4.9
        },
        {
            id: 5,
            img: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg&uid=R73666718&ga=GA1.2.679012492.1669006221&semt=sph",
            name: "Suraiya Akter",
            said: "It is very easy to communicate with Raihan.He delivered the project on time",
            rating: 4.3
        },
        {
            id: 6,
            img: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?size=626&ext=jpg&uid=R73666718&ga=GA1.2.679012492.1669006221&semt=sph",
            name: "Ismail Raju",
            said: "Very good attitude, very fast, he has worked hard on the project.",
            rating: 4.7
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='claints-section'>
            <div className="claints-title">
                <h1>Happy Claint Says</h1>
                <p>I worked with many clients across the world. They are satisfied to my work.</p>
            </div>
            <div className="claints-container">
                <Slider {...settings}>
                    {
                        claints.map(claint => <Claint
                            key={claint.id}
                            claint={claint}
                        />)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Claints;