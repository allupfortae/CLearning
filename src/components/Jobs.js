import React from "react";

const Jobs = () => {
  return (
    <div className="mt-10 ">
      <h1 className="text-3xl font-semibold ml-14">Connect to Recruiters</h1>
      <div className="card2 w-{100%} mr-5 ml-14 mt-3 p-3  h-{200px} rounded-sm">
        <p className="text-xl font-bold p-0 mb-1">Central Carreers </p>
        <div className="flex items-center justify-between">
          <p className="text-gray-500 font-light text-sm pb-2">
            With central you can connect to recruiters and break into any skills
            you learned.
          </p>
          <a className="text-purple-700 underline " href="#">
            Conntect
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
