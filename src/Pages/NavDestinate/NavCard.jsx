import React from 'react';

const NavCard = ({ destination }) => {
    const { destination: destinationName, image, checkdate, checkoutdate } = destination;

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="card  bg-base-100 w-96 shadow-sm">
                <figure>
                    {/* Use dynamic image URL from the destination */}
                    <img
                        src={image} 
                        alt={destinationName} 
                        className="w-full h-48 object-cover"
                    />
                </figure>
                <div className="card-body">
                    {/* Display dynamic title and details */}
                    <h2 className="card-title">{destinationName}</h2>
                    <p>Check-in Date: {checkdate}</p>
                    <p>Check-out Date: {checkoutdate}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default NavCard;
