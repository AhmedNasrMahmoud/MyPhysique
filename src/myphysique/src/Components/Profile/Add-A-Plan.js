import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const AddPlan = () => {
   // const navigate = useNavigate();

    return (
        <div>
            <div className="pt- inset-2">
                <div className="hero bg-blue-500 text-white p-10">
                    <h1 className="text-4xl font-bold">THIS IS ADD A PLAN PAGE</h1>
                    <p className="text-xl mt-2">Your personal workout planner</p>
                    <Button className="mt-4 bg-white text-blue-500 py-2 px-4 rounded">
                        Get Started
                    </Button>
                </div>
                
                <div className="p-6">
                    <h2 className="text-2xl font-bold">Your Fitness Journey Starts Here</h2>
                    <p className="mt-4">Discover personalized workout plans, expert advice, community support, and more...</p>
                </div>
            </div>
        </div>
    );
}
export default AddPlan;