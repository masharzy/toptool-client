import {
  faEnvelope,
  faLocation,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer w-full px-24 py-10 bg-[#1E2B47] text-white">
      <div className="text-base">
        <h2 className="text-4xl font-bold">TOPTOOL</h2>
        <p className="text-left">
          Toptools.com.bd is an online store of quality <br className="hidden lg:block" /> professional
          tools with one of the largest ranges <br className="hidden lg:block" /> of power tools, hand
          tools, and cordless power <br className="hidden lg:block" /> tools.
        </p>
        <ul className="text-left leading-6">
          <li>
            <FontAwesomeIcon icon={faLocationArrow} /> Lahapara, Sonargaon,
            Narayanganj, Dhaka
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} /> 01639722575
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> support@toptool.com
          </li>
        </ul>
      </div>
      <div className="text-base">
        <span class="font-bold text-primary text-xl">
          USEFUL LINKS
        </span>
        <Link to="/" class="link link-hover">
          Delivery Information
        </Link>
        <Link to="/" class="link link-hover">
          Returns Policy
        </Link>
        <Link to="/" class="link link-hover">
          Privacy Policy
        </Link>
        <Link to="/" class="link link-hover">
          Terms & Conditions
        </Link>
        <Link to="/" class="link link-hover">
          FAQs
        </Link>
      </div>
      <div className="text-base">
        <span class="font-bold font-mono text-primary text-xl">
          CUSTOMER SUPPORT
        </span>
        <Link to="/" class="link link-hover">
          My Account
        </Link>
        <Link to="/" class="link link-hover">
          Orders
        </Link>
        <Link to="/" class="link link-hover">
          Checkout
        </Link>
        <Link to="/" class="link link-hover">
          Contact Us
        </Link>
      </div>
      <div>
        <span class="font-bold font-mono text-primary text-xl">
          PAYMENT METHOD
        </span>
        <img
          className="w-52"
          src="https://i.ibb.co/K5QXmym/TT-Payment-Method-1-4-Outline.png"
          alt=""
        />
      </div>
    </footer>
  );
};

export default Footer;
