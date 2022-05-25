import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
  const {
    _id,
    toolName,
    toolImage,
    toolDescription,
    toolMinimumOrderQuantity,
    toolAvailableQuantity,
    toolPrice,
  } = tool;
  return (
    <div className="tool card border hover:shadow-xl hover:scale-105 transition-all duration-700">
      <div className="tool-image">
        <img src={toolImage} alt="TopTool" />
      </div>
      <div className="card-body px-5 text-left pb-5 pt-5">
        <h4 className="tool-name text-lg font-bold ">{toolName}</h4>
        <p>{toolDescription}</p>
        <span className="font-semibold">
          Minimum Order Quantity: {toolMinimumOrderQuantity}
        </span>
        <span className="font-semibold">
          Available Quantity: {toolAvailableQuantity}
        </span>
        <span className="font-semibold">Price (Per Unit): ${toolPrice}</span>
        <Link to={`/purchase/${_id}`} className="btn btn-primary text-white">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default Tool;
