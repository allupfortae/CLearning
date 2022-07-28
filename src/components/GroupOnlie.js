import React from "react";
import { Link } from "react-router-dom";
import Groups from "./Groupson";

const GroupOnlie = (props) => {
  const groupsdata = {
    id: 0,
    groupName: "EthicalHacker",
    ranking: "",
    catogery: ["Cyber"],
    host: "",
    numinGroup: [2],
  };

  return (
    <div className="w-1/2 mt-20">
      <div className="card h-62 ml-20 ">
        {props.inGroup ? (
          <div className="card h-62 ">
            <h3 className=" text-2xl font-medium  text-left tracking-wide ml-1 px-4 py-4">
              Conntect with your group
            </h3>

            <div className="flex ml-4 gap-2 justify-between">
              <p className=" text-gray-500 text-sm  ">
                Group Name: {groupsdata.groupName}
              </p>

              <p className="text-gray-500    text-sm ">
                Catogery: {groupsdata.catogery}
              </p>
              <p className="text-gray-500 mr-14  text-sm">
                Ranking: {groupsdata.ranking}
              </p>
            </div>

            <div className="flex items-center justify-between mr-12 mt-3 gap-[50px] ml-12">
              <Groups
                fName={props.fName}
                id={props.id}
                inGroup={props.inGroup}
                status={props.status}
              />
              <Groups
                fsName={props.fsName}
                id={props.id[1]}
                inGroup={props.inGroup[1]}
                status={props.status[1]}
              />
              <Groups hoster={props.hoster} />
              <Groups hoster={props.hoster} />
            </div>

            <div className="flex items-center justify-around pb-2 pt-1 text-gray-500 font-medium mt-3">
              <p className="cursor-pointer hover:text-blue-500">Group chat</p>
              <p className="cursor-pointer hover:text-blue-500 ">Challenges</p>
              <p className=" cursor-pointer hover:text-blue-500">Projects</p>
            </div>
          </div>
        ) : (
          <div className="h-[208px] flex flex-col items-center">
            <h1 className="text-2xl font-medium text-center mt-10">
              Join an group
            </h1>
            <Link to="/groups">
              <button className="bg-blue-500 px-3 rounded-md font-medium text-white mb-4 p-1 mt-5 ">
                Explore
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupOnlie;
