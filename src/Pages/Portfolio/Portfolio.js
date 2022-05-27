import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col justify-between lg:flex-row-reverse lg:px-20">
          <img
            src="https://i.ibb.co/JFyBzCJ/cube.png"
            class="rounded-lg animate-pulse duration-1000 object-cover lg:block hidden"
            alt=""
          />
          <div className="text-left lg:w-2/5">
            <p>
              Hi! I'm <span className="text-primary">Mahdy Abrar Sharzy</span>{" "}
              and
            </p>
            <h1 class="text-2xl lg:text-5xl font-bold mt-2 -mb-3">
              I'll Help You Build <br className="lg:block hidden" /> Your Dream
            </h1>
            <p class="py-6 text-slate-500 text-justify">
              I'm a web developer based in Narayanganj, Bangladesh. I'm
              passionate about building websites and web applications. I'm a
              self-taught developer with a background in design and a passion
              for technology. I'm currently looking for a junior web developer
              position.
            </p>
            <button class="btn btn-primary text-white px-10 rounded-full">
              Contact With Me{" "}
              <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <div class="hero mb-20">
        <div class="hero-content flex-col justify-between lg:flex-row-reverse lg:px-20">
          <div className="text-left lg:w-2/5">
            <h1 class="text-5xl font-bold mt-2 -mb-3">About Me</h1>
            <p class="py-6 text-slate-500 text-justify">
              I'm a Front-End Developer located in Bangladesh. I have a serious
              passion for UI effects, animations and creating intuitive, dynamic
              user experiences.
              <br />
              <br />
              Well-organised person, problem solver, independent employee with
              high attention to detail. outdoor activities, TV series and
              English literature.
              <br />
              <br />
              Interested in the entire frontend spectrum and working on
              ambitious projects with positive people.
            </p>
            <button class="btn btn-primary text-white px-10 rounded-full">
              Hire Me
              <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
            </button>
          </div>
          <img
            src="https://i.ibb.co/pZzkMGB/279079650-362931225887446-7303444652959045028-n.jpg"
            class="w-96 h-96 rounded-[50%] blur hover:blur-none hover:rounded-[25%] cursor-help duration-500 object-cover hidden lg:block"
            alt=""
          />
        </div>
      </div>
      <div class="hero mb-20">
        <div class="hero-content justify-between flex-col-reverse lg:flex-row-reverse lg:px-20">
          <div className="text-left">
            <p>HTML</p>
            <progress
              class="progress w-96"
              value="99"
              max="100"
            ></progress>{" "}
            <span>99%</span>
            <p>CSS</p>
            <progress
              class="progress progress-primary w-96"
              value="90"
              max="100"
            ></progress>{" "}
            <span>90%</span>
            <p>JavaScript</p>
            <progress
              class="progress progress-success w-96"
              value="70"
              max="100"
            ></progress>{" "}
            <span>70%</span>
            <p>ReactJs</p>
            <progress
              class="progress progress-warning w-96"
              value="90"
              max="100"
            ></progress>{" "}
            <span>90%</span>
            <p>NodeJs</p>
            <progress
              class="progress progress-error w-96"
              value="60"
              max="100"
            ></progress>{" "}
            <span>60%</span>
            <p>ExpressJs</p>
            <progress
              class="progress progress-primary w-96"
              value="80"
              max="100"
            ></progress>{" "}
            <span>80%</span>
            <p>MongoDB</p>
            <progress
              class="progress progress-accent w-96"
              value="95"
              max="100"
            ></progress>{" "}
            <span>95%</span>
          </div>
          <div className="text-left lg:w-2/5">
            <h1 class="text-5xl font-bold mt-2 -mb-3">My Skills</h1>
            <p class="py-6 text-slate-500 text-justify">
              I create successful responsive websites that are fast, easy to
              use, and built with best practices. The main area of my expertise
              is front-end development, HTML, CSS, JS, building small and medium
              web apps, custom plugins, features, animations, and coding
              interactive layouts.
            </p>
            <button class="btn btn-primary text-white px-10 rounded-full">
              Hire Me
              <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <div class="mb-20">
        <h2 className="text-4xl font-bold mb-10">Recent Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-52">
          <div className="card shadow-xl mr-5 mb-5">
            <div class="w-full h-64 relative">
              <div
                class="absolute inset-0 bg-contain bg-no-repeat bg-center z-0"
                style={{
                  backgroundImage:
                    "url('https://i.ibb.co/482PsRT/1607431271223.png')",
                }}
              ></div>
              <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center font-semibold flex-col card-body cursor-pointer">
                <h3 className="text-2xl font-bold">Doctor's Portal</h3>
                <a
                  className="btn btn-ghost bg-white text-black hover:text-white duration-500"
                  href="/"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="card shadow-xl mr-5 mb-5">
            <div class="w-full h-64 relative">
              <div
                class="absolute inset-0 bg-contain bg-no-repeat bg-center z-0"
                style={{
                  backgroundImage:
                    "url('https://i.ibb.co/dkPwvSn/1607430579419.png')",
                }}
              ></div>
              <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center font-semibold flex-col card-body cursor-pointer">
                <h3 className="text-2xl font-bold">Hot Gadget</h3>
                <a
                  className="btn btn-ghost bg-white text-black hover:text-white duration-500"
                  href="/"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="card shadow-xl mr-5 mb-5">
            <div class="w-full h-64 relative">
              <div
                class="absolute inset-0 bg-contain bg-no-repeat bg-center z-0"
                style={{
                  backgroundImage:
                    "url('https://i.ibb.co/rp9Vv0Z/Screenshot-3.png')",
                }}
              ></div>
              <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center font-semibold flex-col card-body cursor-pointer">
                <h3 className="text-2xl font-bold">Doctor's Portal</h3>
                <a
                  className="btn btn-ghost bg-white text-black hover:text-white duration-500"
                  href="https://convention-center-masharzy.netlify.app"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="card shadow-xl mr-5 mb-5">
            <div class="w-full h-64 relative">
              <div
                class="absolute inset-0 bg-contain bg-no-repeat bg-center z-0"
                style={{
                  backgroundImage:
                    "url('https://i.ibb.co/vz9bXKs/Screenshot-6.png')",
                }}
              ></div>
              <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center font-semibold flex-col card-body cursor-pointer">
                <h3 className="text-2xl font-bold">E-School</h3>
                <a
                  className="btn btn-ghost bg-white text-black hover:text-white duration-500"
                  href="https://masharzy.github.io/e-school"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="card shadow-xl mr-5 mb-5">
            <div class="w-full h-64 relative">
              <div
                class="absolute inset-0 bg-contain bg-no-repeat bg-center z-0"
                style={{
                  backgroundImage:
                    "url('https://i.ibb.co/HzRCvrG/Screenshot-4.png')",
                }}
              ></div>
              <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center font-semibold flex-col card-body cursor-pointer">
                <h3 className="text-2xl font-bold">Influencer Gear</h3>
                <a
                  className="btn btn-ghost bg-white text-black hover:text-white duration-500"
                  href="https://masharzy.github.io/influencer-gear/index.html"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="card shadow-xl mr-5 mb-5">
            <div class="w-full h-64 relative">
              <div
                class="absolute inset-0 bg-contain bg-no-repeat bg-center z-0"
                style={{
                  backgroundImage:
                    "url('https://i.ibb.co/TYdzyJ3/Screenshot-5.png')",
                }}
              ></div>
              <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center font-semibold flex-col card-body cursor-pointer">
                <h3 className="text-2xl font-bold">App Lab</h3>
                <a
                  className="btn btn-ghost bg-white text-black hover:text-white duration-500"
                  href="https://masharzy.github.io/app-lab-web/"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
