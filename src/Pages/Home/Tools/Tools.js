import React from "react";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <div className="container lg:px-20 p-0 mx-auto mt-20">
      <h2 className="font-bold text-center relative text-5xl text-primary after:w-36 after:bg-info after:h-1 after:absolute after:-bottom-2 after:left-0 after:right-0 after:mx-auto inline-block">
        Featured Tools
      </h2>
      <div className="grid grid-cols-3 mt-10 gap-x-5">

        <div className="tool card border hover:shadow-xl hover:scale-105 transition-all duration-700">
          <div className="tool-image">
            <img src="https://i.ibb.co/pfj35Hq/tool-1.webp" alt="TopTool" />
          </div>
          <div className="card-body px-5 text-left pb-5 pt-5">
            <h4 className="tool-name text-lg font-bold ">
              Combo Sport Stereos for coupe Models 199
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa similique neque quo, dolor fuga!</p>
            <span className="font-semibold">Minimum Order Quantity: 1000</span>
            <span className="font-semibold">Available Quantity: 30000</span>
            <span className="font-semibold">Price (Per Unit): $250</span>
            <Link to='/purchase' className="btn btn-primary text-white">Buy Now</Link>
          </div>
        </div>

        <div className="tool card border hover:shadow-xl hover:scale-105 transition-all duration-700">
          <div className="tool-image">
            <img src="https://i.ibb.co/t2NSr4B/tool-2.webp" alt="TopTool" />
          </div>
          <div className="card-body px-5 text-left pb-5 pt-5">
            <h4 className="tool-name text-lg font-bold ">
              Combo Sport Stereos for coupe Models 199
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa similique neque quo, dolor fuga!</p>
            <span className="font-semibold">Minimum Order Quantity: 1000</span>
            <span className="font-semibold">Available Quantity: 30000</span>
            <span className="font-semibold">Price (Per Unit): $250</span>
            <Link to='/purchase' className="btn btn-primary text-white">Buy Now</Link>
          </div>
        </div>

        <div className="tool card border hover:shadow-xl hover:scale-105 transition-all duration-700">
          <div className="tool-image">
            <img src="https://i.ibb.co/JvLmkJH/tool-3.webp" alt="TopTool" />
          </div>
          <div className="card-body px-5 text-left pb-5 pt-5">
            <h4 className="tool-name text-lg font-bold ">
              Combo Sport Stereos for coupe Models 199
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa similique neque quo, dolor fuga!</p>
            <span className="font-semibold">Minimum Order Quantity: 1000</span>
            <span className="font-semibold">Available Quantity: 30000</span>
            <span className="font-semibold">Price (Per Unit): $250</span>
            <Link to='/purchase' className="btn btn-primary text-white">Buy Now</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Tools;
