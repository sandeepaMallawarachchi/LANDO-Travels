import React from 'react';
import aboutCover from '../images/aboutCover.jpg';
import '../CSS/Index.css';
import { Card } from 'flowbite-react';
import Slider from 'react-slick';
import airTicketing from '../images/airTicketing.jpg';
import travelInsurance from '../images/travelInsurance.png';
import inboundCard from '../images/inboundCard.jpg';
import outboundCard from '../images/outboundCard.jpg';
import hotelReservationCard from '../images/hotelReservationCard.jpg';

const About = () => {

    const cards = [
        {
            src: airTicketing,
            title: 'Airline Ticketing & Reservations',
            description: 'We issue tickets through all online Airlines/offline airlines in Sri Lanka at competitive fares. Participating in IATA BSP program.'
        },
        {
            src: travelInsurance,
            title: 'Travel Insurance',
            description: 'We provide comprehensive travel insurance covers to all passengers upon request Visa Process & Travel Advice Free travel consultation, passport and visa process to all countries with minimum time requirements'
        },
        {
            src: outboundCard,
            title: 'Out bound Holidays/tour programs',
            description: 'Provide comprehensive tailor-made holidays packages and tour programs to India, Maldives, Singapore, Malaysia, Thailand, Indonesia, China, Vietnam, Cambodia, Laos, Dubai, Egypt, Greece, Turkey, Kenya, Tanzania, Jordan, Holy land.'
        },
        {
            src: inboundCard,
            title: 'Inbound Tour Programs',
            description: 'We provide Honeymoon, Cultural, Heritage, Adventure, Sports, Educational, Shopping, Entertainment packages in Sri Lanka , also MICE.'
        },
        {
            src: hotelReservationCard,
            title: 'Worldwide Hotel Reservations',
            description: 'Reservations of hotel accommodation most of the major cities throughout Europe, India, Middle East and far east Representations.'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,  // Automatically slide
        autoplaySpeed: 4000,  // Speed of auto slide (in milliseconds)
    };

    return (
        <div>
            <div>
                <img
                    src={aboutCover}
                    alt="corporate Services"
                    style={{ width: "1920px", height: "720px" }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-8xl font-extrabold drop-shadow-lg leading-none">
                        About Us
                    </h1>
                    <p className="text-white text-3xl drop-shadow-lg p-10 px-20 text-center">
                        Lando Travels (pvt) Ltd has grown over the years as a leading IATA accredited
                        travel Agency in Sri Lanka with professional and well experienced management and staff.
                    </p>

                    <button className="mt-8 px-8 py-4 border-2 border-white text-white text-xl font-semibold rounded-md hover:bg-white hover:text-black transition duration-300">
                        Explore Now
                    </button>
                </div>
            </div>

            <div className='my-10'>
                <h2 className='heading drop-shadow-lg'>Our Services</h2>
                <div className="p-10">
                    <Slider {...settings}>
                        {cards.map((card, index) => (
                            <div key={index} className="px-5">
                                <Card className="flex-shrink-0 w-full h-[500px]"> {/* Fixed height */}
                                    <img src={card.src} alt={card.title} className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105" /> {/* Object-cover to fit image */}
                                    <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white mt-4">
                                        {card.title}
                                    </h5>
                                    <p className="font-normal text-gray-700 text-center dark:text-gray-400">
                                        {card.description}
                                    </p>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default About;