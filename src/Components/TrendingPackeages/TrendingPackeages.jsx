import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PackeagesCard from './PackeagesCard';
import usePackages from '../../Hooks/usePackages';
import { FaCalendarAlt, FaRegTrashAlt, FaUserFriends } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const TrendingPackeages = () => {
    const tours = useLoaderData();
    const axiosPublic = useAxiosPublic()
    const { data: packages = [], isLoading, refetch } = useQuery({
            queryKey: ['packages'],
            queryFn: async () => {
                const res = await axiosPublic.get(`/packages`);
                return res.data
            }
        })
    
    const TourCard = ({ tour }) => (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img src={tour?.images[0]} alt={tour?.country} className="w-full h-56 object-cover" />
            {/* <img
              src={tour.flag}
              alt="flag"
              className="w-10 h-10 absolute bottom-2 left-2 rounded-full border-2 border-white"
            /> */}
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between text-gray-500 text-sm">
              <div className="flex items-center gap-1">
                <FaCalendarAlt /> {tour?.days? tour?.days : "april 2025"}
              </div>
              <div className="flex items-center gap-1">
                <FaUserFriends /> {tour?.people ? tour?.people : "25"}
              </div>
            </div>
            <h3 className="text-xl font-bold mt-2">{tour.destination}</h3>
            <p className="flex items-center text-sm text-orange-600 font-medium mt-1">
              <IoLocationSharp className="mr-1" /> {tour.destination}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xl font-semibold text-gray-900">{tour.price}</span>
            </div>
            <p className="text-gray-600 text-sm mt-2 mb-3 line-clamp-4">{tour.description}</p>
            <div className='flex items-center gap-8'>
      
            <button className="bg-indigo-900 text-white px-4 py-2 rounded-md hover:bg-indigo-800 transition duration-300">
              Explore Now
            </button>
            <div>
            </div>
            </div>
          </div>
        </div>
      );

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-900">
        Our Trending Tour Packages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages?.map((pkg, i) => (
          <TourCard key={i} tour={pkg} />
        ))}
      </div>
    </div>
    );
};

export default TrendingPackeages;