import React, { useState } from "react";
import b2b from "../images/b2b.jpg";
import Login from "./Login";
import { Button } from "flowbite-react";

const AdminLogin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div>
        <img
          src={b2b}
          alt="contact us"
          style={{ width: "1920px", height: "720px" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-black text-8xl font-extrabold drop-shadow-lg leading-none">
            Administration
          </h1>
          <p className="text-black text-3xl drop-shadow-lg p-10 px-20 text-center">
            Get in Touch with Lando Travels.
          </p>

          <Button
            onClick={handleOpenModal}
            className="text-sm px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 hover:bg-blue-700"
          >
            Login
          </Button>
        </div>
      </div>
      <Login isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default AdminLogin;
