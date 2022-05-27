import React from 'react';
import Banner from './Banner/Banner';
import Reviews from './Reviews/Reviews';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Summery from './Summery/Summery';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Tools/>
            <Summery/>
            <SpecialOffer/>
            <Reviews/>
        </div>
    );
};

export default Home;