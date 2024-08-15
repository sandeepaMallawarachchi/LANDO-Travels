import React from "react";
import { Button, Navbar } from "flowbite-react";
import logo from "../images/logo-white-remove-bg.png";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg lg:pl-10 lg:pr-10">
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="text-sm px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 hover:bg-blue-700">
            Login
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            className="hover:text-blue-500 text-sm sm:text-base"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="hover:text-blue-500 text-sm sm:text-base"
          >
            About
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="hover:text-blue-500 text-sm sm:text-base"
          >
            Services
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="hover:text-blue-500 text-sm sm:text-base"
          >
            Pricing
          </Navbar.Link>
          <Navbar.Link
            href="#"
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
