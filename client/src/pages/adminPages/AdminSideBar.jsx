import React from "react";
import axios from "axios";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiChartPie,
  HiInbox,
  HiClipboardList,
  HiTable,
  HiUser,
  HiViewBoards,
  HiUserAdd,
  HiUsers,
  HiHome,
  HiLogout,
  HiNewspaper
} from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const AdminSideBar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Call the logout endpoint
      await axios.post("http://localhost:4000/admin/logout");

      // Clear the authentication token (assuming it's stored in localStorage)
      localStorage.removeItem("token");

      // Redirect to login or home page after logout
      navigate("/AdminLogin");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="h-screen">
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              as={Link}
              to="/admin/admindashboard"
              icon={HiChartPie}
            >
              Dashboard
            </Sidebar.Item>

            <Sidebar.Item as={Link} to="/admin/inbox" icon={HiInbox}>
              Inbox
            </Sidebar.Item>
            <Sidebar.Collapse icon={HiUser} label="Users">
              <Sidebar.Item
                as={Link}
                to="/admin/adminregister"
                icon={HiUserAdd}
              >
                Register a new user
              </Sidebar.Item>
              <Sidebar.Item as={Link} to="/admin/allUsers" icon={HiUsers}>
                All users
              </Sidebar.Item>
            </Sidebar.Collapse>

            <Sidebar.Collapse icon={HiClipboardList} label="Blogs">
              <Sidebar.Item
                as={Link}
                to="/admin/adminCards"
                icon={HiNewspaper}
              >
                Cards For News
              </Sidebar.Item>
              <Sidebar.Item as={Link} to="/admin/allUsers" icon={HiHome}>
                Hotel reservations
              </Sidebar.Item>
            </Sidebar.Collapse>
            {/* Logout Button */}
            <Sidebar.Item as="button" onClick={handleLogout} icon={HiLogout}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              as={Link}
              to="/admin/documentation"
              icon={HiViewBoards}
            >
              Documentation
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/help" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default AdminSideBar;
