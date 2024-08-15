import React from "react";
import { Card, Button } from "flowbite-react";
import inboundcover from "../images/inboundcover.jpg"; // Adjust the path as needed
import "../CSS/Index.css";

const InboundTours = () => {
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

      {/* Blog Posts Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black">
            Explore Sri Lanka with Lando Travels
          </h1>

          <h2 className="text-3xl font-bold text-gray-600 mb-8 text-left">
            Featured Tours
          </h2>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <Card>
                <img
                  src={inboundcover}
                  alt="Tour 1"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Exciting Tour in the City
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover the hidden gems of the city with our guided tours.
                    Perfect for solo travelers and groups alike.
                  </p>
                  <Button className="bg-blue-500 text-white hover:bg-blue-600">
                    Read More
                  </Button>
                </div>
              </Card>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <Card>
                <img
                  src={inboundcover}
                  alt="Tour 2"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Adventure in the Mountains
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Join us for a thrilling adventure in the mountains.
                    Experience breathtaking views and exhilarating hikes.
                  </p>
                  <Button className="bg-blue-500 text-white hover:bg-blue-600">
                    Read More
                  </Button>
                </div>
              </Card>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <Card>
                <img
                  src={inboundcover}
                  alt="Tour 3"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Cultural Heritage Tour
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Immerse yourself in the rich cultural heritage with our
                    comprehensive tours that showcase history and tradition.
                  </p>
                  <Button className="bg-blue-500 text-white hover:bg-blue-600">
                    Read More
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InboundTours;
