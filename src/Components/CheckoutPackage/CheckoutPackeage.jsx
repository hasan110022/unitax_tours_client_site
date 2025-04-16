import React from 'react';
import { BsWatch } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { IoPersonAdd } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const CheckoutPackage = () => {
    return (
        <div className="mt-10 px-4 bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 py-12">
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
            <div className="flex md:p-6 mt-4   flex-col lg:flex-row items-center md:mt-10 space-y-6 lg:space-y-0 lg:space-x-6 mx-auto">
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
                        Experience the great holiday on the beach!
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Batu Ferringhi Beach, Langkawi Beaches (Pantai Cenang, Pantai Tengah),
                        Cherating Beach, Redang Island, Tioman Island, Perhentian Islands,
                        Pangkor Island, Tanjung Aru Beach, Damai Beach, Port Dickson Beach.
                    </p>

                    <div className="flex items-center justify-between bg-black text-white py-2 px-4 rounded-full">
                        {/* Duration */}
                        <div className="flex items-center space-x-2">
                            <BsWatch className="text-red-700" size={20} />
                            <span>7D/6N</span>
                        </div>
                        {/* Pax */}
                        <div className="flex items-center space-x-2">
                            <IoPersonAdd className="text-red-700" size={20} />
                            <span>Pax: 10</span>
                        </div>
                        {/* Location */}
                        <div className="flex items-center space-x-2">
                            <FaLocationDot className="text-red-700" size={20} />
                            <span>Malaysia</span>
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
                        <h1 className="text-2xl font-bold">$800</h1>
                        <p>/Per person</p>
                    </div>

                    {/* Booking Button */}
                    <div className="text-center">
                        <Link to='/cardthree'><button className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg hover:scale-105 hover:shadow-lg transition transform duration-300">
                            Book Now
                        </button></Link>
                    </div>
                </div>
            </div>

            {/* content-2 */}
            <div className="flex md:p-6 mt-4   flex-col lg:flex-row items-center md:mt-10 space-y-6 lg:space-y-0 lg:space-x-6 mx-auto">
                {/* Image Section */}
                <div className="w-full lg:w-1/3 h-full flex items-center justify-center">
                    <img
                        src="https://i.ibb.co.com/NdmCsSB9/Screenshot-2025-03-07-041715.png"
                        alt="Travel Package"
                        className="rounded-xl shadow-lg w-full h-[350px] object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/3 h-[350px] flex flex-col justify-between border-2 p-6 shadow-xl rounded-xl space-y-4 bg-white">
                    <h1 className="text-2xl uppercase font-bold text-[#181E4B]">
                    Summer Holiday To The Oxolotan River
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                    This river is perfect for taking a quiet, leisurely float downstream. Meandering through lush tropical forests and picturesque canyons, it is easy to forget the world and just relax.
                    </p>

                    <div className="flex items-center justify-between bg-black text-white py-2 px-4 rounded-full">
                        {/* Duration */}
                        <div className="flex items-center space-x-2">
                            <BsWatch className="text-red-700" size={20} />
                            <span>7D/6N</span>
                        </div>
                        {/* Pax */}
                        <div className="flex items-center space-x-2">
                            <IoPersonAdd className="text-red-700" size={20} />
                            <span>Pax: 10</span>
                        </div>
                        {/* Location */}
                        <div className="flex items-center space-x-2">
                            <FaLocationDot className="text-red-700" size={20} />
                            <span>Maxico</span>
                        </div>
                    </div>
                </div>

                {/* Card Section */}
                <div className="w-full lg:w-1/3 h-[350px] flex flex-col justify-between bg-[#181E4B] text-white p-6 rounded-lg shadow-lg space-y-4 transform hover:scale-105 transition-transform duration-300">
                    {/* Reviews */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-sm">(20 reviews)</h1>
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">$1000</h1>
                        <p>/Per person</p>
                    </div>

                    {/* Booking Button */}
                    <div className="text-center">
                        <Link to='/cardtwo'><button className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg hover:scale-105 hover:shadow-lg transition transform duration-300">
                            Book Now
                        </button></Link>
                    </div>
                </div>
            </div>

            {/* content-3 */}
            <div className="flex md:p-6 mt-4   flex-col lg:flex-row items-center md:mt-10 space-y-6 lg:space-y-0 lg:space-x-6 mx-auto">
                {/* Image Section */}
                <div className="w-full lg:w-1/3 h-full flex items-center justify-center">
                    <img
                        src="https://i.ibb.co.com/wFP1rKSK/Screenshot-2025-03-07-042803.png"
                        alt="Travel Package"
                        className="rounded-xl shadow-lg w-full h-[350px] object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/3 h-[350px] flex flex-col justify-between border-2 p-6 shadow-xl rounded-xl space-y-4 bg-white">
                    <h1 className="text-2xl font-bold text-[#181E4B] uppercase">
                    Santorini Island's Weekend Vacation
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                    Oia Fira, Kamari Beach, Red Beach, Perissa Beach, Akrotiri Archaeological Site, Pyrgos, Santo Winery, Nea Kameni Island, Amoudi Bay
                    </p>

                    <div className="flex items-center justify-between bg-black text-white py-2 px-4 rounded-full">
                        {/* Duration */}
                        <div className="flex items-center space-x-2">
                            <BsWatch className="text-red-700" size={20} />
                            <span>7D/6N</span>
                        </div>
                        {/* Pax */}
                        <div className="flex items-center space-x-2">
                            <IoPersonAdd className="text-red-700" size={20} />
                            <span>Pax: 30</span>
                        </div>
                        {/* Location */}
                        <div className="flex items-center space-x-2">
                            <FaLocationDot className="text-red-700" size={20} />
                            <span>Maxico</span>
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
                        <h1 className="text-2xl font-bold">$1500</h1>
                        <p>/Per person</p>
                    </div>

                    {/* Booking Button */}
                    <div className="text-center">
                       <Link to='/cardone'>
                       <button className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg hover:scale-105 hover:shadow-lg transition transform duration-300">
                            Book Now
                        </button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPackage;
