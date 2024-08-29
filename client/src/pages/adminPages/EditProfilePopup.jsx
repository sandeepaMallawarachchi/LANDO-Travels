import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Textarea, Label, TextInput } from "flowbite-react";
import { HiX } from "react-icons/hi";

const EditProfilePopup = ({ isOpen, onClose, adminDetails, onSave }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (adminDetails) {
      setEmail(adminDetails.email || "");
      setPhone(adminDetails.phone || "");
      setAddress(adminDetails.address || "");
    }
  }, [adminDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:4000/admin/update/${adminDetails.adminID}`, {
        email,
        phone,
        address,
      });

      if (response.status === 200) {
        alert("Admin updated successfully");
        onSave(response.data.admin);
        onClose();
      } else {
        alert("Failed to update admin");
      }
    } catch (error) {
      console.error("Error updating admin:", error.message);
      alert("Error updating admin");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="edit-profile-popup fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="edit-profile-popup-inner bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <HiX className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="email" value="Edit Email" className="mb-2" />
            <TextInput
              id="email"
              type="email"
              placeholder="name@flowbite.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="phone" value="Edit Phone" className="mb-2" />
            <TextInput
              id="phone"
              type="text"
              placeholder="+94 xxxxxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="address" value="Edit Address" className="mb-2" />
            <Textarea
              id="address"
              placeholder="No 123"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center space-x-4">
            <Button
              type="submit"
              className="text-sm px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 hover:bg-blue-700"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePopup;