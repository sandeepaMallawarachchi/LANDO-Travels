import React, { useState, useEffect, useRef } from "react";

import Outboundcover from "../images/Unboundcover.jpg";
import outboundsingapore from "../images/outboundsingapore.jpg";
import outboundgreek from "../images/outboundgreek.jpg";
import outbounddubai from "../images/outbounddubai.jpg";
import outboundmaldives from "../images/outboundmaldives.jpg";
import hotels from "../images/hotels.jpg";
import "../CSS/Cardstyles.css";
import "../CSS/Index.css";

const OutboundTours = () => {
  const outboundRef = useRef(null);

  const handleScrollToOutboundServices = () => {
    outboundRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const cardsData = [
    {
      imgSrc: outboundsingapore,
      description: "Singapore",
      title: "Southeast Asia",
    },
    {
      imgSrc: outboundgreek,
      description: "Greek",
      title: "Middle East & Africa",
    },
    {
      imgSrc: outbounddubai,
      description: "Dubai",
      title: "Europe & Beyond ",
    },
    {
      imgSrc: outboundmaldives,
      description: "Maldives",
      title: "India & Maldives",
    },
  ];

  return (
    <div>
      <img
        src={Outboundcover}
        alt="Inbound Tour"
        style={{ width: "1920px", height: "920px" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-8xl font-extrabold drop-shadow-lg leading-none">
          Outbound
        </h1>
        <h1 className="h1">Tours</h1>
        <button
          onClick={handleScrollToOutboundServices}
          className="mt-8 px-8 py-4 border-2 border-white text-white text-xl font-semibold rounded-md hover:bg-white hover:text-black transition duration-300"
        >
          Explore Now
        </button>
      </div>

      <div className="container mt-12 px-10" ref={outboundRef}>
        {" "}
        {/* Added margin-top for spacing */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Tailor-Made Outbound Travel
        </h2>{" "}
        <p className="text-center my-10">
          Expand your horizons with our outbound tour programs, offering travel
          packages to top destinations around the world. Whether it's leisure or
          business, we provide customized itineraries to countries such as:
          <br />
          Our itineraries include:
        </p>
        <div className="card__container">
          {cardsData.map((card, index) => (
            <article className="card__article">
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
      {/* hotels section */}
      <div className="flex justify-center items-center mt-12 mb-12">
        <section className="flex flex-col lg:flex-row items-center justify-center my-12 px-10">
          {/* Text Section */}
          <div className="lg:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Worldwide Hotel Reservations
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Lando Travels offers global hotel reservations, ensuring that your
              accommodation needs are met, no matter where your business takes
              you. We provide bookings in major cities across Europe, the Middle
              East, Asia, and beyond.
            </p>
            <h4>
              Explore the world with confidence, knowing that Lando Travels is
              by your side.
            </h4>
            <br></br>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 p-6">
            <img
              src={hotels} // Replace this with your image URL
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default OutboundTours;
