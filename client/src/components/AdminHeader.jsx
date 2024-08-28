import React, { useState, useEffect } from "react";
import { Navbar, Avatar, Button, TextInput } from "flowbite-react";
import logo from "../images/logo-white-remove-bg.png";
import user from "../images/user.svg";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const AdminHeader = () => {
    const { adminID } = useParams();
    const [admin, setAdmin] = useState({});

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/admin/getAdmin/${adminID}`);
                setAdmin(response.data);
            } catch (err) {
                alert('Failed to fetch admin details!');
                console.log('Error fetching admin:', err);
            }
        };

        fetchAdmin();
    }, [adminID]);

    return (
        <div className="sticky top-0 z-50 bg-white shadow-lg lg:pl-10 lg:pr-10">
            <Navbar fluid rounded>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        className="mr-3 h-6 sm:h-9"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <div>
                    <form className="flex max-w-full flex-row gap-4">
                        <div>
                            <TextInput id="search" type="text" placeholder="search..." required />
                        </div>
                        <Button
                            type="submit"
                            className="text-sm px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 hover:bg-blue-700"
                        >
                            Search
                        </Button>
                    </form>
                </div>
                <Avatar img={user}>
                    <div className="space-y-1 font-medium dark:text-white">
                        <div>{admin.firstname} {admin.lastname}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{admin.email}</div>
                    </div>
                </Avatar>
            </Navbar>
        </div>
    );
};

export default AdminHeader;