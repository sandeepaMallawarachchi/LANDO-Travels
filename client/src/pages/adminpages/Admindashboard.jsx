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
} from "react-icons/hi";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    const [posts, setPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Fetch all posts
        axios
            .get("/api/posts")
            .then((response) => setPosts(response.data))
            .catch((error) => console.log(error));

        // Close modal when entering AdminDashboard
        setIsModalOpen(false);
    }, []);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex">
            <div className="p-4 flex-1">
                <h2>Admin Dashboard</h2>
                <div>
                    <h3>Manage Posts</h3>
                    {posts.map((post) => (
                        <div key={post._id} className="mb-4">
                            <h4>{post.title}</h4>
                            <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">
                                Edit
                            </button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded">
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;