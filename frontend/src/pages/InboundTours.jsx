import React, { useRef } from "react";
import inboundcover from "../images/inboundcover.jpg";
import inboundtiger from "../images/inboundtiger.jpg";
import inboundtemple from "../images/inboundtemple.jpg";
import inboundbeach from "../images/inboundbeach.jpg";
import inboundleisure from "../images/inboundleisure.jpg";
import "../CSS/Cardstyles.css";
import "../CSS/Index.css";

const InboundTours = () => {
  const inboundRef = useRef(null);

  const handleScrollToInboundServices = () => {
    inboundRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const cardsData = [
    {
      id: 1,
      imgSrc: inboundbeach,
      description: "Sigiriya, an ancient rock fortress and UNESCO World Heritage site in Sri Lanka, showcasing breathtaking views and historical significance.",
      title: "Historic & Archaeological Sites",
    },
    {
      id: 2,
      imgSrc: inboundtiger,
      description: "Yala National Park, famous for its rich biodiversity, offering a chance to witness leopards, elephants, and vibrant wildlife.",
      title: "Nature & Wildlife",
    },
    {
      id: 3,
      imgSrc: inboundtemple,
      description: "Temple of the Sacred Tooth Relic in Kandy, a revered Buddhist pilgrimage site with rich history and stunning architecture.",
      title: "Cultural & Religious Centers",
    },
    {
      id: 4,
      imgSrc: inboundleisure,
      description: "Unawatuna, a tropical paradise in Galle, ideal for relaxing beaches, snorkeling, and exploring coastal charm.",
      title: "Adventure & Leisure",
    },
  ];

  return (
    <div>
      <div className="relative w-full h-[400px] sm:h-[600px] lg:h-[720px]">
        <img
          src={inboundcover}
          alt="Inbound Tour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <h1 className="text-white text-7xl sm:text-6xl lg:text-8xl font-extrabold drop-shadow-lg leading-none text-center">
            Inbound
          </h1>
          <h2 className="h1 sm:text-4xl lg:text-5xl mt-2">Tours</h2>
          <button
            onClick={handleScrollToInboundServices}
            className="mt-8 px-6 py-3 border-2 border-white text-white text-lg sm:text-xl font-semibold rounded-md hover:bg-white hover:text-black transition duration-300"
          >
            Explore Now
          </button>
        </div>
      </div>

      <div className="container my-12 px-10" ref={inboundRef}>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Explore Sri Lanka with Lando Travels
        </h2>
        <p className="text-center my-10">
          If you are promoting tourism in Sri Lanka as part of your business
          expansion, Lando Travels offers a range of exciting inbound tour
          packages. <br />
          Our itineraries include:
        </p>
        <div className="card__container">
          {cardsData.map((card) => (
            <article className="card__article" key={card.id}>
              <img src={card.imgSrc} alt={card.title} className="card__img" />
              <div className="card__data">
                <span className="card__description">{card.description}</span>
                <h2 className="card__title">{card.title}</h2>
                <h3>And More</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InboundTours;
