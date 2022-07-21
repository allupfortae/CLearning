import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="flex items-center relative NavBar h-32">
      <div className="container ml-3 px-4 flex items-center mt-8">
        <h1 className="text-3xl font-bold tracking-wide ">Central</h1>
        <input
          className="ml-32 w-1/2 px-5 py-3 rounded-full outline outline-gray-500"
          type="text"
          placeholder="Search for anything"
        />
        <div className="flex items-center gap-7 ml-12 text-sm text-gray-500 font-bold tracking tracking-wide">
          <p>Groups</p>
          <p>Plans</p>
          <p>My learing</p>
        </div>
      </div>
      <div className="mt-8  text-base flex gap-4 font-medium">
        <span className="rounded-full items-center  text-white px-4 py-2 mr-10 text-lg font-bold bg-blue-500">
          A
        </span>
      </div>
    </div>
  );
};

export default Navbar;
