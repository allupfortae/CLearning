import React from "react";
import "./Home.css";
import GroupsOnline from "./GroupOnlie";
import Continue from "./Continue";

const Home = () => {
  return (
    <div className="mt-10">
      <div className="container flex items-center gap-4 h-72">
        <GroupsOnline />
        <Continue />
      </div>
    </div>
  );
};

export default Home;
