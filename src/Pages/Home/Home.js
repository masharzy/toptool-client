import React from 'react';
import Banner from './Banner/Banner';
import Summery from './Summery/Summery';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Tools/>
            <Summery/>
        </div>
    );
};

export default Home;