import React, { useState } from 'react';
import axios from 'axios';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddPackages = () => {
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    packageTitle: '',
    price: '',
    currency: 'USD',
    per: 'Couple',
    rating: '',
    reviews: '',
    description: '',
    destination: '',
    departure: '',
    departureTime: '',
    returnTime: '',
    dressCode: '',
    notIncluded: [],
    included: [],
  });

  const [includedItem, setIncludedItem] = useState('');
  const [notIncludedItem, setNotIncludedItem] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addToArray = (key, value) => {
    if (!value.trim()) return;
    setFormData((prev) => ({
      ...prev,
      [key]: [...prev[key], value.trim()],
    }));
    if (key === 'included') setIncludedItem('');
    if (key === 'notIncluded') setNotIncludedItem('');
  };

  const removeFromArray = (key, index) => {
    const updated = [...formData[key]];
    updated.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      [key]: updated,
    }));
  };

  const handleImageUpload = async () => {
    const uploadedUrls = [];
    setUploading(true);

    for (const file of imageFiles) {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'unitaxtour1100');
      data.append('cloud_name', 'dk95heui2');

      try {
        const res = await axios.post(
          'https://api.cloudinary.com/v1_1/dk95heui2/image/upload',
          data
        );
        uploadedUrls.push(res.data.secure_url);
      } catch (err) {
        console.error('Image upload failed:', err);
      }
    }

    setUploading(false);
    return uploadedUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let uploadedUrls = [];
    if (imageFiles.length > 0) {
      uploadedUrls = await handleImageUpload();
    }

    const dataToSend = {
      ...formData,
      images: uploadedUrls,
    };

    try {
      const response = await axiosSecure.post('/packages', dataToSend);
      if (response.data.insertedId) {
        Swal.fire({
          title: "Package added successfully",
          icon: "success",
          draggable: true
        });
        // Reset
        setFormData({
          packageTitle: '',
          price: '',
          currency: 'USD',
          per: 'Couple',
          rating: '',
          reviews: '',
          description: '',
          destination: '',
          departure: '',
          departureTime: '',
          returnTime: '',
          dressCode: '',
          notIncluded: [],
          included: [],
        });
        setImageFiles([]);
        setIncludedItem('');
        setNotIncludedItem('');
      }
    } catch (err) {
      console.error('Submit error:', err);
    }
  };

  const handleRemoveImage = (index) => {
    const newFiles = [...imageFiles];
    newFiles.splice(index, 1);
    setImageFiles(newFiles);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Create Tour Package</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="packageTitle" placeholder="Package Title" onChange={handleInputChange} className="input input-bordered w-full" />
        <input type="number" name="price" placeholder="Price" onChange={handleInputChange} className="input input-bordered w-full" />
        <input type="text" name="rating" placeholder="Rating" onChange={handleInputChange} className="input input-bordered w-full" />
        <input type="text" name="reviews" placeholder="Reviews (e.g. 2.8k)" onChange={handleInputChange} className="input input-bordered w-full" />
        <textarea name="description" placeholder="Description" onChange={handleInputChange} className="textarea textarea-bordered w-full" />
        <input type="text" name="destination" placeholder="Destination" onChange={handleInputChange} className="input input-bordered w-full" />
        <input type="text" name="departure" placeholder="Departure" onChange={handleInputChange} className="input input-bordered w-full" />
        <input type="text" name="departureTime" placeholder="Departure Time" onChange={handleInputChange} className="input input-bordered w-full" />
        <input type="text" name="returnTime" placeholder="Return Time" onChange={handleInputChange} className="input input-bordered w-full" />
        <input type="text" name="dressCode" placeholder="Dress Code" onChange={handleInputChange} className="input input-bordered w-full" />

        {/* Included */}
        <div>
          <label className="font-semibold">Included</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={includedItem}
              onChange={(e) => setIncludedItem(e.target.value)}
              placeholder="Enter item"
              className="input input-bordered flex-1"
            />
            <button type="button" className="btn btn-outline" onClick={() => addToArray('included', includedItem)}>Add</button>
          </div>
          <ul className="list-disc pl-5 space-y-1">
            {formData.included.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                {item}
                <button type="button" onClick={() => removeFromArray('included', index)} className="text-red-500 text-sm">Remove</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Not Included */}
        <div>
          <label className="font-semibold">Not Included</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={notIncludedItem}
              onChange={(e) => setNotIncludedItem(e.target.value)}
              placeholder="Enter item"
              className="input input-bordered flex-1"
            />
            <button type="button" className="btn btn-outline" onClick={() => addToArray('notIncluded', notIncludedItem)}>Add</button>
          </div>
          <ul className="list-disc pl-5 space-y-1">
            {formData.notIncluded.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                {item}
                <button type="button" onClick={() => removeFromArray('notIncluded', index)} className="text-red-500 text-sm">Remove</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Upload */}
        <div
          className="w-full p-6 border-2 border-dashed rounded-md text-center cursor-pointer"
          onDrop={(e) => {
            e.preventDefault();
            setImageFiles((prev) => [...prev, ...Array.from(e.dataTransfer.files)]);
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <p className="text-gray-500">Drag & drop images here, or click to select files</p>
          <input
            type="file"
            multiple
            onChange={(e) => setImageFiles([...imageFiles, ...Array.from(e.target.files)])}
            className="file-input w-full mt-2"
          />
        </div>

        {/* Preview Images */}
        {imageFiles.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mt-4">
            {imageFiles.map((file, index) => (
              <div key={index} className="relative group">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index}`}
                  className="w-full h-24 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full hover:bg-red-600"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        <button type="submit" className="btn btn-primary w-full mt-4">
          {uploading ? 'Uploading...' : 'Create Package'}
        </button>
      </form>
    </div>
  );
};

export default AddPackages;
