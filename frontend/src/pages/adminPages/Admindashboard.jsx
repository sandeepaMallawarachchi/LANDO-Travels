import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../CSS/Admin.css";
import EditProfilePopup from "./EditProfilePopup";
import AdminPasswordReset from "./AdminPasswordReset";
import { Button, Card } from "flowbite-react";
import profile from "../../images/user.svg";
import { FaUserPlus, FaUsers, FaNewspaper, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [adminDetails, setAdminDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isPasswordResetOpen, setIsPasswordResetOpen] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const adminID = localStorage.getItem("adminID");

  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await axios.get(
          `https://lando-travels-api.vercel.app/admin/getAdmin/${adminID}`
        );
        setAdminDetails(response.data);
      } catch (error) {
        console.error("Error fetching admin details:", error.message);
      }
    };

    fetchAdminDetails();

    const fetchTotalUsers = async () => {
      try {
        const response = await axios.get("https://lando-travels-api.vercel.app/admin/getAll");
        setTotalUsers(response.data.length);
      } catch (error) {
        console.error("Error fetching total users:", error.message);
      }
    };

    fetchTotalUsers();

    const fetchTotalPosts = async () => {
      try {
        const response = await axios.get(
          "https://lando-travels-api.vercel.app/admin/getcards"
        );
        setTotalPosts(response.data.length);
      } catch (error) {
        console.error("Error fetching total posts:", error.message);
      }
    };

    fetchTotalPosts();
  }, [adminID]);

  const handleEditProfileClick = () => {
    setIsEditProfileOpen(true);
  };

  const handlePasswordResetClick = () => {
    setIsPasswordResetOpen(true);
  };

  const handleClosePopup = () => {
    setIsEditProfileOpen(false);
    setIsPasswordResetOpen(false);
  };

  const handleSaveProfile = (updatedData) => {
    setAdminDetails((prevDetails) => ({
      ...prevDetails,
      ...updatedData,
    }));
  };

  const navigate = useNavigate();

  const handleNavigateAddUser = () => {
    navigate("/admin/adminregister");
  };

  const handleNavigateAllUser = () => {
    navigate("/admin/allUsers");
  };

  const handleNavigateNews = () => {
    navigate("/admin/adminCards");
  };

  // const handleNavigateAddUser = () => {
  //   navigate('/admin/adminregister')
  // }

  return (
    <div className="p-4 flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 pt-10">
      {/* Profile Card */}
      <Card className="w-full lg:w-72 p-5">
        <div className="flex flex-col items-center pb-4">
          <img
            alt="Profile"
            src={profile}
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
          />
          <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
            {adminDetails.firstname} {adminDetails.lastname}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {adminDetails.email}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {adminDetails.phone}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {adminDetails.address}
          </span>
          <div className="mt-4 lg:mt-6 flex flex-col items-center space-y-4">
            <Button
              className="w-full text-sm bg-blue-500 hover:bg-blue-700"
              onClick={handleEditProfileClick}
            >
              Edit Profile
            </Button>
            <Button
              className="w-full text-sm bg-red-500 hover:bg-red-700"
              onClick={handlePasswordResetClick}
            >
              Reset Password
            </Button>
          </div>
        </div>
      </Card>

      {/* Quick Access Icons */}
      <div className="w-full lg:w-64 flex flex-col items-center lg:items-start">
        <h1 className="text-2xl mb-4 text-center lg:text-left">Quick Access</h1>
        <div className="grid grid-cols-3 gap-4">
          <Button
            className="flex justify-center items-center bg-gray-200 p-4 rounded-full hover:bg-gray-300 transition-colors duration-300"
            onClick={handleNavigateAddUser}
          >
            <FaUserPlus className="w-6 h-6 text-gray-600" />
          </Button>
          <Button
            className="flex justify-center items-center bg-gray-200 p-4 rounded-full hover:bg-gray-300 transition-colors duration-300"
            onClick={handleNavigateAllUser}
          >
            <FaUsers className="w-6 h-6 text-gray-600" />
          </Button>
          <Button
            className="flex justify-center items-center bg-gray-200 p-4 rounded-full hover:bg-gray-300 transition-colors duration-300"
            onClick={handleNavigateNews}
          >
            <FaNewspaper className="w-6 h-6 text-gray-600" />
          </Button>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex justify-center items-center bg-gray-200 p-4 rounded-full">
              <FaFacebook className="w-6 h-6 text-blue-600" />
            </Button>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex justify-center items-center bg-gray-200 p-4 rounded-full">
              <FaInstagram className="w-6 h-6 text-pink-600" />
            </Button>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex justify-center items-center bg-gray-200 p-4 rounded-full">
              <FaTwitter className="w-6 h-6 text-blue-400" />
            </Button>
          </a>
        </div>
      </div>

      {/* Summary Section */}
      <div className="w-full lg:w-64">
        <h1 className="text-2xl mb-4 text-center lg:text-left">Summary</h1>
        <div className="grid grid-cols-2 gap-4 text-center">
          <Card className="p-4 bg-green-500 text-white hover:bg-green-600 hover:text-white transition-colors duration-300">
            <h3 className="text-md font-semibold">Total Users</h3>
            <p className="text-2xl font-bold">{totalUsers}</p>
          </Card>
          <Card className="p-4 bg-green-500 text-white hover:bg-green-600 hover:text-white transition-colors duration-300">
            <h3 className="text-md font-semibold">News Blogs</h3>
            <p className="text-2xl font-bold">{totalPosts}</p>
          </Card>
        </div>
      </div>

      {/* Edit Profile Popup */}
      <EditProfilePopup
        isOpen={isEditProfileOpen}
        onClose={handleClosePopup}
        adminDetails={adminDetails}
        onSave={handleSaveProfile}
      />

      {/* Password Reset Popup */}
      <AdminPasswordReset
        isOpen={isPasswordResetOpen}
        onClose={handleClosePopup}
      />
    </div>
  );
};

export default AdminDashboard;
