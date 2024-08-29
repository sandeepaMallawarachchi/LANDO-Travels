import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../CSS/Admin.css";
import EditProfilePopup from "../../components/EditProfilePopup";
import { useParams } from "react-router-dom";
import { Button, Card, Dropdown } from "flowbite-react";
import profile from '../../images/user.svg'

const AdminDashboard = () => {
  const [adminDetails, setAdminDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

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
  }, []);

  return (
    <div className="flex p-10 ">
      <Card className="max-w-sm">
        <div className="flex flex-col items-center pb-10">
          <img
            alt="Bonnie image"
            height="96"
            src={profile}
            width="96"
            className="mb-3 rounded-full shadow-lg"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{adminDetails.firstname} {adminDetails.lastname}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{adminDetails.email}</span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add friend
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard