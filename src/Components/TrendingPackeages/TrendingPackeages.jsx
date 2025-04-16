import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PackeagesCard from './PackeagesCard';

const TrendingPackeages = () => {
    const tours = useLoaderData();
    console.log(tours)

    return (
        <div className='mt-12 my-5 md:w-full md:p-10 mx-auto'>
            <h1 className='text-center font-bold md:text-4xl text-2xl '>Our Trending Tour <br /> Packeages</h1>
            <h1>Data :{tours?.length}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-sm:p-3'>
            {
                tours?.map(tour => <PackeagesCard key={tour._id} tour={tour}></PackeagesCard>)
            }
            </div>
        </div>
    );
};

export default TrendingPackeages;