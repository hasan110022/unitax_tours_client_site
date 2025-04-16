import React from 'react';
import {  useNavigate } from 'react-router-dom'; // Import useNavigate
import Swal from 'sweetalert2';


const DestinationForm = () => {
   

    // Initialize navigate function
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const destination = form.destination.value;
        const image = form.image.value;
        const checkdate = form.checkdate.value;
        const checkoutdate = form.checkoutdate.value;

        const newDestination = { destination, image, checkdate, checkoutdate };
        console.log(newDestination);

        // Send data to the server
        fetch('http://localhost:5000/destination', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDestination),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire("Data sent to Destination Page from Navbar!");

                    navigate('/destination');
                }
            });
    };

    return (
        <form className='max-w-screen-xl mx-auto' onSubmit={handleSubmit}>
            <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center gap-5 mx-auto border-2 bg-base-100 p-10">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="destination">
                        Enter Destination
                    </label>
                    <input
                        type="text"
                        id="destination"
                        name="destination"
                        placeholder="Enter destination name"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="image">
                        Image
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder="Enter destination image URL"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="checkdate">
                        Check-in Date
                    </label>
                    <input
                        type="date"
                        id="checkdate"
                        name="checkdate"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="checkoutdate">
                        Check-out Date
                    </label>
                    <input
                        type="date"
                        id="checkoutdate"
                        name="checkoutdate"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <button className="btn bg-yellow-400 text-white mt-6">Submit</button>
            </div>

            
        </form>
    );
};

export default DestinationForm;
