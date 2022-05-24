import React from 'react';
import Banner from './Banner/Banner';
import Reviews from './Reviews/Reviews';
import Summery from './Summery/Summery';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Tools/>
            <Summery/>
            <Reviews/>
        </div>
    );
};

export default Home;