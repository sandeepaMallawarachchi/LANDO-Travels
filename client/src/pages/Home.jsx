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
      <div className="h-[670px]">
        <Carousel slideInterval={4000} className="rounded-none">
          <img src={flight1} alt="Flight 1" className="object-cover h-full w-full rounded-none" />
          <img src={flight2} alt="Flight 2" className="object-cover h-full w-full rounded-none" />
          <img src={flight3} alt="Flight 3" className="object-cover h-full w-full rounded-none" />
          <img src={flight4} alt="Flight 4" className="object-cover h-full w-full rounded-none" />
          <img src={flight5} alt="Flight 5" className="object-cover h-full w-full rounded-none" />
          <img src={flight6} alt="Flight 6" className="object-cover h-full w-full rounded-none" />
        </Carousel>
      </div>
      <div className='h-96'>

      </div>
    </div>
  )
}

export default Home