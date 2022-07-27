import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Central.png";
import { FaSearch } from "react-icons/fa";
import Features from "../Features";

const Navbarsignup = () => {
  return (
    <div className=" relative  h-32">
      <div className=" justify-evenly flex items-center mt-10 ">
        <Link to="/home">
          <img className="centralLogo" src={Logo} alt="Central" />
        </Link>
        <p className="text-lg font-light text-gray-500 absolute top-5 left-80 -translate-x-5 translate-y-3 mr-4">
          <FaSearch />
        </p>
        <input
          className=" w-1/2 px-9 py-4 rounded-full outline outline-gray-500 text-base"
          type="text"
          placeholder="Search for anything"
        />
        <div className="flex items-center gap-4  text-sm text-gray-500 font-medium tracking tracking-wide cursor-pointer ml-3">
          <Link to="">
            <p className="hover:text-blue-700">Groups</p>
          </Link>
          <Link to="/plans" className="hover:text-blue-700">
            Plans
          </Link>
          <p className="hover:text-blue-700"> Publish</p>
        </div>

        <div className="ml-10 gap-1  flex font-semibold text-sm mr-3">
          <Link
            to="/"
            Link
            className="px-4 py-3 border border-black hover:bg-blue-700 hover:text-white "
          >
            Log in
          </Link>
          <Link
            to="/login"
            className="text-white bg-black px-4 py-3 hover:bg-blue-700"
          >
            Sign up
          </Link>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Navbarsignup;
