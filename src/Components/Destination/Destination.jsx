import React from 'react';

const Destination = () => {
    return (
        <div className="p-5  mx-auto sm:p-4">
            {/* Header Section */}
            <div className="text-center mt-4">
                <h1 className="uppercase text-[#181E4B] font-bold md:text-4xl text-2xl">
                    Popular Destination
                </h1>
            </div>

            {/* Destination Images */}
            <div className="flex flex-wrap gap-4 justify-center items-center mt-6 max-sm:gap-2">
                {/* Image 1 */}
                <div className="w-full md:w-[30%] sm:w-[48%] max-sm:w-full border border-gray-300 rounded-2xl overflow-hidden shadow-sm">
                    <img
                        src="https://i.ibb.co.com/yFktrWwh/Frame-478.png"
                        alt="Destination 1"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Image 1 */}
                <div className="w-full md:w-[30%] sm:w-[48%] max-sm:w-full border border-gray-300 rounded-2xl overflow-hidden shadow-sm">
                    <img
                        src="https://i.ibb.co.com/yFktrWwh/Frame-478.png"
                        alt="Destination 1"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Image 1 */}
                <div className="w-full md:w-[30%] sm:w-[48%] max-sm:w-full border border-gray-300 rounded-2xl overflow-hidden shadow-sm">
                    <img
                        src="https://i.ibb.co.com/yFktrWwh/Frame-478.png"
                        alt="Destination 1"
                        className="w-full h-full object-cover"
                    />
                </div>
              
              
            </div>
        </div>
    );
};

export default Destination;
