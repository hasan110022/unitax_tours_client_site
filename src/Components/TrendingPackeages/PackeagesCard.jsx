import React, { useState } from 'react';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa'; // Importing location and star icons
import { Link } from 'react-router-dom';

const PackagesCard = ({ tour }) => {
    const {_id, image, countryLogo, day, people, countryName, location, price, description } = tour;
    const [modalOpen, setModalOpen] = useState(false); 
    const [selectedTour, setSelectedTour] = useState(null); 
    const rating = 4.5; 

    const openModal = () => {
        setModalOpen(true);
        setSelectedTour(tour); 
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedTour(null); 
    };

    return (
        <div>
            <div className="card bg-black w-full  max-sm:p-5 md:max-w-full mx-auto shadow-sm hover:scale-105 transition-all ease-in-out duration-300 max-sm:max-w-full">
                <figure className="relative">
                    <img
                        className="w-full h-48 max-sm:h-40 object-cover"
                        src={image}
                        alt="Destination"
                    />
                    <div className="absolute bottom-4 left-4 bg-black p-2 rounded-full">
                        <img
                            className="w-10 h-10 object-contain"
                            src={countryLogo}
                            alt="Country Logo"
                        />
                    </div>
                </figure>
                <div className="card-body text-white p-4">
                    <div className="flex items-center justify-between flex-wrap">
                        <h2 className="card-title text-xl font-semibold max-sm:text-lg">{countryName}</h2>
                        <div className="flex items-center mt-2 max-sm:mt-1">
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    className={`text-yellow-400 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                />
                            ))}
                            <span className="ml-2 text-white max-sm:text-sm">{rating}</span>
                        </div>
                    </div>
                    <div className="flex items-center mt-2 text-white max-sm:text-sm">
                        <FaMapMarkerAlt className="mr-2 text-gray-300" />
                        <span>{location}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4 max-sm:mt-2">
                        <p className="text-sm text-gray-300 max-sm:text-xs">{day} Days | {people} People</p>
                        <div className='flex items-center gap-5 max-sm:gap-3'>
                            <p className="text-lg font-bold max-sm:text-base">${price}</p>
                            <p className='line-through text-lg font-bold text-gray-500 max-sm:text-base'>$1500</p>
                        </div>
                    </div>
                    <p className="text-white mt-2 max-sm:text-sm">{description}</p>
                    <div className="card-actions justify-center mt-4 max-sm:mt-2">
                        <button
                            className='btn bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-2 max-sm:px-4 max-sm:py-1 max-sm:text-sm'
                            onClick={openModal}
                        >
                            Build Packages
                        </button>
                        <Link to={`/tour/${_id}`}><button className='btn bg-orange-600 text-white hover:bg-sky-700 rounded-full px-6 py-2 max-sm:px-4 max-sm:py-1 max-sm:text-sm'>
                            View Details
                        </button></Link>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalOpen && selectedTour && (
                <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex items-center justify-center z-50">
                    <div className="modal-content bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 relative">

                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-xl font-bold text-gray-700 hover:text-gray-900 transition-transform transform hover:rotate-90"
                            onClick={closeModal}
                        >
                            ✖
                        </button>

                        {/* Tour Name */}
                        <div className="border-b-4 border-blue-500 pb-4">
                            <h2 className="text-3xl font-bold text-gray-800 text-center uppercase tracking-wide">
                                {selectedTour.countryName}
                            </h2>
                        </div>

                        {/* Tour Image */}
                        <div className="mt-6">
                            <img
                                className="w-full h-64 object-cover rounded-md shadow-md"
                                src={selectedTour.image}
                                alt="Tour Image"
                            />
                        </div>

                        {/* Details Section */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center justify-center bg-blue-100 rounded-md shadow-sm p-3">
                                <p className="text-blue-700 font-medium text-lg">{selectedTour.location}</p>
                            </div>
                            <div className="flex items-center justify-center bg-green-100 rounded-md shadow-sm p-3">
                                <p className="text-green-700 font-medium text-lg">{selectedTour.day} Days</p>
                            </div>
                            <div className="flex items-center justify-center bg-purple-100 rounded-md shadow-sm p-3">
                                <p className="text-purple-700 font-medium text-lg">{selectedTour.people} People</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}






        </div>
    );
};

export default PackagesCard;



