import React, { useState } from "react";
import { Button, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import logo from "../images/logo-white-remove-bg.png";
import Login from "./Login";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const location = useLocation(); // Get current path

  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg lg:pl-10 lg:pr-10">
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button
            onClick={handleOpenModal}
            className="text-sm px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 hover:bg-blue-700"
          >
            Login
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            as={Link}
            to="/"
            className={`hover:text-blue-500 text-sm sm:text-base ${
              location.pathname === "/" ? "text-blue-500" : ""
            }`} // Apply active class if current path matches
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/InboundTours"
            className={`hover:text-blue-500 text-sm sm:text-base ${
              location.pathname === "/InboundTours" ? "text-blue-500" : ""
            }`}
          >
            Inbound Tours
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/OutboundTours"
            className={`hover:text-blue-500 text-sm sm:text-base ${
              location.pathname === "/OutboundTours" ? "text-blue-500" : ""
            }`}
          >
            Outbound Tours
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/corporateTravelServices"
            className={`hover:text-blue-500 text-sm sm:text-base ${
              location.pathname === "/corporateTravelServices" ? "text-blue-500" : ""
            }`}
          >
            Corporate Travel Services
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/about"
            className={`hover:text-blue-500 text-sm sm:text-base ${
              location.pathname === "/about" ? "text-blue-500" : ""
            }`}
          >
            About
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/contact"
            className={`hover:text-blue-500 text-sm sm:text-base ${
              location.pathname === "/contact" ? "text-blue-500" : ""
            }`}
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* login model */}
      <Login isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Header;