import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBills } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Summery = () => {
  return (
    <div className="bg-primary text-white pt-5 pb-16 mt-5">
      <div className="container mx-auto mt-20 lg:px-32">
        <div className="font-bold text-center relative  after:w-36 after:bg-white after:h-1 after:absolute after:-bottom-2 after:left-0 after:right-0 after:mx-auto inline-block">
          <h2 className="text-5xl">Summery Of Our Company</h2>
          <span className="block">Let's watch summery of our company.</span>
        </div>

        <div className="flex lg:justify-between justify-center md:space-x-5 md:space-y-5 space-y-5 flex-wrap mt-10">
          <div className="summery-item bg-info rounded-full w-[250px] h-[250px] flex flex-col items-center justify-center">
            <div className="summery-item-image">
              <FontAwesomeIcon
                className="text-white text-6xl"
                icon={faUserGroup}
              />
            </div>
            <h2 className="text-3xl font-bold my-3">100+</h2>
            <h3 className="text-white text-xl">Customers</h3>
          </div>
          <div className="summery-item bg-info rounded-full w-[250px] h-[250px] flex flex-col items-center justify-center">
            <div className="summery-item-image">
              <FontAwesomeIcon
                className="text-white text-6xl"
                icon={faMoneyBills}
              />
            </div>
            <h2 className="text-3xl font-bold my-3">120M+</h2>
            <h3 className="text-white text-xl">Annual revenue</h3>
          </div>
          <div className="summery-item bg-info rounded-full w-[250px] h-[250px] flex flex-col items-center justify-center">
            <div className="summery-item-image">
              <FontAwesomeIcon className="text-white text-6xl" icon={faStar} />
            </div>
            <h2 className="text-3xl font-bold my-3">33K+</h2>
            <h3 className="text-white text-xl">Reviews</h3>
          </div>
          <div className="summery-item bg-info rounded-full w-[250px] h-[250px] flex flex-col items-center justify-center">
            <div className="summery-item-image">
              <FontAwesomeIcon
                className="text-white text-6xl"
                icon={faScrewdriverWrench}
              />
            </div>
            <h2 className="text-3xl font-bold my-3">50+</h2>
            <h3 className="text-white text-xl">Tools</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summery;
