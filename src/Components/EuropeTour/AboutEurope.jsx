import React, { useState } from 'react';

const AboutEurope = () => {
    const [showImage, setShowImage] = useState(false);

    const handleClick = () => {
        setShowImage(!showImage);
    };

    return (
        <div className='mt-5 my-6 max-sm:p-4 sm:px-6 lg:px-8'>
            <div className='flex max-sm:flex-col items-center'>
                <div className='w-full md:w-full lg:max-w-[1000px] space-y-6 mx-auto'>
                    <p className='font-bold text-lg sm:text-xl md:text-2xl'>PROMOTION</p>
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl mt-2'>
                        We Provide You Best <br /> Europe Sightseeing Tours
                    </h1>
                    <p className='mt-2 text-lg sm:text-xl md:text-2xl'>
                        Discover the world with ease and comfort! Whether you're looking for a relaxing beach vacation, an adventurous mountain trek, or a cultural city tour, we have the perfect package for you.
                    </p>

                    <button
                        className='btn bg-orange-500 text-white mt-2 px-4 py-2 rounded-md text-sm sm:text-base'
                        onClick={handleClick}>
                        View Packages
                    </button>
                </div>

                {/* Show Image with animation */}
                <div className={`transition-opacity duration-1000 ${showImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {showImage && (
                        <div className='w-full mt-5'>
                            <img
                                className='md:w-[450px] w-full h-auto'
                                src="https://i.ibb.co.com/JjxvKg09/Ellipse-626.png"
                                alt="Europe Tours"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AboutEurope;
