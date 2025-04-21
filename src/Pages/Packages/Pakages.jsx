import React from 'react';
import CheckoutPackeage from '../../Components/CheckoutPackage/CheckoutPackeage';
import TrendingPackeages from '../../Components/TrendingPackeages/TrendingPackeages';
import EuropeTours from '../../Components/EuropeTour/EuropeTours';

const Pakages = () => {
    return (
        <div>
                        <CheckoutPackeage></CheckoutPackeage>
            {/* <EuropeTours></EuropeTours> */}
            <TrendingPackeages></TrendingPackeages>
            
        </div>
    );
};

export default Pakages;