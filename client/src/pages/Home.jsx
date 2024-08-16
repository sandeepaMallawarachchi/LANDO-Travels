import React, { useState } from "react";
import {
  Carousel,
  Button,
  Card,
  Drawer,
  Label,
  Textarea,
  TextInput,
} from "flowbite-react";
import { HiEnvelope } from "react-icons/hi2";
import "../CSS/logoScrolling.css";

import flight1 from "../images/flight1.jpg";
import flight2 from "../images/flight2.jpg";
import flight3 from "../images/flight3.jpg";
import flight4 from "../images/flight4.jpg";
import flight5 from "../images/flight5.jpg";
import flight6 from "../images/flight6.jpg";
import aboutushome from "../images/aboutushome.jpg";

import logo1 from "../images/partners/logo1.svg";
import logo2 from "../images/partners/logo2.svg";
import logo4 from "../images/partners/logo4.svg";
import logo5 from "../images/partners/logo5.jpg";
import logo6 from "../images/partners/logo6.jpg";
import logo7 from "../images/partners/logo7.jpg";
import logo8 from "../images/partners/logo8.svg";
import logo9 from "../images/partners/logo9.jpg";
import logo10 from "../images/partners/logo10.png";
import logo11 from "../images/partners/logo11.png";
import logo12 from "../images/partners/logo12.png";
import logo13 from "../images/partners/logo13.png";
import logo14 from "../images/partners/logo14.png";
import logo15 from "../images/partners/logo15.png";
import logo16 from "../images/partners/logo16.svg";
import logo17 from "../images/partners/logo17.png";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const logos = [
    logo10,
    logo12,
    logo13,
    logo14,
    logo15,
    logo7,
    logo8,
    logo9,
    logo1,
    logo11,
    logo2,
    ,
    logo4,
    logo5,
    logo6,
    logo16,
    logo17,
  ];

  return (
    <div>
      {/* Carousel Section */}
      <div className="relative">
        <div className="h-[200px] sm:h-[200px] md:h-[400px] lg:h-[665px]">
          <Carousel slideInterval={5000} className="rounded-none">
            <img
              src={flight1}
              alt="Flight 1"
              className="w-full object-cover h-full"
            />
            <img
              src={flight2}
              alt="Flight 2"
              className="w-full object-cover h-full"
            />
            <img
              src={flight3}
              alt="Flight 3"
              className="w-full object-cover h-full"
            />
            <img
              src={flight4}
              alt="Flight 4"
              className="w-full object-cover h-full"
            />
            <img
              src={flight5}
              alt="Flight 5"
              className="w-full object-cover h-full"
            />
            <img
              src={flight6}
              alt="Flight 6"
              className="w-full object-cover h-full"
            />
          </Carousel>

          {/* Overlay Text and Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Welcome to LANDO Travels
            </h1>
            <h4 className="mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl">
              Your journey starts here
            </h4>
            <Button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* partners logos */}
      <div className="overflow-hidden py-20">
        <div className="flex items-center animate-scroll">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="h-24 w-28 flex-shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-110 pr-5"
            />
          ))}
        </div>
      </div>

      {/* Card Section */}
      <div className="flex justify-center items-center mt-12 mb-12 gap-6">
        <div className="flex justify-center gap-6 w-full">
          <Card className="flex-1 max-w-sm w-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card className="flex-1 max-w-sm w-full">
            <img src={flight1} alt="Flight 1" className="rounded-t-lg" />
            <div className="p-5">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <Button className="mt-4 bg-blue-500 text-white hover:bg-blue-700">
                Read more
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </Card>
          <Card className="flex-1 max-w-sm w-full">
            <img src={flight2} alt="Flight 2" className="rounded-t-lg" />
            <div className="p-5">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* about section */}
      <div className="flex justify-center items-center mt-12 mb-12">
        <section className="flex flex-col lg:flex-row items-center justify-center my-12">
          {/* Text Section */}
          <div className="lg:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 text-lg mb-6">
              At Lando Travels, we take pride in being one of Sri Lanka's
              premier travel agencies, specializing in corporate travel
              services. With over two decades of industry experience, our
              dedicated and highly trained team is committed to providing
              top-tier service, handling all your travel needs with efficiency
              and care.
            </p>
            <p>
              Whether your business requires air ticketing, visa processing, or
              comprehensive travel insurance, Lando Travels is your go-to
              partner. Our expertise extends beyond corporate travel, offering
              tailor-made tour packages to Sri Lanka and beyond, designed to
              meet the specific needs of your business and clients.
            </p>
            <h4>
              Explore the world with confidence, knowing that Lando Travels is
              by your side.
            </h4>
            <br></br>

            <div className="flex space-x-4">
              <Button
                className="mt-8 px-4 py-4 border-2 border-blue-500 text-blue-500 text-xl font-semibold rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
                onClick={() => setIsOpen(true)}
              >
                Contact
              </Button>
              <button className="mt-8 px-8 py-4 border-2 border-blue-500 text-blue-500 text-xl font-semibold rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
                See More
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 p-6">
            <img
              src={aboutushome} // Replace this with your image URL
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>
      </div>

      {/* Contact Form Section */}
      <div className="flex justify-center items-center mt-12 mb-12 gap-6">
        <Drawer open={isOpen} onClose={handleClose}>
          <Drawer.Header title="CONTACT US" titleIcon={HiEnvelope} />
          <Drawer.Items>
            <form action="#" className="p-6">
              {" "}
              {/* Added padding for more margin */}
              <div className="mb-8 mt-4">
                {" "}
                {/* Increased margin-bottom and margin-top */}
                <Label htmlFor="email" className="mb-2 block">
                  Your email
                </Label>
                <TextInput
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  type="email"
                />
              </div>
              <div className="mb-8">
                {" "}
                {/* Increased margin-bottom */}
                <Label htmlFor="subject" className="mb-2 block">
                  Subject
                </Label>
                <TextInput
                  id="subject"
                  name="subject"
                  placeholder="Let us know how we can help you"
                />
              </div>
              <div className="mb-8">
                {" "}
                {/* Increased margin-bottom */}
                <Label htmlFor="message" className="mb-2 block">
                  Your message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={4}
                />
              </div>
              <div className="mt-6">
                {" "}
                {/* Increased margin-top */}
                <Button
                  type="submit"
                  className="w-full bg-blue-500 text-white hover:bg-blue-700"
                >
                  Send message
                </Button>
              </div>
              <div className="mt-4">
                {" "}
                {/* Added margin-top for contact info */}
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <a href="mailto:info@company.com" className="hover:underline">
                    info@landotravels.net
                  </a>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <a href="tel:2124567890" className="hover:underline">
                    +94 11 4653201-212
                  </a>
                </p>
              </div>
            </form>
          </Drawer.Items>
        </Drawer>
      </div>
      {/* partners logos */}
      <div className="overflow-hidden py-20">
        <div className="flex items-center animate-scroll">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="h-24 w-28 flex-shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
    </div>
  );
};

export default Home;
