import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Replace with actual logic for user authentication

        



    };

    return (
        <div className="bg-white-200 p-8 h-screen flex flex-col">
            <div className="w-full max-w-md space-y-4 mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>

                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="username" className="font-semibold text-gray-700">Username</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                    </div>

                    <div className="flex flex-col mb-3">
                        <label htmlFor="password" className="font-semibold text-gray-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                    </div>

                    <div className="mt-6 w-full">
                        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
