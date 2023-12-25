import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    return (
        <nav className="bg-gray-800 text-white p-4 fixed w-full z-10">
            <div className="flex justify-between items-center">
                <div className="invisible">
                    <Button className="bg-transparent text-transparent font-bold py-2 px-4 rounded mx-2">Login</Button>
                </div>

                <ul className="flex">
                    <li className="mx-4"><Link to="/">Home</Link></li>
                    <li className="mx-4"><Link to="/about">About</Link></li>
                    <li className="mx-4"><Link to="/contact">Contact</Link></li>
                </ul>

                <div>
                    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={goToLogin}>
                        Login
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
