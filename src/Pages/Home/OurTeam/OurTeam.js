import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const OurTeam = () => {
  return (
    <div className="ourTeam my-10">
      <div className="font-bold text-center relative after:w-64 after:bg-primary after:h-1 after:absolute after:-bottom-2 after:left-0 after:right-0 after:mx-auto ">
        <h2 className="text-5xl text-primary my-10">Our Team</h2>
      </div>
      <div class="max-w-screen-xl px-4 mx-auto md:px-8">
        <div class="grid gap-4 md:grid-cols-3">
          <div className="card shadow-xl mb-5">
            <div class="w-full h-64 relative">
              <div
                class="absolute inset-0 bg-contain bg-no-repeat bg-center z-0"
                style={{
                  backgroundImage:
                    "url('https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg')",
                }}
              ></div>
              <div class="bg-black bg-opacity-25 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center font-semibold flex-col card-body cursor-pointer">
                <div class="flex flex-col items-center justify-center">
                  <div class="font-bold text-white md:text-lg">
                    Mahdy Abrar Sharzy
                  </div>
                  <p class="mb-3 text-sm text-white md:text-base md:mb-4">
                    Web Developer
                  </p>

                  <div class="flex">
                    <div class="flex gap-4">
                      <FontAwesomeIcon
                        className="text-2xl text-white"
                        icon={faFacebook}
                      />
                      <FontAwesomeIcon
                        className="text-2xl text-white"
                        icon={faTwitter}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-xl mb-5">
            <div class="w-full h-64 relative">
              <div
                class="absolute inset-0 bg-contain bg-no-repeat bg-center z-0"
                style={{
                  backgroundImage:
                    "url('https://i.ibb.co/gdFm6vr/118666227-358049152020113-127198947575397049-n.jpg')",
                }}
              ></div>
              <div class="bg-black bg-opacity-25 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center font-semibold flex-col card-body cursor-pointer">
                <div class="flex flex-col items-center justify-center">
                  <div class="font-bold text-white md:text-lg">
                    Lutfor Rahman Nayeem
                  </div>
                  <p class="mb-3 text-sm text-white md:text-base md:mb-4">
                    Useless
                  </p>

                  <div class="flex">
                    <div class="flex gap-4">
                      <FontAwesomeIcon
                        className="text-2xl text-white"
                        icon={faFacebook}
                      />
                      <FontAwesomeIcon
                        className="text-2xl text-white"
                        icon={faTwitter}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-xl mb-5">
            <div class="w-full h-64 relative">
              <div
                class="absolute inset-0 bg-contain bg-no-repeat bg-center z-0"
                style={{
                  backgroundImage:
                    "url('https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg')",
                }}
              ></div>
              <div class="bg-black bg-opacity-25 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center font-semibold flex-col card-body cursor-pointer">
                <div class="flex flex-col items-center justify-center">
                  <div class="font-bold text-white md:text-lg">John Doe</div>
                  <p class="mb-3 text-sm text-white md:text-base md:mb-4">GM</p>

                  <div class="flex">
                    <div class="flex gap-4">
                      <FontAwesomeIcon
                        className="text-2xl text-white"
                        icon={faFacebook}
                      />
                      <FontAwesomeIcon
                        className="text-2xl text-white"
                        icon={faTwitter}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
