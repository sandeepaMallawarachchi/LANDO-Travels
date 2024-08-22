import React, { useState } from "react";
import axios from "axios";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { HiMail, HiLockClosed, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const sendData = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/admin/login", {
        email,
        password,
      });

      console.log("Login successful:", res.data);

      // Store the JWT token in localStorage
      localStorage.setItem("token", res.data.token);
      console.log(res.data.token)

      alert("Login successful");
      navigate("/admindashboard");
    } catch (error) {
      console.error("Error:", error.message);
      alert("Login failed! Invalid email or password.");
    }
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      {/* login form */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
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
              type="password"
              icon={HiLockClosed}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button
            type="submit"
            className="text-sm px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 hover:bg-blue-700"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
