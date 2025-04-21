import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AboutEurope from '../../Components/EuropeTour/AboutEurope';
import Video from './Video';
import PopularTour from './PopularTour/PopularTour';
import PromotionPackages from '../../Components/PromotionPackages/PromotionPackages';

const About = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            {/* <AboutEurope></AboutEurope> */}
            <PromotionPackages></PromotionPackages>
            <PopularTour></PopularTour>
            <Video></Video>
        </div>
    );
};

export default About;