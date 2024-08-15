import React from "react";
import {
  Carousel,
  Button,
  Card,
  Drawer,
  Label,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";

import flight1 from "../images/flight1.jpg";
import flight2 from "../images/flight2.jpg";
import flight3 from "../images/flight3.jpg";
import flight4 from "../images/flight4.jpg";
import flight5 from "../images/flight5.jpg";
import flight6 from "../images/flight6.jpg";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

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
            <p className="mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl">
              Your journey starts here
            </p>
            <Button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700">
              Get Started
            </Button>
          </div>
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
      <div className="flex justify-center items-center mt-12 mb-12">
        <Card className="w-full max-w-6xl" imgSrc={flight5} horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ABOUT US
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>

      <div className="flex justify-center items-center mt-12 mb-12 gap-6">
        <div className="mt-4 bg-blue-500 text-white hover:bg-blue-700">
          <Button onClick={() => setIsOpen(true)}>Show contact form</Button>
        </div>
        <Drawer open={isOpen} onClose={handleClose}>
          <Drawer.Header title="CONTACT US" titleIcon={HiEnvelope} />
          <Drawer.Items>
            <form action="#">
              <div className="mb-6 mt-3">
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
              <div className="mb-6">
                <Label htmlFor="subject" className="mb-2 block">
                  Subject
                </Label>
                <TextInput
                  id="subject"
                  name="subject"
                  placeholder="Let us know how we can help you"
                />
              </div>
              <div className="mb-6">
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
              <div className="mb-6">
                <Button type="submit" className="w-full">
                  Send message
                </Button>
              </div>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <a href="mailto:info@company.com" className="hover:underline">
                  info@company.com
                </a>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <a href="tel:2124567890" className="hover:underline">
                  212-456-7890
                </a>
              </p>
            </form>
          </Drawer.Items>
        </Drawer>
      </div>

      {/* Contact Form Section */}
    </div>
  );
};

export default Home;
