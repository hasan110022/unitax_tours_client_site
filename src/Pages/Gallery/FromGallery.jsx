import React, { useState } from 'react';

const FromGallery = () => {
    const [image, setImage] = useState(false);

    const handleClick = () => {
        setImage(!image);
    };

    return (
        <div className='max-w-screen-lg max-sm:mt-96 max-sm:p-10  mx-auto border-2 border-white shadow-xl inset-0 p-5 h-auto rounded-xl'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold'>From the Gallery</h1>
                <button onClick={handleClick} className='btn bg-orange-500'>
                    View All Image
                </button>
            </div>

            <div
                className={`transition-opacity duration-1000 ${image ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                {image && (
                    <img
                        className='mt-12 mx-auto flex items-center justify-center'
                        src="https://i.ibb.co.com/sJwrkrLs/Screenshot-2025-03-07-155655.png"
                        alt=""
                    />
                )}
            </div>
        </div>
    );
};

export default FromGallery;
