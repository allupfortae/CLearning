import React from "react";
import "./Navbar.css";
import Features from "./Features";
import Logo from "../images/Central.png";
const Navbar = () => {
  return (
    <div className=" relative  h-32">
      <div className=" justify-evenly flex items-center mt-10">
        <img className="centralLogo" src={Logo} alt="Central" />
        <input
          className=" w-1/2 px-5 py-3 rounded-full outline outline-gray-500"
          type="text"
          placeholder="Search for anything"
        />
        <div className="flex items-center gap-7  text-sm text-gray-500 font-bold tracking tracking-wide cursor-pointer ">
          <p className="hover:text-blue-700">Groups</p>
          <p className="hover:text-blue-700">Plans</p>
          <p className="hover:text-blue-700">My learing</p>
        </div>
        <div className="ml-10  text-base flex font-medium ">
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
