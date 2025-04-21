import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AboutEurope from '../../Components/EuropeTour/AboutEurope';
import Video from '../About/Video';
import FromGallery from './FromGallery';
import { Link } from 'react-router-dom';
import PromotionPackages from '../../Components/PromotionPackages/PromotionPackages';

const Gallery = () => {
    return (
        <div>
           <div className=''>

            <PromotionPackages></PromotionPackages>
           </div>
            {/* <AboutEurope></AboutEurope> */}
            <Video></Video>
            <FromGallery></FromGallery>
        </div>
    );
};

export default Gallery;