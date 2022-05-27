import React from "react";

const SpecialOffer = () => {
  return (
    <div className="offer flex justify-center">
      <div className="bg-[#F8F8F8] lg:px-32 py-20 leading-10">
        <h2 className="font-bold text-5xl">
          Gasoline <span className="text-primary">Chain Saw</span> <br />{" "}
          MGS5803
        </h2>
        <p>
          Low resistant Oregon chain and bar. Reasonable-design combined switch,
          more convenient to operate.
        </p>
        <button className="btn btn-primary px-10 text-white rounded-full">
          Explore Now
        </button>
        <img
          src="https://i.ibb.co/1GyYqWb/Gasoline-chain-saw-Banner-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SpecialOffer;
