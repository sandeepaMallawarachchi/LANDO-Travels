import React from 'react'
import contactCover from '../images/contactCover.jpg';
import {
    Button,
    Label,
    Textarea,
    TextInput,
} from "flowbite-react";

const Contact = () => {
    return (
        <div>
            <div>
                <img
                    src={contactCover}
                    alt="contact us"
                    style={{ width: "1920px", height: "720px" }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-8xl font-extrabold drop-shadow-lg leading-none">
                        Contact Us
                    </h1>
                    <p className="text-white text-3xl drop-shadow-lg p-10 px-20 text-center">
                        Get in Touch with Lando Travels.
                    </p>

                    <button className="mt-8 px-8 py-4 border-2 border-white text-white text-xl font-semibold rounded-md hover:bg-white hover:text-black transition duration-300">
                        Contact Now
                    </button>
                </div>
            </div>

            <div className="flex flex-row gap-4 p-20">
                <div className="w-1/2 pt-10">
                    At Lando Travels, we're here to assist you with all your travel needs. Whether you're planning corporate travel, booking a tour, or seeking travel consultation, our team is ready to help. Contact us today and let us take care of the details, so you can focus on your business.
                </div>
                <div className="w-1/2">
                    <form action="#">
                        <div className="mb-6 mt-3">
                            <Label htmlFor="email" className="mb-2 block">Your email</Label>
                            <TextInput id="email" name="email" placeholder="name@company.com" type="email" />
                        </div>
                        <div className="mb-6">
                            <Label htmlFor="subject" className="mb-2 block">Subject</Label>
                            <TextInput id="subject" name="subject" placeholder="Let us know how we can help you" />
                        </div>
                        <div className="mb-6">
                            <Label htmlFor="message" className="mb-2 block">Your message</Label>
                            <Textarea id="message" name="message" placeholder="Your message..." rows={4} />
                        </div>
                        <div className="mt-4 bg-blue-500 text-white hover:bg-blue-700">
                            <Button type="submit" className="w-full">Send message</Button>
                        </div>
                    </form>
                </div>
            </div>

        </div >
    )
}

export default Contact