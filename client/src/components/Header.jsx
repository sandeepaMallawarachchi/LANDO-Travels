import React, { useState } from "react";
import { Button, Navbar } from "flowbite-react";
import logo from "../images/logo-white-remove-bg.png";
import { Link } from "react-router-dom";
import Login from "./Login";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg lg:pl-10 lg:pr-10">
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            as={Link}
            to="/"
            className="hover:text-blue-500 text-sm sm:text-base"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            as={Link} // Specify that this Navbar.Link will use the Link component
            to="/InboundTours" // Set the destination path for this link
            className="hover:text-blue-500 text-sm sm:text-base"
          >
            Inbound Tours
          </Navbar.Link>
          <Navbar.Link
            as={Link} // Specify that this Navbar.Link will use the Link component
            to="/OutboundTours" // Set the destination path for this link
            className="hover:text-blue-500 text-sm sm:text-base"
          >
            Outbound Tours
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/corporateTravelServices"
            className="hover:text-blue-500 text-sm sm:text-base"
          >
            Corporate Travel Services
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/about"
            className="hover:text-blue-500 text-sm sm:text-base"
          >
            About
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/contact"
            className="hover:text-blue-500 text-sm sm:text-base"
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
