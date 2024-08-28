import React, { useState, useRef } from "react";
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

import Slider from "react-slick";
import quatar from "../images/quatar.jpg";
import singaporeairlines from "../images/singaporeairlines.jpg";
import srilankanairlines from "../images/srilankanairlines.jpg";
import male from "../images/male.jpg";
import hotelReservationCard from "../images/hotelReservationCard.jpg";

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
import axios from "axios";

const Home = () => {
  const cards = [
    {
      src: quatar,
      title:
        "Airlines Qatar Airways takes minority stake in South Africa’s Airlink",
      description:
        "Qatar Airways is taking a 25% shareholding in South African regional carrier Airlink, having previously teased that it was intending to invest in an airline in the region.",
    },
    {
      src: singaporeairlines,
      title: "The world’s best airlines for 2023, according to Skytrax",
      description:
        " Singapore Airlines: The Singapore flag-carrier has been named Airline of the Year at the Skytrax World Airline Awards 2023 in Paris. Click through the gallery to see the best of the rest.",
    },
    {
      src: male,
      title: "Maldives Weather: When to Visit and What to Expect",
      description:
        "Discover the Maldives weather and the best time to visit this tropical paradise. Learn about the average temperatures, rainfall, and what to pack for your trip..",
    },
    {
      src: srilankanairlines,
      title: "Srilankan airlines customer services",
      description:
        "SriLankan Airlines is renowned for its warm, hospitable service, rooted in Sri Lankan culture. Their staff is trained to offer personalized care, ensuring passengers feel valued and comfortable throughout their journey.",
    },
    {
      src: hotelReservationCard,
      title: "Worldwide Hotel Reservations",
      description:
        "Reservations of hotel accommodation most of the major cities throughout Europe, India, Middle East and far east Representations.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Automatically slide
    autoplaySpeed: 4000, // Speed of auto slide (in milliseconds)
  };

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

  const getStartedRef = useRef(null);

  const handleScrollToServices = () => {
    getStartedRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:4000/admin/contact`, {
        email,
        subject,
        message,
      });
      console.log(res.data);
      alert("Message sent successfully");

      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.log(error.message);
      alert("Error sending message!");
    }
  };

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
            <div className="flex items-center justify-center">
              <h1 className="h1 mr-2">Welcome to</h1>
              <h1 className="text-white text-8xl font-extrabold leading-none mr-2">
                LANDO
              </h1>
              <h1 className="h1">Travels</h1>
            </div>

            <h4 className="mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl">
              Your journey starts here
            </h4>
            <button
              onClick={handleScrollToServices}
              className="mt-8 px-8 py-4 border-2 border-white text-white text-xl font-semibold rounded-md hover:bg-white hover:text-black transition duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="my-10" ref={getStartedRef}>
        <div className="p-10">
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div key={index} className="px-5">
                <Card className="flex-shrink-0 w-full h-[500px]">
                  {" "}
                  {/* Fixed height */}
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />{" "}
                  {/* Object-cover to fit image */}
                  <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white mt-4">
                    {card.title}
                  </h5>
                  <p className="font-normal text-gray-700 text-center dark:text-gray-400">
                    {card.description}
                  </p>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* about section */}
      <div className="flex justify-center items-center mt-12 mb-12">
        <section className="flex flex-col lg:flex-row items-center justify-center my-12 px-10">
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
            <form onSubmit={handleSubmit} className="p-6">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                  <a
                    href="mailto:lawrence@landotravel.com"
                    className="hover:underline"
                  >
                    lawrence@landotravel.com
                  </a>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <a href="tel:+94722267400" className="hover:underline">
                    +94 722267400
                  </a>
                </p>
              </div>
            </form>
          </Drawer.Items>
        </Drawer>
      </div>
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Partnerships
      </h2>
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
    </div>
  );
};

export default Home;
