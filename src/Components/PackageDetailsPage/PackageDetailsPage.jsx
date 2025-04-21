import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from 'axios';
import Swal from 'sweetalert2';

const PackageDetailsPage = () => {
    const {id} = useParams()
    const axiosPublic = useAxiosPublic()
    console.log(id)
    
    const { data: tourData = [], isLoading, refetch } = useQuery({
        queryKey: ['package',id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/packages/${id}`);
            return res.data
        }
    })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        confirmEmail: '',
        phone: '',
        date: '',
        tickets: 1,
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    const bookingData = {
      ...formData,
      packageId: tourData._id,
      packageTitle: tourData.packageTitle,
      price: tourData.price,
      
    };
    console.log(bookingData)
    try {
      await axiosPublic.post('/bookings', bookingData);
      Swal.fire('Booking successful!');
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Booking failed. Please try again.');
    }
      };
    return (
        <div className="flex flex-col md:flex-row bg-white shadow-lg max-w-6xl mx-auto p-6 rounded-xl py-10">
      {/* Left Section */}

      <div className="md:w-2/3 space-y-4 pr-4">
      <Swiper
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="mySwiper rounded-lg overflow-hidden"
        >
          {tourData.images?.map((image, idx) => (
            <SwiperSlide key={idx}>
              <img src={image} alt={`Slide ${idx + 1}`} className="w-full h-[400px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        <h2 className="text-4xl font-bold text-blue-900">
          {tourData.packageTitle}
          <span className="text-orange-700 text-xl font-normal"> {tourData.price} {tourData.currency} / {tourData.per}</span>
        </h2>
        <div className="flex items-center text-yellow-500 text-base space-x-1">
          <span>★★★★★</span>
          <span className="text-gray-500">({tourData.reviews})</span>
        </div>
        <p className="text-base text-gray-600">{tourData.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 text-base gap-2">
          <p><span className="font-semibold text-gray-700">Destination</span>: {tourData.destination}</p>
          <p><span className="font-semibold text-gray-700">Departure</span>: {tourData.departure}</p>
          <p><span className="font-semibold text-gray-700">Departure Time</span>: {tourData.departureTime}</p>
          <p><span className="font-semibold text-gray-700">Return Time</span>: {tourData.returnTime}</p>
          <p><span className="font-semibold text-gray-700">Dress Code</span>: {tourData.dressCode}</p>
          <p>
            <span className="font-semibold text-gray-700">Not Included</span>: {tourData.notIncluded?.map(item => `❌ ${item}`).join(", ")}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Included</span>: {tourData.included?.map(item => `✅ ${item}`).join(", ")}
          </p>
        </div>
      </div>

      {/* Right Section - Booking Form */}
      <div className="md:w-1/3 bg-gray-100 p-6 rounded-xl mt-6 md:mt-0">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Book This Tour</h3>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          <input name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} type="email" placeholder="Confirm Email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          <input name="date" value={formData.date} onChange={handleChange} type="text" placeholder="dd-mm-yy" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          <input name="tickets" value={formData.tickets} onChange={handleChange} type="number" placeholder="Number of ticket" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="w-full px-3 py-2 border border-gray-300 rounded-md" rows="3"></textarea>
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-semibold">Book Now</button>
        </form>
      </div>
    </div>
    );
};

export default PackageDetailsPage;