import React, { useState } from 'react';
import { Button, Label, Textarea, TextInput, Radio } from 'flowbite-react';
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
                console.log('Admin added successfully');

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
            alert('Error adding Admin!');
        }
    };

    return (
        <div>
            <div className="max-w-lg mx-auto p-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6 mt-3">
                        <Label htmlFor="firstname" className="mb-2 block">
                            First Name
                        </Label>
                        <TextInput
                            id="firstname"
                            name="firstname"
                            placeholder="Someone"
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
                            placeholder="Someone's Last Name"
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
                            placeholder="example@gmail.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="phone" className="mb-2 block">
                            Phone
                        </Label>
                        <TextInput
                            id="phone"
                            name="phone"
                            placeholder="+94 xxxxxxxx"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
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
                        <div className="flex items-center">
                            <Radio id="male" name="gender" value="male" checked={gender === 'male'}
                                onChange={(e) => setGender(e.target.value)}
                                className="mr-2"
                            />
                            <Label htmlFor="male" className="mr-4">
                                Male
                            </Label>

                            <Radio id="female" name="gender" value="female" checked={gender === 'female'}
                                onChange={(e) => setGender(e.target.value)}
                                className="mr-2"
                            />
                            <Label htmlFor="female">
                                Female
                            </Label>
                        </div>
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="birthdate" className="mb-2 block">
                            Birthdate
                        </Label>
                        <TextInput
                            id="birthdate"
                            name="birthdate"
                            placeholder="08-04-2002"
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
                            placeholder="Colombo, Sri Lanka"
                            rows={3}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="mt-4 w-full">
                        <Button type="submit" className="w-full text-sm px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 hover:bg-blue-700">
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminRegister;