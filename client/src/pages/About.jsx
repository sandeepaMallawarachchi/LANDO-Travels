import React from 'react'
import aboutCover from '../images/aboutCover.jpg'

const About = () => {
    return (
        <div>
            <div>
                <img
                    src={aboutCover}
                    alt="corparate Services"
                    style={{ width: "1920px", height: "720px" }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-8xl font-extrabold drop-shadow-lg leading-none">
                        About Us
                    </h1>
                    <p className="text-white text-3xl drop-shadow-lg p-10 text-center">
                        Lando Travels (pvt) Ltd has grown over the years as a leading IATA accredited
                        travel Agency in Sri Lanka with professional and well experienced management and staff.
                    </p>
                </div>
            </div>

            <div>
                <h1 className='text-white text-8xl font-extrabold drop-shadow-lg leading-none'>Our Services</h1>
                
            </div>
        </div>
    )
}

export default About