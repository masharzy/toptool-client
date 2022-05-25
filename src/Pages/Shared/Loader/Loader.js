import React from 'react';
import LoadingImage from "../../../images/loader.gif"

const Loader = () => {
    return (
        <div>
            <img className='mx-auto w-96' src={LoadingImage} alt="" />
        </div>
    );
};

export default Loader;