import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaCalendarAlt,
    FaTicketAlt,
    FaCommentDots,
} from 'react-icons/fa';

const TourPlan = () => {
    const [activeTab, setActiveTab] = useState('information');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="max-w-screen-xl mx-auto py-10 px-5">
            {/* Tab Navigation */}
            <div className="flex justify-center gap-7 mb-10">


            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Section: Tour Plan */}
                <div className="bg-white p-6 rounded-xl shadow-lg space-y-8">
                    <h1 className="text-3xl font-bold text-blue-600">Tour Plan</h1>

                    {/* Day 01 Plan */}
                    <div className="border p-5 rounded-lg">
                        <h2 className="text-xl font-bold text-gray-800 mb-3">Day 01: Arrival & City Tour</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li>🚖 <strong>Morning:</strong> Arrival at the destination and hotel check-in.</li>
                            <li>🍳 <strong>Breakfast:</strong> Welcome meal at the hotel.</li>
                            <li>🏙️ <strong>Afternoon:</strong> Guided city tour of historical landmarks.</li>
                            <li>🍽️ <strong>Lunch:</strong> Traditional dishes at a local restaurant.</li>
                            <li>🌇 <strong>Evening:</strong> Leisure walk and sunset view at the park.</li>
                            <li>🍕 <strong>Dinner:</strong> Light dinner at a cozy café.</li>
                        </ul>
                    </div>

                    {/* Day 02 Plan */}
                    <div className="border p-5 rounded-lg">
                        <h2 className="text-xl font-bold text-gray-800 mb-3">Day 02: Adventure Activities</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li>⛰️ <strong>Morning:</strong> Mountain hiking and panoramic views.</li>
                            <li>🍳 <strong>Breakfast:</strong> Light snacks on the trail.</li>
                            <li>🌊 <strong>Afternoon:</strong> River rafting and exploration.</li>
                            <li>🍔 <strong>Lunch:</strong> Picnic by the riverside.</li>
                            <li>🎶 <strong>Evening:</strong> Bonfire with music and stories.</li>
                            <li>🍲 <strong>Dinner:</strong> Barbecue dinner outdoors.</li>
                        </ul>
                    </div>

                    {/* Day 03 Plan */}
                    <div className="border p-5 rounded-lg">
                        <h2 className="text-xl font-bold text-gray-800 mb-3">Day 03: Beach Day</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li>🌞 <strong>Morning:</strong> Relaxing at the beach with activities.</li>
                            <li>🍹 <strong>Breakfast:</strong> Refreshments by the ocean.</li>
                            <li>🏄 <strong>Afternoon:</strong> Water sports like snorkeling and jet skiing.</li>
                            <li>🍔 <strong>Lunch:</strong> Fresh seafood at a beachside shack.</li>
                            <li>🌅 <strong>Evening:</strong> Sunset viewing and photography.</li>
                            <li>🍤 <strong>Dinner:</strong> Special seafood platters.</li>
                        </ul>
                    </div>

                    {/* Day 04 Plan */}
                    <div className="border p-5 rounded-lg">
                        <h2 className="text-xl font-bold text-gray-800 mb-3">Day 04: Cultural Exploration</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li>🏛️ <strong>Morning:</strong> Visit museums and cultural centers.</li>
                            <li>🍳 <strong>Breakfast:</strong> Local snacks and beverages.</li>
                            <li>🎨 <strong>Afternoon:</strong> Learn about traditional arts and crafts.</li>
                            <li>🍝 <strong>Lunch:</strong> Local delicacies at a heritage restaurant.</li>
                            <li>🎭 <strong>Evening:</strong> Watch a cultural dance performance.</li>
                            <li>🍲 <strong>Dinner:</strong> Fine dining with traditional music.</li>
                        </ul>
                    </div>

                    {/* Day 05 Plan */}
                    <div className="border p-5 rounded-lg">
                        <h2 className="text-xl font-bold text-gray-800 mb-3">Day 05: Departure</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li>🚖 <strong>Morning:</strong> Relax and prepare for departure.</li>
                            <li>🍳 <strong>Breakfast:</strong> Farewell meal at the hotel.</li>
                            <li>📸 <strong>Afternoon:</strong> Capture final memories and shop for souvenirs.</li>
                            <li>✈️ <strong>Evening:</strong> Departure and safe travels home.</li>
                        </ul>
                    </div>
                </div>

                {/* Right Section: Form */}
                <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
                    <form className="space-y-6">
                        <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">Book Your Trip</h2>

                        {/* Name */}
                        <div className="flex items-center border rounded-lg p-3 bg-white">
                            <FaUser className="text-gray-500 mr-3" />
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex items-center border rounded-lg p-3 bg-white">
                            <FaEnvelope className="text-gray-500 mr-3" />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full focus:outline-none"
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex items-center border rounded-lg p-3 bg-white">
                            <FaPhone className="text-gray-500 mr-3" />
                            <input
                                type="tel"
                                placeholder="Your Phone"
                                className="w-full focus:outline-none"
                            />
                        </div>

                        {/* Date */}
                        <div className="flex items-center border rounded-lg p-3 bg-white">
                            <FaCalendarAlt className="text-gray-500 mr-3" />
                            <input
                                type="date"
                                className="w-full focus:outline-none"
                            />
                        </div>

                        {/* Number of Tickets */}
                        <div className="flex items-center border rounded-lg p-3 bg-white">
                            <FaTicketAlt className="text-gray-500 mr-3" />
                            <input
                                type="number"
                                placeholder="Number of Tickets"
                                className="w-full focus:outline-none"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex items-center border rounded-lg p-3 bg-white">
                            <FaCommentDots className="text-gray-500 mr-3" />
                            <textarea
                                placeholder="Your Message"
                                className="w-full focus:outline-none"
                                rows="4"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TourPlan;
