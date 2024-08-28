import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../CSS/Admin.css";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import EditProfilePopup from "../../components/EditProfilePopup";

const AdminDashboard = () => {
  const [adminDetails, setAdminDetails] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    role: "Administrator",
    joined: "January 1, 2022",
    totalPosts: 0,
    profilePicture: "https://via.placeholder.com/150",
    aboutMe: "This is a short bio about the admin.",
    socialLinks: {
      facebook: "https://facebook.com/admin",
      twitter: "https://twitter.com/admin",
      linkedin: "https://linkedin.com/in/admin",
      instagram: "https://instagram.com/admin",
    },
  });
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  useEffect(() => {
    // Fetch admin details from the backend and update the state
    // Example: fetchAdminDetails();
  }, []);

  const handleEditProfile = () => {
    setIsEditPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsEditPopupOpen(false);
  };

  const handleSaveProfile = (updatedDetails) => {
    setAdminDetails(updatedDetails);
    // Optionally, you could also save the updated profile to the backend here.
  };

  return (
    <div className="flex">
      <div className="admin-content-container">
        <div className="left-section">
          <div className="admin-social-links">
            <h2>Social Media Links</h2>
            <ul>
              <li>
                <a
                  href={adminDetails.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a
                  href={adminDetails.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter /> Twitter
                </a>
              </li>
              <li>
                <a
                  href={adminDetails.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={adminDetails.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="admin-about-me">
            <h2>About Me</h2>
            <p>{adminDetails.aboutMe}</p>
          </div>
        </div>
        <div className="right-section">
          <div className="admin-profile-card">
            <div className="admin-profile-header">
              <img
                src={adminDetails.profilePicture}
                alt="Admin"
                className="admin-profile-picture"
              />
              <h1>{adminDetails.name}</h1>
              <p>{adminDetails.email}</p>
            </div>
            <div className="admin-profile-details">
              <h2>Profile Details</h2>
              <p>
                <strong>Role:</strong> {adminDetails.role}
              </p>
              <p>
                <strong>Joined:</strong> {adminDetails.joined}
              </p>
              <p>
                <strong>Total Posts:</strong> {adminDetails.totalPosts}
              </p>
            </div>
            <div className="admin-profile-actions">
              <button
                className="edit-profile-button"
                onClick={handleEditProfile}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <EditProfilePopup
        isOpen={isEditPopupOpen}
        onClose={handleClosePopup}
        adminDetails={adminDetails}
        onSave={handleSaveProfile}
      />
    </div>
  );
};

export default AdminDashboard;
