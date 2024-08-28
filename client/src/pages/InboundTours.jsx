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
      imgSrc: inboundbeach,
      description: "Sigiriya, Rock fortress in Srilanka",
      title: "Historic & Archaeological Sites",
    },
    {
      imgSrc: inboundtiger,
      description: "National Park, Yala",
      title: "Nature & Wildlife",
    },
    {
      imgSrc: inboundtemple,
      description: "Temple of tooth, Kandy",
      title: "Cultural & Religious Centers",
    },
    {
      imgSrc: inboundleisure,
      description: "Unawatuna, Galle",
      title: "Adventure & Leisure",
    },
  ];

  return (
    <div>
      <img
        src={inboundcover}
        alt="Inbound Tour"
        style={{ width: "1920px", height: "920px" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-8xl font-extrabold drop-shadow-lg leading-none">
          Inbound
        </h1>
        <h1 className="h1">Tours</h1>
        <button
          onClick={handleScrollToInboundServices}
          className="mt-8 px-8 py-4 border-2 border-white text-white text-xl font-semibold rounded-md hover:bg-white hover:text-black transition duration-300"
        >
          Explore Now
        </button>
      </div>

      <div className="container mt-12 mb-24 px-10" ref={inboundRef}>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Explore Sri Lanka with Lando Travels
        </h2>
        <p className="text-center">
          If you are promoting tourism in Sri Lanka as part of your business
          expansion, Lando Travels offers a range of exciting inbound tour
          packages. <br />
          Our itineraries include:
        </p>
        <div className="card__container mt-6">
          {cardsData.map((card, index) => (
            <article className="card__article" key={index}>
              <img src={card.imgSrc} alt={card.title} className="card__img" />
              <div className="card__data">
                <span className="card__description">{card.description}</span>
                <h2 className="card__title">{card.title}</h2>
                <h3>And More</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center items-center my-12">
          <p>
            Our tours are led by experienced guides who speak your language,
            ensuring a comfortable and informative experience. Whether it's a
            honeymoon, educational trip, or business event, we tailor each
            package to your specific needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InboundTours;
