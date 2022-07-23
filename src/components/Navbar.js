import React from "react";
import "./Navbar.css";
import Features from "./Features";
import Logo from "../images/Central.png";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { RiArrowDownSFill, RiLinksFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" relative  h-32">
      <div className=" justify-evenly flex items-center mt-10 ">
        <Link to="/">
          <img className="centralLogo" src={Logo} alt="Central" />
        </Link>
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
          <Link to="/plans" className="hover:text-blue-700">
            Plans
          </Link>
          <Link to="/mylearning" className="hover:text-blue-700">
            My learing
          </Link>
        </div>

        <div className="ml-10  text-base flex font-medium ">
          <div className="flex gap-2 items-center">
            <p className="text-black text-sm cursor-pointer">
              <FaPlus />
            </p>
            <p className="text-black text-sm mr-1 cursor-pointer">
              <RiArrowDownSFill />
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
