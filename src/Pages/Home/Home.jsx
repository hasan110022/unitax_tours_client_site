import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Destination from '../../Components/Destination/Destination';
import CheckoutPackeage from '../../Components/CheckoutPackage/CheckoutPackeage';
import EuropeTours from '../../Components/EuropeTour/EuropeTours';
import TrendingPackeages from '../../Components/TrendingPackeages/TrendingPackeages';
import DestinationForm from '../../Components/DestinationForm/DestinationForm';
import PopularTour from '../About/PopularTour/PopularTour';



const Home = () => {
    

    return (
        <div>
            {/* <Banner></Banner> */}
            <DestinationForm></DestinationForm>
            <Destination></Destination>
            <CheckoutPackeage></CheckoutPackeage>
            {/* <EuropeTours></EuropeTours> */}
            <PopularTour></PopularTour>
            <TrendingPackeages></TrendingPackeages>
        </div>
    );
};

export default Home;