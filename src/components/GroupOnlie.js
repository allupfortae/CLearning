import React from "react";
import Groups from "./Groupson";

const GroupOnlie = () => {
  return (
    <div className="w-1/2">
      <div className="card h-62  ml-20 ">
        <h3 className=" text-2xl font-medium  text-left tracking-wide ml-1 px-4 py-4">
          Conntect with your group
        </h3>

        <div className="flex ml-4 gap-3">
          <p className=" text-gray-500 text-sm ">Group Name: EthicalJack</p>
          <p className="text-gray-500 text-sm ">Catogery: Pintester</p>
          <p className="text-gray-500 text-sm">Ranking: 5 out 5</p>
        </div>
        <div className="flex items-center gap-2">
          <Groups />
          <Groups />
          <Groups />
          <Groups />
        </div>
        <div className="flex items-center justify-around pb-2 pt-1 text-gray-500 font-medium mt-3">
          <p>Group chat</p>
          <p>Challenges</p>
          <p>Projects</p>
        </div>
      </div>
    </div>
  );
};

export default GroupOnlie;
