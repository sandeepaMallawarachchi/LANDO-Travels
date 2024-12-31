import React, { useRef, useState } from 'react';
import contactCover from '../images/contactCover.jpg';
import {
    Button,
    Label,
    Textarea,
    TextInput,
} from "flowbite-react";
import axios from 'axios';

const Contact = () => {
    const contactRef = useRef(null);

    const handleScrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
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
                message
            });
            console.log(res.data);
            alert('Message sent successfully')

            setEmail("");
            setSubject("");
            setMessage("");

        } catch (error) {
            console.log(error.message);
            alert('Error sending message!')
        }
    }

    return (
        <div>
            {/* Hero section */}
            <div className="relative">
                <img
                    src={contactCover}
                    alt="contact us"
                    className="w-full h-auto max-w-full"
                    style={{ height: "auto", maxHeight: "720px" }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <h1 className="text-white text-5xl sm:text-6xl lg:text-8xl font-extrabold drop-shadow-lg leading-none text-center">
                        Contact Us
                    </h1>
                    <p className="text-white text-xl sm:text-3xl drop-shadow-lg p-6 text-center">
                        Get in Touch with Lando Travels.
                    </p>
                    <button
                        onClick={handleScrollToContact}
                        className="mt-8 px-8 py-4 border-2 border-white text-white text-lg sm:text-xl font-semibold rounded-md hover:bg-white hover:text-black transition duration-300"
                    >
                        Contact Now
                    </button>
                </div>
            </div>

            {/* Contact form and information */}
            <div className="flex flex-col lg:flex-row gap-4 p-8 lg:p-20" ref={contactRef}>
                <div className="lg:w-1/2 pt-10">
                    <p className="mb-4 lg:text-left">
                        At Lando Travels, we're here to assist you with all your travel needs.
                        Whether you're planning corporate travel, booking a tour, or seeking travel consultation, our team is ready to help.
                        Contact us today and let us take care of the details, so you can focus on your business.
                    </p>

                    <div className="mt-6">
                        <h2 className="font-bold mb-2">Contact Information:</h2>
                        <p>
                            Phone:
                            <a href="tel:+94722267400" className="hover:underline ml-1">+94 722267400</a>
                        </p>
                        <p>
                            Email:
                            <a href="mailto:lawrence@landotravel.com" className="hover:underline ml-1">lawrence@landotravel.com</a>
                        </p>
                        <p>Address: No:514, 2/1-Galle Road, Colombo 3, Sri Lanka</p>
                    </div>

                    <div className="mt-6">
                        <h2 className="font-bold mb-2">Follow Us on Social Media:</h2>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/Landotravel?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f text-blue-600 mr-3"></i>
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="mb-6 mt-3">
                            <Label htmlFor="email" className="mb-2 block">Your email</Label>
                            <TextInput
                                id="email"
                                name="email"
                                placeholder="name@company.com"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <Label htmlFor="subject" className="mb-2 block">Subject</Label>
                            <TextInput
                                id="subject"
                                name="subject"
                                placeholder="Let us know how we can help you"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <Label htmlFor="message" className="mb-2 block">Your message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Your message..."
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full"
                            />
                        </div>
                        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white rounded-md">
                            Send message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;