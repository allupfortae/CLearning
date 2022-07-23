import React from "react";
import "./Navbar.css";
import Features from "./Features";
import Logo from "../images/Central.png";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className=" relative  h-32">
      <div className=" justify-evenly flex items-center mt-10 ">
        <img className="centralLogo" src={Logo} alt="Central" />
        <p className="text-lg font-light text-gray-500 absolute top-5 left-80 translate-x-2 translate-y-3 mr-3">
          <FaSearch />
        </p>
        <input
          className=" w-1/2 px-8 py-4 rounded-full outline outline-gray-500 text-xl"
          type="text"
          placeholder="Search for anything"
        />
        <div className="flex items-center gap-4  text-sm text-gray-500 font-bold tracking tracking-wide cursor-pointer ">
          <p className="hover:text-blue-700">Groups</p>
          <p className="hover:text-blue-700">Plans</p>
          <p className="hover:text-blue-700">My learing</p>
        </div>

        <div className="ml-10  text-base flex font-medium ">
          <div className="flex gap-2 items-center">
            <p className="text-black text-sm ">
              <FaPlus />
            </p>
            <p className="text-black text-sm mr-1">
              <RiArrowDownSLine />
            </p>
          </div>
          <span className="rounded-full items-center  text-white px-4 py-2  text-lg font-bold bg-blue-500 ml-2 cursor-pointer">
            A
          </span>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Navbar;
