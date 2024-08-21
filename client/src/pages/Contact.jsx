import React, { useRef, useState } from 'react'
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
            const res = await axios.post(`http://localhost:4000/admin/contact`, {
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

                    <button
                        onClick={handleScrollToContact}
                        className="mt-8 px-8 py-4 border-2 border-white text-white text-xl font-semibold rounded-md hover:bg-white hover:text-black transition duration-300"
                    >
                        Contact Now
                    </button>
                </div>
            </div>

            <div className="flex flex-row gap-4 p-20" ref={contactRef}>
                <div className="w-1/2 pt-10">
                    <p>
                        At Lando Travels, we're here to assist you with all your travel needs.
                        Whether you're planning corporate travel, booking a tour, or seeking travel consultation, our team is ready to help.
                        Contact us today and let us take care of the details, so you can focus on your business.
                    </p>

                    <div className="mt-6">
                        <h2 className="font-bold mb-2">Contact Information:</h2>
                        <p>Phone: +94 1234567</p>
                        <p>Email: landotravels@gmail.com</p>
                        <p>Address: No:514, 2/1-Galle Road, Colombo 3</p>
                    </div>

                    <div className="mt-6">
                        <h2 className="font-bold mb-2">Follow Us on Social Media:</h2>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f text-blue-600"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram text-pink-600"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter text-blue-400"></i>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube text-red-600"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="w-1/2">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6 mt-3">
                            <Label htmlFor="email" className="mb-2 block">Your email</Label>
                            <TextInput id="email" name="email" placeholder="name@company.com" type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <Label htmlFor="subject" className="mb-2 block">Subject</Label>
                            <TextInput id="subject" name="subject" placeholder="Let us know how we can help you"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <Label htmlFor="message" className="mb-2 block">Your message</Label>
                            <Textarea id="message" name="message" placeholder="Your message..." rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <div className="mt-4 bg-blue-500 text-white hover:bg-blue-700 rounded-md">
                            <Button type="submit" className="w-full">Send message</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Contact