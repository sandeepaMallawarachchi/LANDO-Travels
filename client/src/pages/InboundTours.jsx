import React from "react";
import inboundcover from "../images/inboundcover.jpg";
import inboundtiger from "../images/inboundtiger.jpg";
import inboundtemple from "../images/inboundtemple.jpg";
import inboundbeach from "../images/inboundbeach.jpg";
import inboundleisure from "../images/inboundleisure.jpg";
import "../CSS/Cardstyles.css";
import "../CSS/Index.css";

const Card = ({ imgSrc, description, title }) => {
  return (
    <article className="card__article">
      <img src={imgSrc} alt={title} className="card__img" />
      <div className="card__data">
        <span className="card__description">{description}</span>
        <h2 className="card__title">{title}</h2>
        <a href="#" className="card__button">
          Read More
        </a>
      </div>
    </article>
  );
};
const InboundTours = () => {
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
        <button className="mt-8 px-8 py-4 border-2 border-white text-white text-xl font-semibold rounded-md hover:bg-white hover:text-black transition duration-300">
          Explore Now
        </button>
      </div>

      <div className="container mt-12">
        {/* Added margin-top for spacing */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Explore Sri Lanka with Lando Travels
        </h2>{" "}
        <p>
          If you are promoting tourism in Sri Lanka as part of your business
          expansion, Lando Travels offers a range of exciting inbound tour
          packages. <br />
          Our itineraries include:
        </p>
        <div className="card__container mt-6">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              imgSrc={card.imgSrc}
              description={card.description}
              title={card.title}
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-12 mb-12">
          <p>
            <br />
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
