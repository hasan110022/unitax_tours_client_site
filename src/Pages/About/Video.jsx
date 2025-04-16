import React from 'react';

const Video = () => {
    return (
        <div className="relative w-[1600px] max-sm:w-auto mt-12 my-4  mx-auto max-sm:p-10  pb-[33.25%]">
            <iframe 
                className="absolute top-0 left-0 w-full h-[500px]" 
                src="https://www.youtube.com/embed/278IRQ6HSi4?si=Simh5jm09P5yKna9" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Video;
