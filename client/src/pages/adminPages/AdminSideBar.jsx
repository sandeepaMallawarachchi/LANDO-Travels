import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
  HiUserAdd,
  HiUsers,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <div className="h-screen">
      <Sidebar aria-label="Sidebar with content separator example h-screen fixed">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              as={Link}
              to="/admin/admindashboard"
              icon={HiChartPie}
            >
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/workhistory" icon={HiViewBoards}>
              Work History
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
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Blogs
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default AdminSideBar;
