import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Reviews = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="font-bold text-center relative after:w-64 after:bg-primary after:h-1 after:absolute after:-bottom-2 after:left-0 after:right-0 after:mx-auto ">
        <h2 className="text-5xl text-primary">Reviews</h2>
        <span className="block">What out customers says</span>
      </div>
      <div className="lg:flex lg:space-x-5 flex-wrap mt-10">
        <div className="card mb-5 shadow-xl lg:flex-1">
          <div className="card-header flex bg-[#F3F6FA] p-5 items-center">
            <div className="card-image shadow-xl inline-block p-3 rounded-lg bg-white">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </div>

            <h2 className="font-bold text-2xl ml-4">John Doe</h2>
            <div class="divider lg:divider-horizontal"></div>

            <div className="rating-text text-2xl font-bold mr-4">5.0</div>
            <div className="rating text-yellow-400 text-lg">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="card-body text-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates adipisci nesciunt a ab in vel atque minima saepe quos,
              dolor molestiae veritatis neque aliquid omnis quibusdam illo quas
              sequi sit!
            </p>
          </div>
        </div>
        <div className="card mb-5 shadow-xl lg:flex-1">
          <div className="card-header flex bg-[#F3F6FA] p-5 items-center">
            <div className="card-image shadow-xl inline-block p-3 rounded-lg bg-white">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </div>

            <h2 className="font-bold text-2xl ml-4">John Doe</h2>
            <div class="divider lg:divider-horizontal"></div>

            <div className="rating-text text-2xl font-bold mr-4">5.0</div>
            <div className="rating text-yellow-400 text-lg">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="card-body text-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates adipisci nesciunt a ab in vel atque minima saepe quos,
              dolor molestiae veritatis neque aliquid omnis quibusdam illo quas
              sequi sit!
            </p>
          </div>
        </div>
        <div className="card mb-5 shadow-xl lg:flex-1">
          <div className="card-header flex bg-[#F3F6FA] p-5 items-center">
            <div className="card-image shadow-xl inline-block p-3 rounded-lg bg-white">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </div>

            <h2 className="font-bold text-2xl ml-4">John Doe</h2>
            <div class="divider lg:divider-horizontal"></div>

            <div className="rating-text text-2xl font-bold mr-4">5.0</div>
            <div className="rating text-yellow-400 text-lg">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="card-body text-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates adipisci nesciunt a ab in vel atque minima saepe quos,
              dolor molestiae veritatis neque aliquid omnis quibusdam illo quas
              sequi sit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates adipisci nesciunt a ab in vel atque minima saepe quos,
              dolor molestiae veritatis neque aliquid omnis quibusdam illo quas
              sequi sit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
