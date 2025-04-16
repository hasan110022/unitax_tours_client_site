import React from 'react';
import { FaCalendarAlt, FaRegTrashAlt, FaUserFriends } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import usePackages from '../../../../Hooks/usePackages';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

// const packages = [
//   {
//     country: 'Switzerland',
//     location: 'Europe',
//     days: '9 Days',
//     people: '20 People Going',
//     price: '1,000 $',
//     oldPrice: '1,500 $',
//     description:
//       'Switzerland, the heart of Europe, is a paradise for nature lovers, adventure seekers, and culture enthusiasts. With its breathtaking Alps, crystal-clear lakes, charming villages, and vibrant cities, Switzerland offers a travel experience like no other.',
//     rating: 5,
//     flag: 'https://flagcdn.com/ch.svg',
//     image:
//       'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd4?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     country: 'Amazon',
//     location: 'Brazil',
//     days: '9 Days',
//     people: '25 People Going',
//     price: '1,223 $',
//     oldPrice: '1,500 $',
//     description:
//       'Brazil, the land of samba, sun-kissed beaches, and vibrant culture, offers an unforgettable travel experience. From the iconic Christ the Redeemer to the breathtaking Amazon Rainforest, Brazil is a paradise for adventure seekers, nature lovers, and culture enthusiasts.',
//     rating: 5,
//     flag: 'https://flagcdn.com/br.svg',
//     image:
//       'https://images.unsplash.com/photo-1543872084-c7bd3822856f?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     country: 'Giza',
//     location: 'Egypt',
//     days: '9 Days',
//     people: '150 People Going',
//     price: '1,200 $',
//     oldPrice: '1,500 $',
//     description:
//       'Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum ullam molestias mollitia et corporis praesentium a laudantium internos.',
//     rating: 5,
//     flag: 'https://flagcdn.com/eg.svg',
//     image:
//       'https://images.unsplash.com/photo-1548792213-76bc3997d9ea?auto=format&fit=crop&w=800&q=80',
//   },
// ];






const AllPackages = () => {
    const axiosSecure = useAxiosSecure()
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            console.log(result)
            if (result.isConfirmed) {
                axiosSecure.delete(`/packages/${id}`).then(res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Product Deleted Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                });
            }
        });
    };
    const [packages, isLoading, refetch] = usePackages()
    console.log(packages)
    
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
            <FaRegTrashAlt onClick={()=>handleDelete(tour?._id)} className='text-red-600 font-semibold text-3xl' />
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

export default AllPackages;
