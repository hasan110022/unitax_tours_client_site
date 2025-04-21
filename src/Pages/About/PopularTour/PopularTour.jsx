import React, { useState, useEffect, useRef } from 'react';
import { FaCalendarCheck, FaMapMarkerAlt, FaPlaneDeparture } from 'react-icons/fa';

const PopularTour = () => {
    // Initial state for loading percentages
    const [loadingStates, setLoadingStates] = useState([1, 1, 1]);
    const [targetPercentages, setTargetPercentages] = useState([78, 55, 30]);
    const [isInView, setIsInView] = useState(false);

    const loadingSectionRef = useRef(null);

    useEffect(() => {
        // Create an intersection observer to detect when the loading section comes into view
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the section is in view
            }
        );

        if (loadingSectionRef.current) {
            observer.observe(loadingSectionRef.current);
        }

        return () => {
            if (loadingSectionRef.current) {
                observer.unobserve(loadingSectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            // Animate progress for each card only when the section is in view
            const intervals = targetPercentages.map((target, index) => {
                const interval = setInterval(() => {
                    setLoadingStates((prevStates) => {
                        const newStates = [...prevStates];
                        if (newStates[index] < target) {
                            newStates[index] += 1; // Increment percentage
                        } else {
                            clearInterval(interval);
                        }
                        return newStates;
                    });
                }, 40);

                return interval;
            });

            return () => intervals.forEach(clearInterval);
        }
    }, [isInView, targetPercentages]);

    const borderColors = ['purple', 'green', 'blue'];


    const descriptions = ['VACATIONS', 'HONEYMOON', 'MUSICAL EVENTS'];

    return (
        <div className='max-w-[1600px] w-[80%] m-auto'>
            <div className=" justify-end max-sm:mt-96  py-12">
                <div className="text-start mb-12 max-w-screen-lg">
                    <h1 className="uppercase text-yellow-300 font-bold text-lg">Trend</h1>
                    <h2 className="text-black font-bold text-3xl mt-2">Our Popular Tour Plans</h2>
                    <p className="mt-4 text-gray-600 font-semibold text-lg max-w-2xl ">
                        Discover the best of Europe with our carefully curated tour plans. From historic cities to breathtaking landscapes, we offer unforgettable travel experiences. Book your adventure today!
                    </p>
                </div>


                <div
                    ref={loadingSectionRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {loadingStates.map((state, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                            <div className="relative w-32 h-32 rounded-full bg-transparent flex items-center justify-center mb-4">
                                <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
                                <div
                                    className="absolute inset-0 rounded-full border-8"
                                    style={{
                                        borderColor: borderColors[index],
                                        clipPath: `inset(0 ${100 - state}% 0 0)`,
                                    }}
                                ></div>
                                <p className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold">
                                    {state}%
                                </p>
                            </div>
                            <p className="text-center font-bold text-gray-700 text-xl">{descriptions[index]}</p> {/* Description for each card */}
                        </div>
                    ))}
                </div>


            </div>
            <div className='mt-32 my-5 gap-8 md:flex items-center justify-end'>
                <img className='md:w-1/2' src="https://res.cloudinary.com/dk95heui2/image/upload/v1744977954/praveg-ghoghla-beach-resort-diu-1200x676_reqpm3.jpg" alt="" />
                <div className='md:w-1/2'>
                    <p className="text-sm font-semibold text-yellow-500">Fast & Easy</p>
                    <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mt-1 mb-6">Get Your Favourite <br /> Resort Bookings
                    </h1>

                    <div className="space-y-6">
                        {/* Choose Destination */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-yellow-400 p-3 rounded-md text-white text-xl">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h2 className="font-bold text-gray-800">Choose Destination</h2>
                                <p className="text-gray-600 text-sm">
                                    Wander through charming streets, explore iconic landmarks, or relax by stunning coastlines.
                                </p>
                            </div>
                        </div>

                        {/* Check Availability */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-red-400 p-3 rounded-md text-white text-xl">
                                <FaCalendarCheck />
                            </div>
                            <div>
                                <h2 className="font-bold text-gray-800">Check Availability</h2>
                                <p className="text-gray-600 text-sm">
                                    Plan your perfect trip with ease! Check tour availability and secure your spot for an unforgettable European adventure. Book now before it’s too late!
                                </p>
                            </div>
                        </div>

                        {/* Let’s Go */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-cyan-800 p-3 rounded-md text-white text-xl">
                                <FaPlaneDeparture />
                            </div>
                            <div>
                                <h2 className="font-bold text-gray-800">Let’s Go</h2>
                                <p className="text-gray-600 text-sm">
                                    Your next adventure starts now! Explore, experience, and enjoy the best of Europe. Book your tour today!
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PopularTour;
