import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    

    const  handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData); 
        
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    };

    return (
        <div className="bg-white-200 p-8 h-screen flex flex-col">
            <div className="w-full max-w-md space-y-4 mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-center pb-2">Please Enter The Following Information:</h1>
                
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="firstName" className="font-semibold">First Name</label>
                        <input id="firstName" type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>

                    <div className="flex flex-col mb-3">
                        <label htmlFor="lastName" className="font-semibold">Last Name</label>
                        <input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>

                    <div className="flex flex-col mb-3">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>

                    <div className="flex flex-col mb-3">
                        <label htmlFor="username" className="font-semibold">Username</label>
                        <input id="username" type="text" name="username" value={formData.username} onChange={handleChange} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>

                    <div className="flex flex-col mb-3">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>

                    <div className="mt-6 w-full">
                        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
