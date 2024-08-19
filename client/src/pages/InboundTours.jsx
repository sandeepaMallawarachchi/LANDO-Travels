import React from "react";
import inboundcover from "../images/inboundcover.jpg";
import inboundtiger from "../images/inboundtiger.jpg";
import inboundtemple from "../images/inboundtemple.jpg";
import inboundbeach from "../images/inboundbeach.jpg";
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
      description: "Vancouver Mountains, Canada",
      title: "The Great Path",
    },
    {
      imgSrc: inboundtiger,
      description: "Poon Hill, Nepal",
      title: "Starry Night",
    },
    {
      imgSrc: inboundtemple,
      description: "Bojcin Forest, Serbia",
      title: "Path Of Peace",
    },
    {
      imgSrc: inboundtemple,
      description: "Bojcin Forest, Serbia",
      title: "Path Of Peace",
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
        <h2 class="bold-heading">Explore Sri Lanka with Lando Travels</h2>{" "}
        <p>
          If you are promoting tourism in Sri Lanka as part of your business
          expansion, Lando Travels offers a range of exciting inbound tour
          packages. <br />
          Our itineraries include:
        </p>
        <div className="card__container">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              imgSrc={card.imgSrc}
              description={card.description}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InboundTours;
