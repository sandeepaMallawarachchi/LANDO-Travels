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
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={true}>
        <img src={flight1} alt="..." />
        <img src={flight2} alt="..." />
        <img src={flight3} alt="..." />
        <img src={flight4} alt="..." />
        <img src={flight5} alt="..." />
      </Carousel>
    </div>

  )
}

export default Home