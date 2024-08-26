import React, { useState } from "react";
import { Navbar, Avatar, Button, TextInput } from "flowbite-react";
import logo from "../images/logo-white-remove-bg.png";
import user from "../images/user.svg";
import { Link } from "react-router-dom";

const AdminHeader = () => {

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
                        <div>Jese Leos</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                    </div>
                </Avatar>
            </Navbar>
        </div>
    );
};

export default AdminHeader;
