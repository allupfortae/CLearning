import React from "react";
import "./Home.css";
import GroupsOnline from "./GroupOnlie";
import Continue from "./Continue";
import ExplorePlans from "./ExplorePlans";
import Jobs from "./Jobs";
import Books from "./Books";

const Home = () => {
  return (
    <div className="mt-10">
      <div className=" container flex items-center gap-4 h-72  w-full z-0">
        <GroupsOnline />
        <Continue />
      </div>
      <div className="container">
        <ExplorePlans />
        <Jobs />
      </div>
      <Books />
    </div>
  );
};

export default Home;
