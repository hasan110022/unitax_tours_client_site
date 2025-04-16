import React from 'react';
import Swal from 'sweetalert2';

const AddTour = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const countryLogo = form.countryLogo.value;
        const day = form.day.value;
        const people = form.people.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const price = form.price.value; // Fixed: replaced 'number' with 'price'
        const description = form.description.value;

        const newTour = { image, countryLogo, day, people, countryName, location, price, description };
        console.log(newTour);

        // send data to the server
        fetch('http://localhost:5000/tour',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newTour)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire("Data send to MongoDB!");
            }
        })
    }

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Add New Tour</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                    <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">Image URL</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder="Enter image URL"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="countryLogo" className="block text-gray-700 font-semibold mb-2">Country Logo URL</label>
                    <input
                        type="text"
                        id="countryLogo"
                        name="countryLogo"
                        placeholder="Enter country logo URL"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="day" className="block text-gray-700 font-semibold mb-2">Day</label>
                    <input
                        type="number"
                        id="day"
                        name="day"
                        placeholder="Enter number of days"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="people" className="block text-gray-700 font-semibold mb-2">Number of People</label>
                    <input
                        type="number"
                        id="people"
                        name="people"
                        placeholder="Enter number of people"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="countryName" className="block text-gray-700 font-semibold mb-2">Country Name</label>
                    <input
                        type="text"
                        id="countryName"
                        name="countryName"
                        placeholder="Enter country name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Enter location"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Enter price"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Enter description"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                </div>

                <button type="submit" className="w-full py-3 mt-6 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                    Add Tour
                </button>
            </form>
        </div>
    );
};

export default AddTour;
