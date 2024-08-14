import React from "react";
import { Button, Navbar } from "flowbite-react";
import logo from '../images/logo-white-remove-bg.png'

const Header = () => {
  return (
    <div className="sticky top-0 z-50 pl-10 pr-10 bg-white shadow-lg">
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button style={{ backgroundColor: "#76cbf0", color: "#374151" }}>Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" className="hover:text-blue-500">Home</Navbar.Link>
          <Navbar.Link href="#" className="hover:text-blue-500">About</Navbar.Link>
          <Navbar.Link href="#" className="hover:text-blue-500">Services</Navbar.Link>
          <Navbar.Link href="#" className="hover:text-blue-500">Pricing</Navbar.Link>
          <Navbar.Link href="#" className="hover:text-blue-500">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;