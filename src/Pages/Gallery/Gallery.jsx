import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AboutEurope from '../../Components/EuropeTour/AboutEurope';
import Video from '../About/Video';
import FromGallery from './FromGallery';

const Gallery = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutEurope></AboutEurope>
            <Video></Video>
            <FromGallery></FromGallery>
        </div>
    );
};

export default Gallery;