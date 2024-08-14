import React from 'react'
import { Carousel } from "flowbite-react";
import flight1 from '../images/flight1.jpg'
import flight2 from '../images/flight2.jpg'
import flight3 from '../images/flight3.jpg'
import flight4 from '../images/flight4.jpg'
import flight5 from '../images/flight5.jpg'
import flight6 from '../images/flight6.jpg'

const Home = () => {
  return (
    <div>
      <div className="h-[200px] sm:h-[200px] md:h-[400px] lg:h-[665px]">
        <Carousel slideInterval={5000} className="rounded-none">
          <img src={flight1} alt="Flight 1" className="w-full object-cover h-full" />
          <img src={flight2} alt="Flight 2" className="w-full object-cover h-full" />
          <img src={flight3} alt="Flight 3" className="w-full object-cover h-full" />
          <img src={flight4} alt="Flight 4" className="w-full object-cover h-full" />
          <img src={flight5} alt="Flight 5" className="w-full object-cover h-full" />
          <img src={flight6} alt="Flight 6" className="w-full object-cover h-full" />
        </Carousel>

        {/* Overlay Text and Button */}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Welcome to LANDO Travels</h1>
          <p className="mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl">Your journey starts here</p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
      <div className='h-96'>
        {/* Additional content can go here */}
      </div>
    </div>
  )
}

export default Home