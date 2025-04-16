import React, { useState, useEffect, useRef } from 'react';

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
        <div>
            <div className="max-w-7xl justify-end max-sm:mt-96 px-4 sm:px-6 lg:px-8 py-12">
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
            <div className='mt-32 my-5 px-32 flex items-center justify-end'>
                <img src="https://i.ibb.co.com/C3qnr4Hc/Group-1000001805.png" alt="" />
            </div>
        </div>
    );
};

export default PopularTour;
