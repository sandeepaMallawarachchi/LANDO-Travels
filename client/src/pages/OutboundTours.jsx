import React from "react";
import Outboundcover from "../images/Unboundcover.jpg";
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

const OutboundTours = () => {
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
        src={Outboundcover}
        alt="Inbound Tour"
        style={{ width: "1920px", height: "920px" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-8xl font-extrabold drop-shadow-lg leading-none">
          Outbound
        </h1>
        <h1 className="h1">Tours</h1>
        <button className="mt-8 px-8 py-4 border-2 border-white text-white text-xl font-semibold rounded-md hover:bg-white hover:text-black transition duration-300">
          Explore Now
        </button>
      </div>
    </div>

        <div className="parent">
          <div className="card">
            <div className="content-box">
              <h1 className="card-title">{title}</h1>
              <p className="card-content">{content}</p>
              <span className="see-more">See More</span>
            </div>
            <div className="date-box">
              <span className="month">{month}</span>
              <span className="date">{date}</span>
            </div>
          </div>
        </div>
      );
    };
    
    const App = () => {
      return (
        <div className="container">
          <Card
            title="Card Title 1"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias ipsam repudiandae laudantium perspiciatis itaque?"
            month="Neon"
            date="3D"
          />
          <Card
            title="Card Title 2"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias ipsam repudiandae laudantium perspiciatis itaque?"
            month="Neon"
            date="3D"
          />
          <Card
            title="Card Title 3"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias ipsam repudiandae laudantium perspiciatis itaque?"
            month="Neon"
            date="3D"
          />
          <Card
            title="Card Title 4"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias ipsam repudiandae laudantium perspiciatis itaque?"
            month="Neon"
            date="3D"
          />
        </div>
   
    
  
    
  );
};

export default OutboundTours;
