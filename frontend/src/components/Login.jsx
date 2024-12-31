import React, { useState } from "react";
import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { HiMail, HiLockClosed, HiX } from "react-icons/hi";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import AdminPasswordReset from "../pages/adminPages/AdminPasswordReset";

const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isResetOpen, setIsResetOpen] = useState(false);
  const navigate = useNavigate();

  const sendData = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://lando-travels-api.vercel.app/admin/login", {
        email,
        password,
      });

      console.log("Login successful:", res.data);
      console.log(res.data.admin.adminID);
      const adminID = res.data.admin.adminID;

      // Store the JWT token and adminID in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("adminID", adminID);

      // Use the correct path to navigate
      navigate(`/admin/admindashboard`);
    } catch (error) {
      console.error("Error:", error.response?.data?.message || error.message);
      alert("Login failed! Invalid email or password.");
    }
  };

  // Function to open the password reset popup
  const handleForgotPassword = () => {
    setIsResetOpen(true);
  };

  // Function to close the password reset popup
  const closeResetPopup = () => {
    setIsResetOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      {/* Login Form */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <HiX className="w-6 h-6" />
        </button>

        <form className="flex flex-col gap-4" onSubmit={sendData}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              icon={HiMail}
              placeholder="name@flowbite.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type={showPassword ? "text" : "password"}
              icon={HiLockClosed}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-10 focus:outline-none mt-7"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <VscEye />
              ) : (
                <VscEyeClosed />
              )}
            </button>
          </div>
          <div className="flex justify-between items-center">
            {/* Forgot Password Link */}
            <button
              type="button"
              className="text-blue-500 hover:underline text-sm"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>
          <Button
            type="submit"
            className="text-sm px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 hover:bg-blue-700"
          >
            Login
          </Button>
        </form>
      </div>

      {/* Admin Password Reset Popup */}
      {isResetOpen && <AdminPasswordReset isOpen={isResetOpen} onClose={closeResetPopup} />}
    </div>
  );
};

export default Login;