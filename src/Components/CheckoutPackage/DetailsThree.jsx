import React, { useState, useEffect } from 'react';
import { FaEye, FaLock } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';

const DetailsThree = () => {
    const [timeLeft, setTimeLeft] = useState(10 * 60);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {

        if (timeLeft === 0) return;

        const interval = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);


        return () => clearInterval(interval);
    }, [timeLeft]);


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 7000);

        return () => clearTimeout(timer);
    }, []);


    const closeModal = () => {
        setShowModal(false);
    };


    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const [onlineCount, setOnlineCount] = useState(1);


    useEffect(() => {
        const interval = setInterval(() => {
            setOnlineCount(prevCount => prevCount + 1);
        }, 120000);
        return () => clearInterval(interval);
    }, []);




    return (
        <div className='lg:w-[1100px] mx-auto font-poppins'>
            <div>
                <img className='mx-auto' src="https://img.freepik.com/free-vector/payment-information-concept-illustration_114360-2886.jpg?t=st=1741433227~exp=1741436827~hmac=06ad78d4c9ec91cb97755e8039aba9286d40dd439a6be131dd55ecacf61dcff1&w=826" alt="Order Countdown" />
            </div>

            <div className='justify-center md:text-3xl max-sm:text-xl mt-2 flex items-center'>
                <div className='flex items-center font-bold gap-2'>
                    <h1>Your order is reserved for:</h1>
                    <h2 className="text-2xl text-red-600 font-bold">
                        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </h2>
                </div>
            </div>

            <div className='flex items-center justify-center mt-5 gap-5'>
                <FaLock></FaLock>
                <h1 className='font-bold'>secure checkout</h1>
            </div>

            <div className="flex max-sm:flex-col max-sm:p-5 gap-6 mt-2 md:p-3">


                {/* Right Section */}
                <div className="flex-1">
                    <div className="border-2 border-black p-6 rounded-lg shadow-md max-w-lg">
                        <h1 className="text-2xl font-semibold text-start text-gray-800 mb-4">Customer Information</h1>

                        <form>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                                <p>To receive an email order confirmation</p>
                            </div>
                        </form>
                    </div>

                    <div className="border-2 border-black p-6 rounded-lg shadow-md max-w-lg mt-6">
                        <h1 className="text-2xl font-semibold text-start text-gray-800 mb-1">Payment Information</h1>
                        <p>All transactions are secure and encrypted.</p>

                        <div className="flex border-2 border-black p-3 -mx-6 border-opacity-30 rounded-lg shadow-md max-w-lg mt-6">
                            <input type="radio" name="" id="" />
                            <img
                                className="w-36"
                                src="https://i.ibb.co.com/d0Q3GJhh/Screenshot-2025-03-05-211248.png"
                                alt=""
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between -mx-3">
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="" id="" />
                                    <h1 className="font-bold text-xl">Credit Card</h1>
                                </div>
                                <img
                                    className="w-52"
                                    src="https://i.ibb.co.com/Wpdg3vNq/Screenshot-2025-03-05-211724.png"
                                    alt=""
                                />
                            </div>

                            <div>
                                <form>
                                    <div className="mb-4 -mx-3">
                                        <div className="flex items-center justify-between relative">
                                            {/* Icon */}
                                            <IoIosLock className="absolute left-3 text-gray-400" />

                                            {/* Input Field */}
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Card Number"
                                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 pl-10" // Added padding to the left to make space for the icon
                                                required
                                            />
                                        </div>
                                        <p>Card Number is required</p>
                                    </div>
                                </form>
                            </div>

                            <div className="flex gap-4 mt-2">
                                {/* Expiration Date */}
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 pl-10"
                                        placeholder="Expiration Date"
                                    />
                                    <p className="text-sm text-red-500">Expiration Date is invalid</p>
                                </div>

                                {/* Security Code */}
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 pl-10"
                                        placeholder="Security Code"
                                    />
                                    <p className="text-sm text-red-500">Security Code is required</p>
                                </div>
                            </div>

                            <div className="-mx-3 mt-3">
                                <input
                                    type="text"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 pl-10"
                                    placeholder="Cardholder Name"
                                />
                                <p>Cardholder Name is required</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <div className="border-2 border-black p-6 rounded-lg shadow-md max-w-lg">
                            <h1 className="text-2xl font-semibold text-start text-gray-800 mb-4">Shipping Information</h1>

                            <form>
                                <div className="mb-4">
                                    <div className="flex gap-4">
                                        {/* Country Select Field */}
                                        <div className="flex-1">
                                            <select
                                                name="country"
                                                id="country"
                                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                            >
                                                <option value="">Select Country</option>
                                                <option value="us">United States</option>
                                                <option value="ca">Canada</option>
                                                <option value="gb">United Kingdom</option>
                                                <option value="fr">France</option>
                                                <option value="de">Germany</option>
                                                <option value="in">India</option>
                                                <option value="jp">Japan</option>
                                                <option value="au">Australia</option>
                                                <option value="nz">New Zealand</option>
                                                {/* Add more countries as needed */}
                                            </select>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-sm">To receive an email order confirmation</p>
                                </div>

                                <input
                                    type="text"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 pl-10"
                                    placeholder="Full Name*"
                                />
                                <input
                                    type="text"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 pl-10"
                                    placeholder="Street Address*"
                                />
                                <input
                                    type="text"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 pl-10"
                                    placeholder="Apt/Suite/Other*"
                                />
                            </form>

                            <div className="flex gap-4 mt-2">
                                {/* Zip Code */}
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 pl-4"
                                        placeholder="Zip code*"
                                    />
                                </div>

                                {/* City */}
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 pl-4"
                                        placeholder="City*"
                                    />
                                </div>

                                {/* State */}
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 pl-4"
                                        placeholder="State*"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                className="w-[510px]"
                                src="https://img.freepik.com/free-vector/vacation-holidays-background-with-realistic-globe-suitcase-photo-camera_1284-10476.jpg?t=st=1741433346~exp=1741436946~hmac=64af4899d276e0e9adc1feae7f6f5cc8be3ee6b7ffc1faa22defe323a16807c9&w=826"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                {/* right Section */}
                <div className="flex-1 border-2 border-black border-opacity-20 p-3 rounded-lg shadow-md max-w-lg">
                    <div>
                        <h1 className="text-center max-sm:flex flex space-x-2  items-center justify-center text-purple-400">
                            <span className="flex max-sm:flex items-center justify-center ">
                                <FaEye /> <span>{onlineCount}</span>
                            </span>
                            <p> <span className='font-bold'> People</span> are online now on this page</p>
                        </h1>
                    </div>

                    <div>
                        <img src="https://i.ibb.co.com/3mQDp9KN/Screenshot-2025-03-08-173242.png" alt="" />
                    </div>
                    

                    <div>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-xl max-sm:text-sm'>Normaly</h1>
                            <p className="line-through text-red-500 max-sm:text-xs">$197</p>

                        </div>

                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-xl max-sm:text-sm'>Coupon: <span className='underline decoration-red-700 text-red-500'>75%OFF</span></h1>
                            <p className=" text-red-500 max-sm:text-xs">-$138</p>

                        </div>

                        <div className="divider"></div>

                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-xl max-sm:text-sm'>TODAY'S PRICE</h1>
                            <p className=" text-black font-bold text-xl max-sm:text-xs ">$59</p>

                        </div>

                        <div className='flex items-center justify-between mt-6'>
                            <h1 className=' text-lg max-sm:text-sm'>Subtotal

                            </h1>
                            <p className=" text-black  text-sm max-sm:text-xs "> $59.00</p>

                        </div>

                        <div className='flex items-center justify-between mt-1'>
                            <h1 className=' text-lg max-sm:text-sm'>Shipping & Handling

                            </h1>
                            <p className=" text-black  text-sm max-sm:text-xs "> $9.95</p>

                        </div>
                        <div className='flex items-center justify-between mt-1'>
                            <h1 className=' text-lg max-sm:text-sm'>Tax
                            </h1>
                            <p className=" text-black  text-sm max-sm:text-xs "> $0.00</p>
                        </div>
                        <div className='flex items-center justify-between mt-1'>
                            <h1 className=' text-lg max-sm:text-sm'>TOTAL
                            </h1>
                            <p className=" text-black  text-sm max-sm:text-xs ">$68.95</p>
                        </div>

                        <div className='text-center mt-5 text-sm '>
                            <p>By clicking Pay Now below, I agree to the <span className='link'>Terms of Sale</span>.</p>
                        </div>

                        <div className='bg-yellow-300 text-black text-center p-3 rounded-xl border-blue-700 mt-2 border-2'>
                            <button className='text-xl font-bold'> Pay Now</button>
                        </div>

                        <div className='mt-8 w-full '>
                            <img src="https://i.ibb.co.com/g80qwp1/Screenshot-2025-03-05-230619.png" alt="" />
                        </div>

                        <div className='text-center'>
                            <h1 className='max-sm:text-sm mb-2'><span className='font-bold text-purple-400'>You've made a great choice!</span> <span className='font-bold'>Order now</span> before someone else grabs your discounted bottles from you!</h1>
                        </div>

                        <div>
                            <img
                                className="w-[510px]"
                                src="https://img.freepik.com/free-photo/rear-view-back-young-asian-hiking-man-standing-riseup-hands-with-happy-peak-rocky-mountain-copy-space_1150-57186.jpg?t=st=1741433640~exp=1741437240~hmac=6f26131927f7e72f3de195b339248cda538a0686952e250de5b3bdb52d508a91&w=1380"
                                alt=""
                            />
                        </div>

                    </div>
                </div>
            </div>


            {/* last section */}
            <div className='max-sm:p-5 md:p-4'>
                <div className='flex gap-20 max-sm:flex-col mt-20'>
                    <div className='w-full sm:w-[500px] mx-auto'>
                        <span className='font-bold text-gray-400'>ClickBank Guarantee</span>
                        <p className='text-sm'>ClickBank will allow for the return or replacement of any product within 90 days from the date of purchase. For more details see our return policy.
                            <span className='font-bold text-gray-400'> Your purchase will appear on your bank statement under the name CLKBANK*Unitax Tour</span>.
                        </p>
                    </div>

                    <div className='w-full sm:w-[500px] mx-auto'>
                        <span className='font-bold text-gray-400'>Need Help?</span>
                        <p>Visit our <span className='underline'>Customer Support page</span>. Or call us at <span className='underline'>1-800-390-6035</span>.</p>
                    </div>

                    <div className='w-full sm:w-[500px] mx-auto'>
                        <img src="https://i.ibb.co.com/zWNGkFc0/Screenshot-2025-03-05-232037.png" alt="" className='w-full h-auto' />
                    </div>
                </div>

                <div className='text-white bg-blue-900 py-5 mt-3'>
                    <div className='text-center text-sm'>
                        <h1>Affiliate ID = 83d81fphys3rbo6gwn0hc83t6m</h1>
                        <p>Copyright 2025 © Click Sales Inc. ClickBank / 1444 S. Entertainment Ave / Suite 410 / Boise ID 83709.</p>
                    </div>
                </div>
            </div>





            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
                    <div className='bg-red-700 p-12 rounded-xl shadow-lg max-w-lg w-full'>
                        <h1 className='text-center text-white text-lg max-sm:text-xs font-semibold'>
                            <span className='underline decoration-yellow-300'>WARNING</span>: Closing the page will void your <br /> New Customer's Discount Coupon
                        </h1>
                        <p className='mt-4 text-center text-white text-lg max-sm:text-xs'>
                            Your reserved bottles of Unitax Tour will be given to someone else. <span className='underline decoration-white'>This action is final.</span>
                        </p>

                        <div className="bg-purple-200 bg-opacity-55 mt-6 py-3 rounded-lg">
                            <h2 className='text-center text-gray-700 text-lg max-sm:text-xs font-bold'>
                                Click below to complete your purchase
                            </h2>
                        </div>

                        <div className="mt-8 flex justify-center gap-4">
                            <button className='bg-yellow-400 text-black max-sm:text-xs text-sm py-1  rounded-lg shadow-md hover:bg-yellow-500 transition duration-300'>
                                Yes! I accept the discount! Give me my Unitax Tour!
                            </button>

                            <button
                                onClick={closeModal}
                                className='bg-gray-700 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300'>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default DetailsThree;
