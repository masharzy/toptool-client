import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Reviews = () => {
  return (
    <div>
      <div className="font-bold text-center relative  after:w-36 after:bg-white after:h-1 after:absolute after:-bottom-2 after:left-0 after:right-0 after:mx-auto inline-block">
        <h2 className="text-5xl">Reviews</h2>
        <span className="block">What out customers says</span>
      </div>
      <div className="card">
        <div className="card-header flex bg-[#F3F6FA] p-5">
          <div className="card-image shadow-xl inline-block p-3 rounded-lg bg-white">
            <img
              className="w-14 h-14 rounded-full object-cover"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
          <h2 className="font-bold text-2xl mx-10">John Doe</h2>
          <div className="rating-text">5.0</div>
          <div className="rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
