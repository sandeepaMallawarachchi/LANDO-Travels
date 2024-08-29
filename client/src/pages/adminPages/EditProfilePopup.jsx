import React, { useState } from "react";
import { Button, Textarea, Label, TextInput } from "flowbite-react";

const EditProfilePopup = ({ isOpen, onClose, adminDetails, onSave }) => {
  const [formData, setFormData] = useState({
    name: adminDetails.name,
    email: adminDetails.email,
    profilePicture: adminDetails.profilePicture,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="edit-profile-popup">
      <div className="edit-profile-popup-inner">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Edit email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@flowbite.com"
              required
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Edit Phone" />
            </div>
            <TextInput
              id="phone"
              type="text"
              placeholder="+94 xxxxxxxx"
              required
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="address" value="Edit Address" />
            </div>
            <Textarea
              id="address"
              type="text"
              placeholder="no 123"
              required
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="edit-profile-popup-buttons justify-center">
            <Button type="submit"
              className="text-sm px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 hover:bg-blue-700"
            >
              Save
            </Button>
            <Button type="button"
              className="text-sm px-2 py-1 sm:px-4 sm:py-2 bg-red-500 hover:bg-red-700"
              onClick={onClose}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePopup;
