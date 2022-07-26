import React from "react";
import Signup from "./Signup";
import Navbarsignup from "./Navbarsignup";
import Footersignup from "./Footersignup";
import HomeFeatures from "../Home/HomeFeatures";
import HomeList from "./HomeList";
import userdata from "../Data/UserData";

const HomePage = () => {
  return (
    <div>
      <Navbarsignup />
      <h1 className="text-center tracking-wide text-[50px] font-lg mt-10  font-semibold">
        Get <span className="text-blue-700  "> ONE MONTH FREE </span>
        of Central
      </h1>
      <h1 className="font-base text-xl text-center  mb-10  tracking-wide ">
        Learn in groups and work on real world projects
      </h1>
      <div className="flex items-center justify-center">
        <Signup />
      </div>
      <HomeFeatures />
      <HomeList />
      <Footersignup />
    </div>
  );
};

export default HomePage;
