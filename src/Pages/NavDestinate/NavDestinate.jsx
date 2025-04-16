import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NavCard from './NavCard';

const NavDestinate = () => {
    const destinations = useLoaderData();
    console.log(destinations);

    return (
        <div>
    
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    // Fix the variable name to match
                    destinations.map(destination => (
                        <NavCard key={destination._id} destination={destination} />
                    ))
                }
            </div>
        </div>
    );
};

export default NavDestinate;
