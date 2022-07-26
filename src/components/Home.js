import React from "react";

import GroupsOnline from "./GroupOnlie";
import Continue from "./Continue";
import ExplorePlans from "./ExplorePlans";
import Jobs from "./Jobs";
import Books from "./Books";
import About from "./About";
import Qutoes from "./Qutoes";

const Home = () => {
  return (
    <div className="mt-10">
      <div className=" container flex items-center gap-4 h-72  w-full z-0">
        <GroupsOnline />
        <Continue />
      </div>
      <div>
        <ExplorePlans />
        <Jobs />
      </div>
      <Books />
      <div className="flex">
        <About />
      </div>
      <div className="mt-14 h-56 quotes ">
        <Qutoes />
      </div>
      <p className="mt-14 text-3xl font-semibold ml-4">
        See why people that use central get hired right after, we have teamed
        with 30,000+ compaines
      </p>
    </div>
  );
};

export default Home;
