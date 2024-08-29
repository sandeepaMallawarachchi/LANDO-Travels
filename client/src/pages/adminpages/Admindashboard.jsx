import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../CSS/Admin.css";
import EditProfilePopup from "./EditProfilePopup";
import AdminPasswordReset from "./AdminPasswordReset";
import { useParams } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import profile from "../../images/user.svg";

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

  const adminID = localStorage.getItem("adminID");

  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/admin/getAdmin/${adminID}`);
        setAdminDetails(response.data);
      } catch (error) {
        console.error("Error fetching admin details:", error.message);
      }
    };

    fetchAdminDetails();
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

  return (
    <div className="flex p-10">
      <Card className="max-w-sm p-5">
        <div className="flex flex-col items-center pb-10">
          <img
            alt="Profile"
            height="96"
            src={profile}
            width="96"
            className="mb-3 rounded-full shadow-lg"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {adminDetails.firstname} {adminDetails.lastname}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{adminDetails.email}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{adminDetails.phone}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{adminDetails.address}</span>
          <div className="mt-4 lg:mt-6 flex flex-col items-center space-y-4">
            <Button
              className="text-sm px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 hover:bg-blue-700"
              onClick={handleEditProfileClick}
            >
              Edit Profile
            </Button>
            <Button
              className="text-sm px-2 py-1 sm:px-4 sm:py-2 bg-red-500 hover:bg-red-700"
              onClick={handlePasswordResetClick}
            >
              Reset Password
            </Button>
          </div>
        </div>
      </Card>

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