import React, { useState, useEffect } from "react";
import { Navbar, Avatar, Button, TextInput } from "flowbite-react";
import logo from "../images/logo-white-remove-bg.png";
import user from "../images/user.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminHeader = () => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const fetchAdmin = async () => {
      // Retrieve adminID from localStorage
      const adminID = localStorage.getItem("adminID");

      if (!adminID) {
        console.error("Admin ID is not found in localStorage");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:4000/admin/getAdmin/${adminID}`
        );
        setAdmin(response.data);
        console.log(response.data);
      } catch (err) {
        console.log("Error fetching admin:", err);
      }
    };

    fetchAdmin();
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg lg:pl-10 lg:pr-10">
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        </Navbar.Brand>
        
        <Avatar img={user}>
          <div className="space-y-1 font-medium dark:text-white">
            {admin ? (
              <>
                <div className="text-blue-600">Welcome,</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {admin.firstname} {admin.lastname}
                </div>
              </>
            ) : (
              <div className="text-red-600">Failed to fetch data</div>
            )}
          </div>
        </Avatar>
      </Navbar>
    </div>
  );
};

export default AdminHeader;
