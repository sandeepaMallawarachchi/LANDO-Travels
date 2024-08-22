import React, { useRef } from "react";
import corparateServices from "../images/corparateServices.jpg";
import airTicketing from "../images/airTicketing2.jpg";
import visaProcessing from "../images/visaProcessing.jpg";
import travelInsurance from "../images/travelInsurance.png";
import travelConsultation from "../images/travelConsultation.jpg";
import "../CSS/Cardstyles.css";
import "../CSS/Index.css";

const CorporateTravelServices = () => {

  const corporateRef = useRef(null);

  const handleScrollToCorporateServices = () => {
    corporateRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const cardsData = [
    {
      imgSrc: airTicketing,
      description: "As an IATA-accredited travel agency, Lando Travels offers seamless ticketing and reservations with all major airlines, both online and offline. We provide competitive fares and ensure that your corporate travel is hassle-free, efficient, and cost-effective.",
      title: "Air Ticketing",
    },
    {
      imgSrc: visaProcessing,
      description: "Navigating visa requirements can be challenging, but Lando Travels simplifies the process for you. Our expert team handles visa applications for all countries, ensuring that your documents are processed quickly and efficiently, allowing you to focus on your business.",
      title: "Visa Processing",
    },
    {
      imgSrc: travelInsurance,
      description: "Protect your corporate travelers with comprehensive travel insurance. We offer tailored insurance packages that cover all aspects of your journey, giving you peace of mind as you travel the world for business.",
      title: "Travel Insurance",
    },
    {
      imgSrc: travelConsultation,
      description: "Planning your business trips with us is easy. We offer free travel consultations to help you plan and execute your corporate travel with minimal hassle. Whether it's a simple ticket booking or a complex itinerary, we're here to assist.",
      title: "Travel Consultation",
    },
  ];

  return (
    <div>
      <div>
        <img
          src={corparateServices}
          alt="corparate Services"
          style={{ width: "1920px", height: "920px" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-8xl font-extrabold drop-shadow-lg leading-none">
            Corporate Travel
          </h1>
          <h1 className="h1">Services</h1>
          <button
            onClick={handleScrollToCorporateServices}
            className="mt-8 px-8 py-4 border-2 border-white text-white text-xl font-semibold rounded-md hover:bg-white hover:text-black transition duration-300">
            Explore Now
          </button>
        </div>
      </div>

      <div className="container my-12 px-10" ref={corporateRef}>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Explore Sri Lanka with Lando Travels
        </h2>
        <div className="card__container mt-6">
          {cardsData.map((card, index) => (
            <article className="card__article" key={index}>
              <img src={card.imgSrc} alt={card.title} className="card__img" />
              <div className="card__data">
                <span className="card__description">{card.description}</span>
                <h2 className="card__title">{card.title}</h2>
                <a href="#" className="card__button">
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateTravelServices;
