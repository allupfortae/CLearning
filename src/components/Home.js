import React from "react";
import "./Home.css";
import GroupsOnline from "./GroupOnlie";

const Home = () => {
  return (
    <div className="mt-10">
      <div className="container flex items-center gap-4 h-72">
        <GroupsOnline />
        <div className="card">
          <h3 className=" text-2xl font-bold text-left tracking-wide bg-gray-300">
            Continue learning
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
