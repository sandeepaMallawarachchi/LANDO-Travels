import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'flowbite-react';

const AllAdmins = () => {
    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const response = await axios.get('http://localhost:4000/admin/getAll');
                setAdmins(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchAdmins();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="p-10">
            <h1 className="text-xl font-bold mb-5">All Admins</h1>
            <div className="overflow-x-auto">
                <div className="min-w-full">
                    <Table striped className="min-w-full">
                        <Table.Head>
                            <Table.HeadCell>First Name</Table.HeadCell>
                            <Table.HeadCell>Last Name</Table.HeadCell>
                            <Table.HeadCell>Email</Table.HeadCell>
                            <Table.HeadCell>Phone</Table.HeadCell>
                            <Table.HeadCell>Address</Table.HeadCell>
                            <Table.HeadCell>Gender</Table.HeadCell>
                            <Table.HeadCell>Birthdate</Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {admins.map((admin) => (
                                <Table.Row
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                    key={admin._id}
                                >
                                    <Table.Cell>{admin.firstname}</Table.Cell>
                                    <Table.Cell>{admin.lastname}</Table.Cell>
                                    <Table.Cell>
                                        <a
                                            href={`mailto:${admin.email}`}
                                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                                        >
                                            {admin.email}
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <a
                                            href={`tel:${admin.phone}`}
                                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                                        >
                                            {admin.phone}
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell>{admin.address}</Table.Cell>
                                    <Table.Cell>{admin.gender}</Table.Cell>
                                    <Table.Cell>{new Date(admin.birthdate).toLocaleDateString()}</Table.Cell>
                                    <Table.Cell>
                                        <a
                                            href="#"
                                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                        >
                                            Edit
                                        </a>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default AllAdmins;