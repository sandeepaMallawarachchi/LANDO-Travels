import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sidebar } from "flowbite-react";
import { BiBuoy, BiMenu } from "react-icons/bi";
import {
  HiChartPie,
  HiInbox,
  HiClipboardList,
  HiUser,
  HiViewBoards,
  HiUserAdd,
  HiUsers,
  HiLogout,
  HiNewspaper,
} from "react-icons/hi";
import { Link, useNavigate, useLocation } from "react-router-dom";

const AdminSideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get the current path

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:4000/admin/logout");
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Helper function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path ? "text-blue-500" : "";
  };

  return (
    <div className="relative">
      {/* Toggle Button for smaller screens */}
      <div className="absolute top-4 left-4 p-4">
        <button onClick={toggleSidebar} className="text-xl">
          <BiMenu />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed h-screen inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:block md:w-64`}
      >
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                as={Link}
                to="/admin/admindashboard"
                icon={HiChartPie}
                className={isActive("/admin/admindashboard")} 
              >
                Dashboard
              </Sidebar.Item>

              <Sidebar.Item
                as={Link}
                to="/admin/inbox"
                icon={HiInbox}
                className={isActive("/admin/inbox")} 
              >
                Inbox
              </Sidebar.Item>

              <Sidebar.Collapse
                icon={HiUser}
                label="Users"
                className={isActive("/admin/adminregister") || isActive("/admin/allUsers")} // For sub-items
              >
                <Sidebar.Item
                  as={Link}
                  to="/admin/adminregister"
                  icon={HiUserAdd}
                  className={isActive("/admin/adminregister")} 
                >
                  Register a new user
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  to="/admin/allUsers"
                  icon={HiUsers}
                  className={isActive("/admin/allUsers")} 
                >
                  All users
                </Sidebar.Item>
              </Sidebar.Collapse>

              <Sidebar.Collapse
                icon={HiClipboardList}
                label="Blogs"
                className={isActive("/admin/adminCards")}
              >
                <Sidebar.Item
                  as={Link}
                  to="/admin/adminCards"
                  icon={HiNewspaper}
                  className={isActive("/admin/adminCards")} // Add active class
                >
                  Cards For News
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
                className={isActive("/admin/documentation")} // Add active class
              >
                Documentations
              </Sidebar.Item>
              <Sidebar.Item
                as={Link}
                to="/admin/helps"
                icon={BiBuoy}
                className={isActive("/admin/helps")} 
              >
                Help
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default AdminSideBar;