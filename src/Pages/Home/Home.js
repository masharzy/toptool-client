import React from 'react';
import Banner from './Banner/Banner';
import OurTeam from './OurTeam/OurTeam';
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
            <OurTeam/>
            <Reviews/>
        </div>
    );
};

export default Home;