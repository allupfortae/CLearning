import React from "react";
import GroupsOnline from "./GroupOnlie";
import LastViewClass from "./LastViewClasses";
import ExplorePlans from "./ExplorePlans";
import Jobs from "./Jobs";
const Home = (props) => {
  return (
    <div className="mt-10">
      <div className=" container flex items-center gap-4 h-72  w-full z-0">
        <GroupsOnline
          id={props.id}
          fName={props.fName}
          fsName={props.fsName}
          inGroup={props.inGroup}
          status={props.status}
          hoster={props.hoster}
        />
        <LastViewClass inClasses={props.inClasses} />
      </div>
      <div>
        <ExplorePlans />
        <Jobs />
      </div>
      <div className="flex"></div>
      <div className="mt-14 h-56 quotes "></div>
      <p className="mt-14 text-3xl font-semibold ml-4">
        See why people that use central get hired right after, we have teamed
        with 30,000+ compaines
      </p>
    </div>
  );
};

export default Home;
