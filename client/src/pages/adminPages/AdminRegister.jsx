import React, { useState } from 'react';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import axios from 'axios';

const AdminRegister = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/admin/register', {
                firstname,
                lastname,
                email,
                password,
                confirmPassword,
                gender,
                birthdate,
                address,
                phone,
            });

            if (response.status === 201) {
                alert('Admin created successfully');
                console.log('Admin created successfully');
                
                setFirstname('');
                setLastname('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setGender('');
                setBirthdate('');
                setAddress('');
                setPhone('');
            }
        } catch (error) {
            console.error(error.response?.data?.message || 'An error occurred');
            alert('Error!');
        }
    };

    return (
        <div>
            <div className="max-w-md mx-auto p-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6 mt-3">
                        <Label htmlFor="firstname" className="mb-2 block">
                            First Name
                        </Label>
                        <TextInput
                            id="firstname"
                            name="firstname"
                            placeholder="First Name"
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="lastname" className="mb-2 block">
                            Last Name
                        </Label>
                        <TextInput
                            id="lastname"
                            name="lastname"
                            placeholder="Last Name"
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="email" className="mb-2 block">
                            Email
                        </Label>
                        <TextInput
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="password" className="mb-2 block">
                            Password
                        </Label>
                        <TextInput
                            id="password"
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="confirmPassword" className="mb-2 block">
                            Confirm Password
                        </Label>
                        <TextInput
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="gender" className="mb-2 block">
                            Gender
                        </Label>
                        <TextInput
                            id="gender"
                            name="gender"
                            placeholder="Gender (male or female)"
                            type="text"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="birthdate" className="mb-2 block">
                            Birthdate
                        </Label>
                        <TextInput
                            id="birthdate"
                            name="birthdate"
                            placeholder="Birthdate"
                            type="date"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="address" className="mb-2 block">
                            Address
                        </Label>
                        <Textarea
                            id="address"
                            name="address"
                            placeholder="Address"
                            rows={3}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="phone" className="mb-2 block">
                            Phone
                        </Label>
                        <TextInput
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <Button type="submit" className="text-sm px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 hover:bg-blue-700">
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminRegister;