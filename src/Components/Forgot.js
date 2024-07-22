import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Make a request to your backend server to update the password in the database
            const response = await axios.post('/api/reset-password', {
                email,
                newPassword
            });

            console.log(response.data); // Assuming the server returns a success message
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} />

                <label htmlFor="newPassword">New Password:</label>
                <input type="password" id="newPassword" value={newPassword} onChange={handleNewPasswordChange} />

                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ForgotPassword;