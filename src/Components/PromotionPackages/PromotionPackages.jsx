import React from 'react';
import { Link } from 'react-router-dom';

const PromotionPackages = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <div className="flex max-w-[1600px] w-[80%] m-auto flex-col-reverse md:flex-row items-center justify-between  py-12 bg-white">
                {/* Left Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-xs font-semibold text-blue-800 uppercase tracking-wider mb-2">Promotion</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-snug">
                        We Provide You Best <br />
                        <span className="text-blue-900">Europe Sightseeing Tours</span>
                    </h2>
                    <p className="text-gray-600 text-sm mt-4 mb-6">
                        Experience the best of Europe with our top-rated sightseeing tours! Explore iconic landmarks, breathtaking landscapes, and rich cultural heritage with expert guides. Book your adventure today!
                    </p>
                    <Link to="/packages">
                        <button className="bg-orange-500 hover:bg-orange-500 text-white px-6 py-2 rounded-md font-semibold shadow-md transition duration-200">
                            View Packages
                        </button>
                    </Link>
                </div>

                {/* Right Image */}
                <div className="flex justify-center mb-8 md:mb-0">
                    <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Europe Tour"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromotionPackages;