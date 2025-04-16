import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AboutEurope from '../../Components/EuropeTour/AboutEurope';
import Video from './Video';
import PopularTour from './PopularTour/PopularTour';

const About = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutEurope></AboutEurope>
            <Video></Video>
            <PopularTour></PopularTour>
        </div>
    );
};

export default About;