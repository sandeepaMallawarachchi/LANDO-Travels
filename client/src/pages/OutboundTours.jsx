import React from "react";
import Outboundcover from "../images/Unboundcover.jpg";
import "../CSS/Index.css";

const OutboundTours = () => {
  return (
    <div>
      <img
        src={Outboundcover}
        alt="Inbound Tour"
        style={{ width: "1920px", height: "1080px" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-8xl font-extrabold drop-shadow-lg leading-none">
          Outbound
        </h1>
        <h1 className="text-white text-6xl font-extrabold drop-shadow-lg">
          Tours
        </h1>
        <button className="mt-8 px-8 py-4 border-2 border-white text-white text-xl font-semibold rounded-md hover:bg-white hover:text-black transition duration-300">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default OutboundTours;
