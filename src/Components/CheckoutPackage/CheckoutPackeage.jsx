import React, { useState } from 'react';
import { BsWatch } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { IoPersonAdd } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import usePackages from '../../Hooks/usePackages';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const CheckoutPackage = () => {
    const [packages,setpackages] = useState([]) 
    const axiosPublic = useAxiosPublic()
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/packages`);
            return Array.isArray(res.data) ? res.data.slice(0, 3) : []
        }
    })
    console.log(data)

    return (
        <div className="mt-10 w-[90%] m-auto px-4 bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 py-12">
            {/* Header */}
            <div className="text-center space-y-5 max-w-2xl mx-auto">
                <h1 className="uppercase font-extrabold text-2xl md:text-5xl text-[#181E4B]">
                    Popular Packages
                </h1>
                <h2 className="uppercase text-sm md:text-2xl text-gray-600 tracking-wide">
                    Checkout our Packages
                </h2>
                <p className="text-gray-500 text-sm md:text-lg">
                    Check out our exclusive travel packages and embark on your dream <br className='max-sm:hidden' /> journey today!
                </p>
            </div>

            {/* Content */}
            {
                data?.map((item, index)=>  <div className="flex md:p-6 mt-4   flex-col lg:flex-row items-center md:mt-10 space-y-6 lg:space-y-0 lg:space-x-6 mx-auto">
                {/* Image Section */}
                <div className="w-full lg:w-1/3 h-full flex items-center justify-center">
                    <img
                        src="https://i.ibb.co/nMwmq4sj/Screenshot-2025-03-07-030329.png"
                        alt="Travel Package"
                        className="rounded-xl shadow-lg w-full h-[350px] object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/3 h-[350px] flex flex-col justify-between border-2 p-6 shadow-xl rounded-xl space-y-4 bg-white">
                    <h1 className="text-2xl font-bold text-[#181E4B] uppercase">
                        {item?.departure}
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                       {item?.description}
                    </p>

                    <div className="flex items-center justify-between bg-black text-white py-2 px-4 rounded-full">
                        {/* Duration */}
                        <div className="flex items-center space-x-2">
                            <BsWatch className="text-red-700" size={20} />
                            <span>{item?.departureTime}</span>
                        </div>
                        {/* Pax */}
                        <div className="flex items-center space-x-2">
                            <IoPersonAdd className="text-red-700" size={20} />
                            <span>Pax: 10</span>
                        </div>
                        {/* Location */}
                        <div className="flex items-center space-x-2">
                            <FaLocationDot className="text-red-700" size={20} />
                            <span>{item?.destination}</span>
                        </div>
                    </div>
                </div>

                {/* Card Section */}
                <div className="w-full lg:w-1/3 h-[350px] flex flex-col justify-between bg-[#181E4B] text-white p-6 rounded-lg shadow-lg space-y-4 transform hover:scale-105 transition-transform duration-300">
                    {/* Reviews */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-sm">(25 reviews)</h1>
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">{item?.price}</h1>
                        <p>/Per person</p>
                    </div>

                    {/* Booking Button */}
                    <div className="text-center">
                        <Link to='/cardthree'><button className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg hover:scale-105 hover:shadow-lg transition transform duration-300">
                            Book Now
                        </button></Link>
                    </div>
                </div>
            </div>)
            }
          

    
        </div>
    );
};

export default CheckoutPackage;
