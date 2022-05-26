import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Review = ({ review }) => {
  const { name, rating, reviewText, image } = review;
  return (
    <div className="card mb-5 shadow-xl lg:flex-1">
      <div className="card-header flex bg-[#F3F6FA] p-5 items-center">
        <div className="card-image shadow-xl inline-block p-3 rounded-lg bg-white">
          <img
            className="w-14 h-14 rounded-full object-cover"
            src={image}
            alt=""
          />
        </div>

        <h2 className="font-bold text-2xl ml-4">{name}</h2>
        <div class="divider lg:divider-horizontal"></div>

        <div className="rating-text text-2xl font-bold ml-2">{rating}</div>
      </div>
      <div className="card-body text-left">
        <p>{reviewText}</p>
      </div>
    </div>
  );
};

export default Review;
