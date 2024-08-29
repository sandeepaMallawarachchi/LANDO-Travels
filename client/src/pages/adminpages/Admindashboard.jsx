import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../CSS/Admin.css";
import EditProfilePopup from "./EditProfilePopup";
import { useParams } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import profile from "../../images/user.svg";

const AdminDashboard = () => {
  const [adminDetails, setAdminDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const { adminID } = useParams();

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

  const handleClosePopup = () => {
    setIsEditProfileOpen(false);
  };

  const handleSaveProfile = (updatedData) => {
    setAdminDetails((prevDetails) => ({
      ...prevDetails,
      ...updatedData,
    }));

  };

  return (
    <div className="flex p-10">
      <Card className="max-w-sm">
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
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <Button
              className="text-sm px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 hover:bg-blue-700"
              onClick={handleEditProfileClick}
            >
              Edit Profile
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
    </div>
  );
};

export default AdminDashboard;