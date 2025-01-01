import React, { useState, useEffect, useRef } from "react";
import {
  Carousel,
  Button,
  Card,
  Drawer,
  Label,
  Textarea,
  TextInput,
} from "flowbite-react";
import { Link } from "react-router-dom";
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
import logo18 from "../images/partners/logo18.jpg";
import logo19 from "../images/partners/logo19.jpg";
import logo20 from "../images/partners/logo20.png";
import logo21 from "../images/partners/logo21.png";
import logo22 from "../images/partners/logo22.png";
import logo23 from "../images/partners/logo23.png";
import logo24 from "../images/partners/logo24.jpeg";
import logo25 from "../images/partners/logo25.png";
import logo26 from "../images/partners/logo26.jpeg";
import logo27 from "../images/partners/logo27.png";
import logo29 from "../images/partners/logo29.png";
import logo30 from "../images/partners/logo30.png";
import logo31 from "../images/partners/logo31.png";
import axios from "axios";

const Home = () => {
  const [cards, setCards] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 394,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const carousel = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 394,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  // Fetch cards from server when component mounts
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://lando-travels-api.vercel.app/admin/getcards"
        );
        setCards(response.data); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    fetchCards();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const logos = [
    logo10, logo12, logo13, logo14, logo15, logo7, logo8, logo9, logo1, logo11, logo2, logo4, logo5, logo6, logo16, logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo29, logo30, logo31
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
      const res = await axios.post(`https://lando-travels-api.vercel.app/admin/contact`, {
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
        <div className="h-[200px] sm:h-[200px] md:h-[400px] lg:h-[95vh]">
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
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-4">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h4 className="text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-none">
                welcome to
              </h4>
              <div className="flex justify-center items-center">
                <h1 className="text-[#1ca4d4] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-none">Lando</h1>
                <h1 className="text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-none pl-6">travels</h1>
              </div>
            </div>
            <h4 className="mt-4 text-sm sm:text-base md:text-lg lg:text-2xl xl:text-2xl">Your journey starts here</h4>
            <button
              onClick={handleScrollToServices}
              className="hidden md:block mt-8 px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white text-lg md:text-xl font-semibold rounded-md hover:bg-white hover:text-black transition duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="my-10 w-full overflow-hidden" ref={getStartedRef}>
        <div className="p-5 lg:p-10 w-full">
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div key={index} className="px-2 lg:px-5 w-full">
                <Card className="flex-shrink-0 w-full lg:h-[500px]">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                  <h5 className="text-lg lg:text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white mt-2 lg:mt-4">
                    {card.title}
                  </h5>
                  <p className="text-sm lg:text-base font-normal text-gray-700 text-center dark:text-gray-400">
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
        <section className="flex flex-col lg:flex-row items-center justify-center my-12 sm:px-10">
          {/* Text Section */}
          <div className="lg:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 sm:text-center">
              About Us
            </h2>
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

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                className="mt-4 px-6 py-3 border-2 border-blue-500 text-blue-500 text-lg font-semibold rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
                onClick={() => setIsOpen(true)}
              >
                Contact
              </Button>
              <Link to="/about">
                <Button className="mt-4 px-6 py-3 border-2 border-blue-500 text-blue-500 text-lg font-semibold rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
                  See More
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 p-6 ">
            <img
              src={aboutushome}
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

      {/* partners logos */}
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Partnerships
      </h2>

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
    </div>
  );
};

export default Home;
