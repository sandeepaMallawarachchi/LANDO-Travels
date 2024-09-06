import React, { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { HiX } from "react-icons/hi";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPasswordReset = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [resetCode, setResetCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRequestResetCode = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post('http://localhost:4000/admin/passwordEmail', { email });
            setStep(2);
        } catch (error) {
            alert('Failed to request reset code');
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        setLoading(true);

        try {
            await axios.post('http://localhost:4000/admin/passwordReset', {
                email,
                resetCode,
                newPassword: password
            });
            alert('Password reset successfully');
            navigate('/'); 
        } catch (error) {
            alert('Failed to reset password');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-0">
            <div className="relative bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    aria-label="Close"
                >
                    <HiX className="w-6 h-6" />
                </button>

                <h2 className="text-xl font-semibold mb-4">{step === 1 ? 'Request Reset Code' : 'Reset Password'}</h2>

                {step === 1 ? (
                    <form onSubmit={handleRequestResetCode}>
                        <div className="mb-4">
                            <Label htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="example@gmail.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                className="text-sm px-4 py-2 bg-blue-500 hover:bg-blue-700"
                                disabled={loading}
                            >
                                {loading ? 'Requesting...' : 'Request Reset Code'}
                            </Button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleResetPassword}>
                        <div className="mb-4">
                            <Label htmlFor="resetCode" value="Reset Code" />
                            <TextInput
                                id="resetCode"
                                type="text"
                                placeholder="Enter reset code"
                                required
                                value={resetCode}
                                onChange={(e) => setResetCode(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="password" value="New Password" />
                            <TextInput
                                id="password"
                                type="password"
                                placeholder="New Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="confirm-password" value="Confirm Password" />
                            <TextInput
                                id="confirm-password"
                                type="password"
                                placeholder="Confirm Password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                className="text-sm px-4 py-2 bg-blue-500 hover:bg-blue-700"
                                disabled={loading}
                            >
                                {loading ? 'Resetting...' : 'Reset Password'}
                            </Button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AdminPasswordReset;