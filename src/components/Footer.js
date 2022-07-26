import React from "react";
import Logo from "../images/Central.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-1/4 flex flex-col ">
      <img className="ml-10" src={Logo} alt="Central Logo" />
      <div className="flex flex-col items-center">
        <button className="bg-blue-700 py-3 px-1 text-center  rounded-lg ml-4 text-white w-3/5 text-sm">
          Sign up for account
        </button>

        <div className="flex gap-3 items-center text-black text-3xl ml-10 mt-3">
          <a className="cursor-pointer icons">
            <FaFacebook />
          </a>
          <a className="cursor-pointer icons">
            <FaInstagram />
          </a>
          <a className="cursor-pointer icons">
            <FaLinkedinIn />
          </a>
          <a className="cursor-pointer icons">
            <FaTwitter />
          </a>
          <a className="cursor-pointer icons ">
            <FiMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
