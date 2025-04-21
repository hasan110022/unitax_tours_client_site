import React from 'react';
import {  useNavigate } from 'react-router-dom'; // Import useNavigate
import Swal from 'sweetalert2';
import usePackages from '../../Hooks/usePackages';
import { FaHiking, FaSuitcaseRolling, FaSwatchbook } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';


export const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="flex flex-col items-center text-center max-w-xs px-4 border-r last:border-none">
        <div className="bg-orange-100 rounded-full w-14 h-14 flex items-center justify-center mb-3">
          {icon}
        </div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    );
  };
const DestinationForm = () => {
    const [packages] = usePackages()
    const features = [
        {
          icon: <FaHiking className="text-orange-500 text-2xl" />,
          title: 'Friendly Guide',
          description: 'There are many variations of passages of lorem Ipsum.',
        },
        {
          icon: <FaSuitcaseRolling className="text-orange-500 text-2xl" />,
          title: 'Safety Travel',
          description: 'There are many variations of passages of lorem Ipsum.',
        },
        {
          icon: <FaSwatchbook className="text-orange-500 text-2xl" />,
          title: 'Secure Booking',
          description: 'Enjoy hassle-free planning with guaranteed reservations.',
        },
        {
          icon: <BiSupport className="text-orange-500 text-2xl" />,
          title: '24/7 Support',
          description: 'We’re here anytime to help make your trip smooth and safe.',
        },
      ];
      
      
  
    
    // Initialize navigate function
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const destination = form.destination.value;
        const image = form.image.value;
        const checkdate = form.checkdate.value;
        const checkoutdate = form.checkoutdate.value;

        const newDestination = { destination, image, checkdate, checkoutdate };
        console.log(newDestination);

        // // Send data to the server
        // fetch('http://localhost:3000/destination', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(newDestination),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire("Data sent to Destination Page from Navbar!");

        //             navigate('/destination');
        //         }
        //     });
    };

    return (
        <form className='max-w-screen-xl relative -top-20 mx-auto' onSubmit={handleSubmit}>
            <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5 mx-auto border-2 bg-base-100 p-10">
            {features.map((feature, idx) => (
        <FeatureCard
          key={idx}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
                
                
                {/* <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="destination">
                        Enter Destination
                    </label>
                    <input
                        type="text"
                        id="destination"
                        name="destination"
                        placeholder="Enter destination name"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="image">
                        Image
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder="Enter destination image URL"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="checkdate">
                        Check-in Date
                    </label>
                    <input
                        type="date"
                        id="checkdate"
                        name="checkdate"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="checkoutdate">
                        Check-out Date
                    </label>
                    <input
                        type="date"
                        id="checkoutdate"
                        name="checkoutdate"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div> */}

                {/* <button className="btn bg-yellow-400 text-white mt-6">Submit</button> */}
            </div>

            
        </form>
    );
};

export default DestinationForm;
