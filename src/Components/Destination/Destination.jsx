import React from 'react';
import usePackages from '../../Hooks/usePackages';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Destination = () => {
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
        <div className="p-5  mx-auto sm:p-4">
            {/* Header Section */}
            <div className="text-center mt-4">
                <h1 className="uppercase text-[#181E4B] font-bold md:text-4xl text-2xl">
                    Popular Destination
                </h1>
            </div>

            {/* Destination Images */}
            <div className="flex flex-wrap gap-4 justify-center items-center mt-6 max-sm:gap-2">
              
                {
                    data?.map((item, index)=><Link to={`/packages/${item?._id}`} className="w-full md:w-[30%] sm:w-[48%] max-sm:w-full border h-[300px] border-gray-300 rounded-2xl shadow-sm">
                    <img
                        src={item?.images[1]}
                        alt="Destination 1"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <p className='text-lg text-center font-semibold px-3 py-2'>{item?.destination}</p>
                </Link>)
                }
      
              
              
            </div>
        </div>
    );
};

export default Destination;
