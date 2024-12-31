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
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    // Error state for each input field
    const [errors, setErrors] = useState({});

    // Regular expressions for validations
    const nameRegex = /^[A-Za-z]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const phoneRegex = /^\d{10}$/;

    const validateField = (name, value) => {
        const newErrors = { ...errors };

        switch (name) {
            case 'firstname':
                newErrors.firstname = nameRegex.test(value) ? '' : 'First name should contain only letters.';
                break;
            case 'lastname':
                newErrors.lastname = nameRegex.test(value) ? '' : 'Last name should contain only letters.';
                break;
            case 'email':
                newErrors.email = value.includes('@') ? '' : 'Invalid email format.';
                break;
            case 'password':
                newErrors.password = passwordRegex.test(value)
                    ? ''
                    : 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
                break;
            case 'confirmPassword':
                newErrors.confirmPassword = value === password ? '' : 'Passwords do not match.';
                break;
            case 'phone':
                newErrors.phone = phoneRegex.test(value) ? '' : 'Phone number must be exactly 10 digits.';
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update state
        switch (name) {
            case 'firstname':
                setFirstname(value);
                break;
            case 'lastname':
                setLastname(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            case 'gender':
                setGender(value);
                break;
            case 'role':
                setRole(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default:
                break;
        }

        // Validate field
        validateField(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform final validation before submission
        if (Object.values(errors).some((error) => error)) return;

        try {
            const response = await axios.post('https://lando-travels-api.vercel.app/admin/register', {
                firstname,
                lastname,
                email,
                password,
                confirmPassword,
                gender,
                role,
                address,
                phone,
            });

            if (response.status === 201) {
                alert('Admin created successfully');
                console.log('Admin added successfully');

                // Clear form and errors
                setFirstname('');
                setLastname('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setGender('');
                setRole('');
                setAddress('');
                setPhone('');
                setErrors({});
            }
        } catch (error) {
            console.error(error.response?.data?.message || 'An error occurred');
            alert('Error adding Admin!');
        }
    };

    return (
        <div>
            <div className="max-w-lg mx-auto p-4 mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6 mt-3">
                        <Label htmlFor="firstname" className="mb-2 block">
                            First Name
                        </Label>
                        <TextInput
                            id="firstname"
                            name="firstname"
                            placeholder="Someone"
                            required
                            type="text"
                            value={firstname}
                            onChange={handleChange}
                            className={errors.firstname ? 'border-red-500 outline-red-500' : ''}
                        />
                        {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="lastname" className="mb-2 block">
                            Last Name
                        </Label>
                        <TextInput
                            id="lastname"
                            name="lastname"
                            placeholder="Someone's Last Name"
                            required
                            type="text"
                            value={lastname}
                            onChange={handleChange}
                            className={errors.lastname ? 'border-red-500 outline-red-500' : ''}
                        />
                        {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
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
                            required
                            value={email}
                            onChange={handleChange}
                            className={errors.email ? 'border-red-500 outline-red-500' : ''}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                            required
                            value={phone}
                            onChange={handleChange}
                            className={errors.phone ? 'border-red-500 outline-red-500' : ''}
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
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
                            required
                            value={password}
                            onChange={handleChange}
                            className={errors.password ? 'border-red-500 outline-red-500' : ''}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
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
                            required
                            value={confirmPassword}
                            onChange={handleChange}
                            className={errors.confirmPassword ? 'border-red-500 outline-red-500' : ''}
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="gender" className="mb-2 block">
                            Gender
                        </Label>
                        <div className="flex items-center">
                            <Radio id="male" name="gender" value="male" checked={gender === 'male'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <Label htmlFor="male" className="mr-4">
                                Male
                            </Label>

                            <Radio id="female" name="gender" value="female" checked={gender === 'female'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <Label htmlFor="female">
                                Female
                            </Label>
                        </div>
                        {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="address" className="mb-2 block">
                            Address
                        </Label>
                        <Textarea
                            id="address"
                            name="address"
                            placeholder="Colombo, Sri Lanka"
                            required
                            rows={3}
                            value={address}
                            onChange={handleChange}
                            className={errors.address ? 'border-red-500 outline-red-500' : ''}
                        />
                        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="role" className="mb-2 block">
                            Admin Role
                        </Label>
                        <div className="flex items-center">
                            <Radio id="owner" name="role" value="owner" checked={role === 'owner'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <Label htmlFor="owner" className="mr-4">
                                Owner
                            </Label>

                            <Radio id="editor" name="role" value="editor" checked={role === 'editor'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <Label htmlFor="editor">
                                Editor
                            </Label>
                        </div>
                        {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
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