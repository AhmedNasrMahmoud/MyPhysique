import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Fixed Navbar */}
            <nav className="bg-gray-800 text-white p-4 fixed w-full z-10">
                <div className="flex justify-center">
                <ul className="flex space-x-8">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                </div>
            </nav>

            {/* Placeholder for the rest of the content, with padding to offset the fixed navbar */}
            <div className="pt-16">
                <div className="hero bg-blue-500 text-white p-10">
                    <h1 className="text-4xl font-bold">Welcome to MyPhysique</h1>
                    <p className="text-xl mt-2">Your personal workout planner</p>
                    <button className="mt-4 bg-white text-blue-500 py-2 px-4 rounded">Get Started</button>
                </div>

                {/* Additional Content */}
                <div className="p-10">
                    <h2 className="text-2xl font-bold">Your Fitness Journey Starts Here</h2>
                    <p className="mt-4">Discover personalized workout plans, expert advice, community support, and more...</p>
                    {/* More content goes here */}
                </div>
            </div>
        </div>
    );
}

export default Home;
