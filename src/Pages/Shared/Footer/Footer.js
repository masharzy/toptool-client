import { faEnvelope, faLocation, faLocationArrow, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer class="footer p-10 bg-base-200 text-base-content">
      <div>
        <h2 className="text-4xl font-bold">TOPTOOL</h2>
        <p className="text-left">
          Toptools.com.bd is an online store of quality <br /> professional
          tools with one of the largest ranges <br /> of power tools, hand
          tools, and cordless power <br /> tools.
        </p>
        <ul className="text-left leading-6">
          <li>
            <FontAwesomeIcon icon={faLocationArrow} /> Lahapara, Sonargaon, Narayanganj, Dhaka
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} /> 01639722575
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> support@toptool.com
          </li>
        </ul>
      </div>
      <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
