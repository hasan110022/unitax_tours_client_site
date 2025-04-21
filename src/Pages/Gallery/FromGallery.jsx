import React, { useState } from 'react';
import usePackages from '../../Hooks/usePackages';

const FromGallery = () => {
    const [image, setImage] = useState(false);
    const  [packages, isLoading, refetch] = usePackages()

    const handleClick = () => {
        setImage(!image);
    };

    return (
        <div className=' w-[90%] m-auto
          mx-auto border-2 border-white min-h-[500px] shadow-xl inset-0 p-5  rounded-xl'>
            

            <div
                className={`transition-opacity duration-1000 grid grid-cols-4 gap-4`}
            >
                
                    {
                        packages?.map((item, index)=><img
                        className='mt-12 mx-auto flex items-center justify-center h-[300px] object-cover gap-4'
                        src={item?.images[0]}
                        alt=""
                    />)
                    }
             
            </div>
        </div>
    );
};

export default FromGallery;
