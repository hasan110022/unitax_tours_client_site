import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaTicketAlt, FaCommentDots } from 'react-icons/fa';
import Banner from '../Banner/Banner';

const PackagesDetails = () => {
    const {_id, image, countryLogo, day, people, countryName, location, price, description, tourPlanDetails } = useLoaderData();

    // State to track the active tab
    const [activeTab, setActiveTab] = useState('information');

    // Handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='max-w-[1400px] mx-auto h-auto'>
            <div>
                <Banner />
            </div>

            {/* Tab Navigation */}
            <div className='flex items-center justify-center gap-7 p-10'>
                <div
                    className={`font-bold text-xl p-5 border cursor-pointer ${activeTab === 'information' ? 'bg-yellow-300' : 'bg-white'}`}
                    onClick={() => handleTabClick('information')}
                >
                    <h1>Information</h1>
                </div>
               <Link to='/tab'> <div
                    className={`font-bold text-xl p-5 border cursor-pointer ${activeTab === 'tourPlan' ? 'bg-yellow-300' : 'bg-white'}`}
                    onClick={() => handleTabClick('tourPlan')}
                >
                    <h1>Tour Plan</h1>
                </div></Link>
            </div>

            <div className="max-w-[1400px] mx-auto bg-white border-2 rounded-xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Section */}
                <div className="flex flex-col items-center">
                    {/* Country Image */}
                    <img
                        src={image}
                        alt={countryName}
                        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                    />

                    {/* Country Info */}
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-blue-600">{countryName}</h1>
                        <p className="mt-2 text-xl text-gray-700 font-semibold">${price}
                            <span className="text-yellow-500 text-sm"> / per couple</span>
                        </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-center mt-5 gap-2">
                        <div className="rating flex">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                        </div>
                        <span className="text-gray-600">(2.8k reviews)</span>
                    </div>

                    {/* Description */}
                    <p className="mt-6 text-lg leading-relaxed text-gray-600">{description}</p>
                </div>

                {/* Right Section - Form */}
                <div className="flex flex-col justify-evenly">
                    <form className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-lg">
                        {/* Form Fields */}
                        <div className="flex items-center border rounded-lg p-3 bg-white">
                            <FaUser className="text-gray-500 mr-3" />
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center border rounded-lg p-3 bg-white">
                            <FaEnvelope className="text-gray-500 mr-3" />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center border rounded-lg p-3 bg-white">
                            <FaPhone className="text-gray-500 mr-3" />
                            <input
                                type="tel"
                                placeholder="Your Phone"
                                className="w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center border rounded-lg p-3 bg-white">
                            <FaCalendarAlt className="text-gray-500 mr-3" />
                            <input
                                type="date"
                                className="w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center border rounded-lg p-3 bg-white">
                            <FaTicketAlt className="text-gray-500 mr-3" />
                            <input
                                type="number"
                                placeholder="Number of Tickets"
                                className="w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center border rounded-lg p-3 bg-white">
                            <FaCommentDots className="text-gray-500 mr-3" />
                            <textarea
                                placeholder="Your Message"
                                className="w-full focus:outline-none"
                                rows="4"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Content Based on Active Tab */}
            <div className="p-10">
                {activeTab === 'information' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">About {countryName}</h2>
                        <p>{description}</p>
                        {/* You can add more dynamic content related to the "information" tab here */}
                    </div>
                )}

                {activeTab === 'tourPlan' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Tour Plan</h2>
                        <ul className="list-disc pl-6">
                            {/* Assuming tourPlanDetails is an array of tour plan details */}
                            {tourPlanDetails?.map((plan, index) => (
                                <li key={index} className="text-lg text-gray-700">{plan}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PackagesDetails;
